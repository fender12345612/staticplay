/**
 * Engineering Mechanics: Statics - Problem Randomizer App Logic
 * Designed with Hallmark & UI/UX Pro Max Principles
 * Source: R.C. Hibbeler Engineering Mechanics: Statics (14th Edition)
 */

(function () {
  'use strict';

  // State Management
  const state = {
    allProblems: [],
    chaptersMeta: {},
    filteredProblems: [],
    currentProblem: null,
    isSolutionVisible: false,
    history: [],
    historyIndex: -1,
    selectedLessonChapter: 1,
    selectedLessonTab: 'formulas',
    bookmarks: new Set(JSON.parse(localStorage.getItem('statics_bookmarks') || '[]')),
    filters: {
      difficulty: 'all',
      chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    exam: {
      active: false,
      secondsLeft: 30 * 60,
      intervalId: null
    },
    gamified: {
      xp: parseInt(localStorage.getItem('statics_xp') || '1650', 10),
      solvedCount: parseInt(localStorage.getItem('statics_solved') || '28', 10)
    }
  };

  // DOM Elements cache
  const el = {
    // Problem Elements
    problemCard: document.getElementById('problemCard'),
    problemNumber: document.getElementById('problemNumber'),
    chapterBadge: document.getElementById('chapterBadge'),
    difficultyBadge: document.getElementById('difficultyBadge'),
    pageIndicator: document.getElementById('pageIndicator'),
    questionText: document.getElementById('questionText'),
    questionThaiSummary: document.getElementById('questionThaiSummary'),
    diagramImage: document.getElementById('diagramImage'),
    diagramWrapper: document.getElementById('diagramWrapper'),
    diagramLoader: document.getElementById('diagramLoader'),
    diagramContainer: document.getElementById('diagramContainer'),
    diagramHint: document.getElementById('diagramHint'),
    imagePlaceholder: document.getElementById('imagePlaceholder'),
    imageModal: document.getElementById('imageModal'),
    modalImage: document.getElementById('modalImage'),
    
    // Solution Elements
    solutionSection: document.getElementById('solutionSection'),
    solutionToggleBtn: document.getElementById('solutionToggleBtn'),
    solutionToggleText: document.getElementById('solutionToggleText'),
    solutionIcon: document.getElementById('solutionIcon'),
    theoryText: document.getElementById('theoryText'),
    finalAnswerContainer: document.getElementById('finalAnswerContainer'),
    finalAnswerList: document.getElementById('finalAnswerList'),
    solutionStepsText: document.getElementById('solutionStepsText'),
    
    // Progress tracking demo
    solvedCounterText: document.getElementById('solvedCounterText'),
    xpPointsText: document.getElementById('xpPointsText'),
    
    // Controls
    randomBtn: document.getElementById('randomBtn'),
    diceIcon: document.getElementById('diceIcon'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    bookmarkBtn: document.getElementById('bookmarkBtn'),
    bookmarkIcon: document.getElementById('bookmarkIcon'),
    copyBtn: document.getElementById('copyBtn'),
    
    // Filters
    diffAllBtn: document.getElementById('diffAllBtn'),
    diffEasyBtn: document.getElementById('diffEasyBtn'),
    diffMediumBtn: document.getElementById('diffMediumBtn'),
    diffHardBtn: document.getElementById('diffHardBtn'),
    chapterChipsContainer: document.getElementById('chapterChipsContainer'),
    selectAllChaptersBtn: document.getElementById('selectAllChaptersBtn'),
    clearAllChaptersBtn: document.getElementById('clearAllChaptersBtn'),
    poolCountBadge: document.getElementById('poolCountBadge'),
    
    // Modals
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    cheatsheetModal: document.getElementById('cheatsheetModal'),
    cheatsheetContent: document.getElementById('cheatsheetContent'),
    cheatsheetBtn: document.getElementById('cheatsheetBtn'),
    closeCheatsheetBtn: document.getElementById('closeCheatsheetBtn'),

    // Lesson Viewer Elements
    lessonsBtn: document.getElementById('lessonsBtn'),
    lessonsModal: document.getElementById('lessonsModal'),
    closeLessonsBtn: document.getElementById('closeLessonsBtn'),
    lessonChapterList: document.getElementById('lessonChapterList'),
    lessonHeaderBar: document.getElementById('lessonHeaderBar'),
    lessonTabContent: document.getElementById('lessonTabContent'),
    tabLessonFormulas: document.getElementById('tabLessonFormulas'),
    tabLessonReviewSheets: document.getElementById('tabLessonReviewSheets'),
    tabLessonPdfReader: document.getElementById('tabLessonPdfReader'),
    shortcutsModal: document.getElementById('shortcutsModal'),
    shortcutsBtn: document.getElementById('shortcutsBtn'),
    closeShortcutsBtn: document.getElementById('closeShortcutsBtn'),
    
    // Timer
    timerToggleBtn: document.getElementById('timerToggleBtn'),
    timerToggleIcon: document.getElementById('timerToggleIcon'),
    timerToggleText: document.getElementById('timerToggleText'),
    timerIcon: document.getElementById('timerIcon'),
    timerTime: document.getElementById('timerTime'),
    timerResetBtn: document.getElementById('timerResetBtn')
  };

  // Safe KaTeX Math Renderer
  function wrapMath(str, display = false) {
    if (!str) return '';
    const s = str.trim();
    if (s.startsWith('$$') || s.startsWith('\\[') || (s.startsWith('$') && s.endsWith('$') && s.length > 2)) {
      return s;
    }
    return display ? `$$${s}$$` : `$${s}$`;
  }

  function renderMath(targetElement) {
    if (typeof renderMathInElement === 'function' && targetElement) {
      try {
        renderMathInElement(targetElement, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\\\[', right: '\\\\]', display: true },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render warning:', err);
      }
    }
  }

  // Initialize Application
  async function init() {
    loadTheme();
    setupEventListeners();

    detectImageStructure();

    const inlineData = window.PROBLEMS_DATA || window.STATICS_DATA;
    if (inlineData && Array.isArray(inlineData.problems) && inlineData.problems.length > 0) {
      console.log('Loaded from inline dataset:', inlineData.problems.length, 'problems');
      loadData(inlineData);
      return;
    }

    try {
      const resp = await fetch('data/problems.json?v=4.1.' + Date.now());
      const data = await resp.json();
      loadData(data);
    } catch (err) {
      if (inlineData) {
        console.warn('Fetch failed, falling back to inline dataset');
        loadData(inlineData);
      } else {
        console.error('Failed to load problems data:', err);
        showToast('ไม่สามารถโหลดข้อมูลโจทย์ได้ กรุณาตรวจสอบไฟล์', 'error');
      }
    }
  }

  function loadData(data) {
    state.allProblems = data.problems || [];
    state.chaptersMeta = data.chapters || {};
    
    renderChapterFilters();
    updateDifficultyCounts();
    applyFilters();
    
    // Initial random pick
    getRandomProblem();

    // Update Progress Demo
    updateGamifiedUI();

    // Initial render of Cheatsheet math formulas
    if (el.cheatsheetContent) {
      renderMath(el.cheatsheetContent);
    }
  }

  // Filter Logic
  function applyFilters() {
    state.filteredProblems = state.allProblems.filter(p => {
      // Difficulty match
      if (state.filters.difficulty !== 'all' && p.difficulty !== state.filters.difficulty) {
        return false;
      }
      // Chapter match
      if (!state.filters.chapters.includes(p.chapter)) {
        return false;
      }
      return true;
    });

    if (el.poolCountBadge) {
      el.poolCountBadge.textContent = `${state.filteredProblems.length} ข้อในตัวเลือก`;
    }

    updateActiveFilterUI();
  }

  function updateActiveFilterUI() {
    const diffButtons = [
      { id: 'all', btn: el.diffAllBtn },
      { id: 'easy', btn: el.diffEasyBtn },
      { id: 'medium', btn: el.diffMediumBtn },
      { id: 'hard', btn: el.diffHardBtn }
    ];

    diffButtons.forEach(({ id, btn }) => {
      if (!btn) return;
      if (state.filters.difficulty === id) {
        btn.classList.add('ring-4', 'ring-brand-500/50', 'scale-105', 'font-extrabold');
        btn.classList.remove('opacity-70');
      } else {
        btn.classList.remove('ring-4', 'ring-brand-500/50', 'scale-105', 'font-extrabold');
        btn.classList.add('opacity-70');
      }
    });
  }

  function renderChapterFilters() {
    if (!el.chapterChipsContainer) return;
    el.chapterChipsContainer.innerHTML = '';

    const chCounts = {};
    state.allProblems.forEach(p => {
      chCounts[p.chapter] = (chCounts[p.chapter] || 0) + 1;
    });

    for (let ch = 1; ch <= 11; ch++) {
      const meta = state.chaptersMeta[ch] || { name_th: `บทที่ ${ch}`, name_en: '' };
      const count = chCounts[ch] || 0;
      const isChecked = state.filters.chapters.includes(ch);

      const chip = document.createElement('div');
      chip.className = 'chip-checkbox inline-block';
      chip.innerHTML = `
        <input type="checkbox" id="ch_${ch}" value="${ch}" class="hidden" ${isChecked ? 'checked' : ''}>
        <label for="ch_${ch}" class="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition-all select-none ${
          isChecked 
            ? 'bg-gradient-to-r from-indigo-500 to-brand-600 text-white border-brand-400 shadow-sm' 
            : 'bg-white text-slate-700 border-white/80 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700 shadow-xs'
        }">
          <span class="font-heading font-bold">บทที่ ${ch}</span>
          <span class="opacity-90 truncate max-w-[130px] sm:max-w-none">${meta.name_th}</span>
          <span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
            isChecked ? 'bg-brand-700 text-brand-100' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
          }">${count}</span>
        </label>
      `;

      const input = chip.querySelector('input');
      input.addEventListener('change', (e) => {
        const val = parseInt(e.target.value, 10);
        if (e.target.checked) {
          if (!state.filters.chapters.includes(val)) state.filters.chapters.push(val);
        } else {
          state.filters.chapters = state.filters.chapters.filter(c => c !== val);
        }
        renderChapterFilters();
        applyFilters();
      });

      el.chapterChipsContainer.appendChild(chip);
    }
  }

  function updateDifficultyCounts() {
    let easy = 0, med = 0, hard = 0;
    state.allProblems.forEach(p => {
      if (p.difficulty === 'easy') easy++;
      else if (p.difficulty === 'medium') med++;
      else if (p.difficulty === 'hard') hard++;
    });

    const cEasy = document.getElementById('countEasy');
    const cMed = document.getElementById('countMedium');
    const cHard = document.getElementById('countHard');
    const cAll = document.getElementById('countAll');

    if (cEasy) cEasy.textContent = easy;
    if (cMed) cMed.textContent = med;
    if (cHard) cHard.textContent = hard;
    if (cAll) cAll.textContent = state.allProblems.length;
  }

  // ========================================================================
  // ULTRA-FAST RESILIENT IMAGE ENGINE (Auto-Path Learning, Concurrent Probing, Preloader)
  // ========================================================================
  let learnedProblem2Prefix = null;
  let learnedFundamentalPrefix = null;

  try {
    learnedProblem2Prefix = localStorage.getItem('statics_img_p2_prefix') || null;
    learnedFundamentalPrefix = localStorage.getItem('statics_img_f_prefix') || null;
  } catch (e) {}

  const imageCache = new Set();
  let activeImageRequestId = 0;

  // Background Structure Auto-Detector (Fires immediately on startup)
  function detectImageStructure() {
    // 1. Problem 2 Structure Probe (part 1)
    if (!learnedProblem2Prefix) {
      const p2Probes = [
        'images/problem 2/part1/2_1.webp',
        'images/problem%202/part1/2_1.webp',
        'problem 2/part1/2_1.webp',
        'problem%202/part1/2_1.webp',
        'part1/2_1.webp',
        'problem_2_part1_92files/2_1.webp',
        'images/problems2/part1/2_1.webp',
        'problems2/part1/2_1.webp',
        'images/problem2/part1/2_1.webp',
        'problem2/part1/2_1.webp',
        'github-upload-batches/problem 2/part1/2_1.webp',
        'github-upload-batches/problem_2_part1_92files/2_1.webp'
      ];

      p2Probes.forEach(url => {
        const probe = new Image();
        probe.onload = () => {
          if (!learnedProblem2Prefix) {
            const m = url.match(/^(.*?)(part1\/)/i);
            if (m) {
              learnedProblem2Prefix = m[1];
              try { localStorage.setItem('statics_img_p2_prefix', learnedProblem2Prefix); } catch (e) {}
              console.log('⚡ [Statics Engine] Auto-detected Problem 2 image prefix:', learnedProblem2Prefix);
            }
          }
        };
        probe.src = url;
      });
    }

    // 2. Fundamental Problems Structure Probe
    if (!learnedFundamentalPrefix) {
      const fProbes = [
        'images/problems/F2_1.webp',
        'problems/F2_1.webp',
        '1_problems_batch1_98files/F2_1.webp',
        'github-upload-batches/1_problems_batch1_98files/F2_1.webp',
        'github-upload-batches/images/problems/F2_1.webp'
      ];

      fProbes.forEach(url => {
        const probe = new Image();
        probe.onload = () => {
          if (!learnedFundamentalPrefix) {
            const idx = url.lastIndexOf('F2_1.webp');
            if (idx !== -1) {
              learnedFundamentalPrefix = url.substring(0, idx);
              try { localStorage.setItem('statics_img_f_prefix', learnedFundamentalPrefix); } catch (e) {}
              console.log('⚡ [Statics Engine] Auto-detected Fundamental image prefix:', learnedFundamentalPrefix);
            }
          }
        };
        probe.src = url;
      });
    }
  }

  // Generate highly targeted candidate URLs (Eliminates 200+ redundant 404 roundtrips)
  function getFastCandidates(problem) {
    if (!problem || !problem.image) return [];
    const rawPath = (problem.image || '').trim();
    const fname = rawPath.split('/').pop();
    if (!fname) return [];

    const candidates = [];

    // Check if this problem belongs to Part 1 - 9 (Hibbeler Chapter Problems)
    const partMatch = rawPath.match(/part(\d+)/i);
    if (partMatch) {
      const partNum = parseInt(partMatch[1], 10);
      const partStr = `part${partNum}`;
      const batchStr = partNum === 9 ? 'problem_2_part9_60files' : `problem_2_part${partNum}_92files`;

      // 1. Learned winning prefix (Top priority - succeeds instantaneously)
      if (learnedProblem2Prefix) {
        if (learnedProblem2Prefix.endsWith('/')) {
          candidates.push(`${learnedProblem2Prefix}${partStr}/${fname}`);
        } else {
          candidates.push(`${learnedProblem2Prefix}/${partStr}/${fname}`);
        }
      }

      // 2. Full standard directory (raw and encoded space)
      candidates.push(`images/problem 2/${partStr}/${fname}`);
      candidates.push(`images/problem%202/${partStr}/${fname}`);

      // 3. Direct root part upload (when uploaded directly to GitHub root: part1/, part2/, etc.)
      candidates.push(`${partStr}/${fname}`);

      // 4. Problem 2 root folder
      candidates.push(`problem 2/${partStr}/${fname}`);
      candidates.push(`problem%202/${partStr}/${fname}`);

      // 5. Batch folder names (from github-upload-batches)
      candidates.push(`${batchStr}/${fname}`);
      candidates.push(`problems2/${partStr}/${fname}`);
      candidates.push(`images/problems2/${partStr}/${fname}`);
      candidates.push(`problem2/${partStr}/${fname}`);
      candidates.push(`images/problem2/${partStr}/${fname}`);

      // 6. Subfolder under github-upload-batches
      candidates.push(`github-upload-batches/problem 2/${partStr}/${fname}`);
      candidates.push(`github-upload-batches/${batchStr}/${fname}`);

    } else {
      // Fundamental Problem (F-series)
      const ch = problem.chapter || 2;
      let batchFolder = '1_problems_batch1_98files';
      if (ch >= 9) {
        batchFolder = '3_problems_batch3_81files';
      } else if (ch >= 5) {
        batchFolder = '2_problems_batch2_98files';
      }

      // 1. Learned fundamental prefix
      if (learnedFundamentalPrefix) {
        if (learnedFundamentalPrefix.endsWith('/')) {
          candidates.push(`${learnedFundamentalPrefix}${fname}`);
        } else {
          candidates.push(`${learnedFundamentalPrefix}/${fname}`);
        }
      }

      // 2. Standard path
      candidates.push(`images/problems/${fname}`);
      candidates.push(`problems/${fname}`);

      // 3. Batch folder
      candidates.push(`${batchFolder}/${fname}`);

      // 4. Under github-upload-batches
      candidates.push(`github-upload-batches/${batchFolder}/${fname}`);
      candidates.push(`github-upload-batches/images/problems/${fname}`);
    }

    // Return deduplicated list
    return [...new Set(candidates)];
  }

  // Preload image into browser cache
  function preloadImage(url) {
    if (!url || imageCache.has(url)) return;
    const img = new Image();
    img.src = url;
    img.onload = () => imageCache.add(url);
  }

  // Background preloader for upcoming problems (0s display on click)
  function preloadCandidateProblems(problems, count = 4) {
    if (!Array.isArray(problems) || problems.length === 0) return;
    for (let i = 0; i < Math.min(count, problems.length); i++) {
      const p = problems[i];
      if (p && p.image) {
        const cands = getFastCandidates(p);
        if (cands.length > 0) {
          preloadImage(cands[0]);
        }
      }
    }
  }

  // Resilient High-Performance Diagram Loader (Parallel Concurrent Probes)
  function loadDiagramImage(problem) {
    if (!el.diagramImage) return;

    // Increment request ID to cancel any pending probes from previously clicked problems
    const currentRequestId = ++activeImageRequestId;

    if (!problem || !problem.image) {
      if (el.diagramLoader) el.diagramLoader.classList.add('hidden');
      if (el.diagramWrapper) el.diagramWrapper.classList.add('hidden');
      if (el.diagramHint) el.diagramHint.classList.add('hidden');
      if (el.imagePlaceholder) {
        el.imagePlaceholder.classList.remove('hidden');
        el.imagePlaceholder.innerHTML = `
          <div class="py-8 px-4 text-center">
            <i class="fa-regular fa-image text-3xl mb-2 text-slate-400"></i>
            <p class="text-xs text-slate-400">โจทย์ข้อนี้เป็นการคำนวณตามสูตร (ไม่มีรูปประกอบ)</p>
          </div>
        `;
      }
      return;
    }

    const img = el.diagramImage;
    const fname = (problem.image || '').trim().split('/').pop();
    const candidates = getFastCandidates(problem);

    if (el.diagramLoader) el.diagramLoader.classList.remove('hidden');
    if (el.diagramWrapper) el.diagramWrapper.classList.add('hidden');
    if (el.imagePlaceholder) el.imagePlaceholder.classList.add('hidden');
    if (el.diagramHint) el.diagramHint.classList.add('hidden');
    img.style.opacity = '0';
    img.alt = `Diagram for problem ${problem.id}`;

    let resolved = false;

    function applySuccess(winningUrl) {
      if (resolved || currentRequestId !== activeImageRequestId) return;
      resolved = true;

      // Persist the winning prefix so future problems resolve instantly
      const partMatch = winningUrl.match(/^(.*?)(part\d+\/)/i);
      if (partMatch) {
        learnedProblem2Prefix = partMatch[1];
        try { localStorage.setItem('statics_img_p2_prefix', learnedProblem2Prefix); } catch (e) {}
      } else {
        const idx = winningUrl.lastIndexOf(fname);
        if (idx !== -1) {
          learnedFundamentalPrefix = winningUrl.substring(0, idx);
          try { localStorage.setItem('statics_img_f_prefix', learnedFundamentalPrefix); } catch (e) {}
        }
      }

      img.src = winningUrl;
      img.classList.remove('hidden');
      img.style.opacity = '1';
      img.onclick = () => openImageModal(img.src);

      if (el.diagramLoader) el.diagramLoader.classList.add('hidden');
      if (el.diagramWrapper) el.diagramWrapper.classList.remove('hidden');
      if (el.imagePlaceholder) el.imagePlaceholder.classList.add('hidden');
      if (el.diagramHint) el.diagramHint.classList.remove('hidden');
    }

    function showMissingCard() {
      if (resolved || currentRequestId !== activeImageRequestId) return;
      resolved = true;

      if (el.diagramLoader) el.diagramLoader.classList.add('hidden');
      if (el.diagramWrapper) el.diagramWrapper.classList.add('hidden');
      if (el.diagramHint) el.diagramHint.classList.add('hidden');
      if (el.imagePlaceholder) {
        el.imagePlaceholder.classList.remove('hidden');
        el.imagePlaceholder.innerHTML = `
          <div class="py-6 px-4 text-center">
            <div class="w-12 h-12 mx-auto rounded-2xl bg-brand-50 dark:bg-slate-800 text-brand-500 flex items-center justify-center text-xl mb-2 border border-brand-200/60 dark:border-slate-700 shadow-xs">
              <i class="fa-regular fa-image"></i>
            </div>
            <p class="text-sm font-bold text-slate-700 dark:text-slate-200">ผังโจทย์ ${problem.id}</p>
            <p class="text-xs text-slate-400 mt-0.5">หนังสือ Hibbeler 14th Ed. หน้า ${problem.page_book || '-'}</p>
            <div class="mt-3 flex flex-col items-center gap-1">
              <span class="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-[11px] font-mono border border-amber-200 dark:border-amber-800">
                ไฟล์รูป: ${fname}
              </span>
              <span class="text-[10px] text-slate-400">หากเพิ่งอัปเดตไฟล์ขึ้น GitHub ให้กด Ctrl + F5 เพื่อล้างแคชบราวเซอร์</span>
            </div>
          </div>
        `;
      }
    }

    // Fast Parallel Probe Engine (Tests up to 4 candidates concurrently)
    const batchSize = 4;
    let candidateIndex = 0;

    function probeNextBatch() {
      if (resolved || currentRequestId !== activeImageRequestId) return;
      if (candidateIndex >= candidates.length) {
        showMissingCard();
        return;
      }

      const currentBatch = candidates.slice(candidateIndex, candidateIndex + batchSize);
      candidateIndex += batchSize;

      let failuresInBatch = 0;
      currentBatch.forEach(url => {
        const probe = new Image();
        probe.onload = () => applySuccess(url);
        probe.onerror = () => {
          failuresInBatch++;
          if (failuresInBatch === currentBatch.length && !resolved && currentRequestId === activeImageRequestId) {
            probeNextBatch();
          }
        };
        probe.src = url;
      });
    }

    probeNextBatch();
  }


  // Random Problem Selection
  function getRandomProblem() {
    if (state.filteredProblems.length === 0) {
      showToast('ไม่พบโจทย์ตามตัวเลือก กรุณาเลือกบทหรือระดับความยากเพิ่มเติม', 'warning');
      return;
    }

    // Dice animation
    if (el.diceIcon) {
      el.diceIcon.classList.remove('dice-animate');
      void el.diceIcon.offsetWidth;
      el.diceIcon.classList.add('dice-animate');
    }

    let nextProblem;
    if (state.filteredProblems.length === 1) {
      nextProblem = state.filteredProblems[0];
    } else {
      do {
        const idx = Math.floor(Math.random() * state.filteredProblems.length);
        nextProblem = state.filteredProblems[idx];
      } while (state.currentProblem && nextProblem.id === state.currentProblem.id && state.filteredProblems.length > 1);
    }

    state.history.push(nextProblem);
    state.historyIndex = state.history.length - 1;

    displayProblem(nextProblem);
  }

  // Display Problem in Card
  function displayProblem(problem) {
    if (!problem) return;
    state.currentProblem = problem;

    // Reset solution view
    hideSolution();

    // Trigger card fade-in animation
    if (el.problemCard) {
      el.problemCard.classList.remove('fade-in');
      void el.problemCard.offsetWidth;
      el.problemCard.classList.add('fade-in');
    }

    // Problem Identifiers
    if (el.problemNumber) el.problemNumber.textContent = `ข้อที่ ${problem.id}`;
    if (el.chapterBadge) {
      el.chapterBadge.textContent = `บทที่ ${problem.chapter}: ${problem.chapter_name_th} (${problem.chapter_name_en})`;
    }

    // Difficulty Badge
    if (el.difficultyBadge) {
      if (problem.difficulty === 'easy') {
        el.difficultyBadge.className = 'clay-badge clay-badge-easy text-xs font-bold inline-flex items-center gap-1';
        el.difficultyBadge.innerHTML = '● ง่าย (Easy)';
      } else if (problem.difficulty === 'medium') {
        el.difficultyBadge.className = 'clay-badge clay-badge-medium text-xs font-bold inline-flex items-center gap-1';
        el.difficultyBadge.innerHTML = '● ปานกลาง (Medium)';
      } else {
        el.difficultyBadge.className = 'clay-badge clay-badge-hard text-xs font-bold inline-flex items-center gap-1';
        el.difficultyBadge.innerHTML = '● ยาก (Hard)';
      }
    }

    // Page Indicator
    if (el.pageIndicator) {
      el.pageIndicator.textContent = `📖 หน้า ${problem.page_book || '-'} ในตำรา Hibbeler (เฉลยหน้า ${problem.page_sol || 642})`;
    }

    // Question Text (English)
    if (el.questionText) {
      el.questionText.textContent = problem.question_en || 'Determine the required values for the given system.';
    }

    // Thai Guidance / Goal
    if (el.questionThaiSummary) {
      el.questionThaiSummary.textContent = problem.question_th_summary || 'วิเคราะห์และคำนวณตามหลักสถิตยศาสตร์';
    }

    // Load Problem Diagram with Multi-Path Fallback & Cache Safety
    loadDiagramImage(problem);

    // Prepare Solution Details
    renderSolution(problem);

    // Update Bookmark State
    updateBookmarkState(problem.id);

    // Prev / Next Buttons State
    if (el.prevBtn) el.prevBtn.disabled = state.historyIndex <= 0;
    if (el.nextBtn) el.nextBtn.disabled = state.historyIndex >= state.history.length - 1;

    // Render Math in Question Text if applicable
    if (el.questionText) renderMath(el.questionText);
  }

  // Render Solution with Real KaTeX Math Formulas
  function renderSolution(problem) {
    // Theory / Approach
    if (el.theoryText) {
      el.theoryText.innerHTML = problem.theory_th || 'การวิเคราะห์ตามสมการสมดุลของสถิตยศาสตร์';
      renderMath(el.theoryText);
    }

    // Final Answers Box (Real Math)
    if (el.finalAnswerList) {
      el.finalAnswerList.innerHTML = '';
      const answers = problem.final_answers_math || problem.final_answers || [];
      
      if (answers.length > 0) {
        answers.forEach(ans => {
          const item = document.createElement('div');
          item.className = 'py-1.5 px-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold text-sm sm:text-base flex items-center gap-2.5';
          item.innerHTML = `<i class="fa-solid fa-check text-emerald-600 dark:text-emerald-400 text-sm"></i> <span class="math-content font-mono">${wrapMath(ans, false)}</span>`;
          el.finalAnswerList.appendChild(item);
        });
      } else {
        const item = document.createElement('div');
        item.className = 'text-xs text-slate-500 dark:text-slate-400 py-1';
        item.textContent = 'ดูผลลัพธ์และคำตอบในขั้นตอนการคำนวณด้านล่าง';
        el.finalAnswerList.appendChild(item);
      }
    }

    // Step-by-Step Calculation Steps (Real KaTeX Math)
    if (el.solutionStepsText) {
      el.solutionStepsText.innerHTML = '';
      const steps = problem.formatted_steps || [];

      if (steps.length > 0) {
        steps.forEach(st => {
          const stepDiv = document.createElement('div');
          
          if (st.type === 'header') {
            // Section heading (e.g. Joint A, Part a)
            stepDiv.className = 'font-bold text-xs sm:text-sm text-blue-700 dark:text-blue-400 mt-2 pb-1 border-b border-slate-200 dark:border-slate-700';
            stepDiv.textContent = st.text;
          } else if (st.type === 'ans') {
            // Answer highlight line
            stepDiv.className = 'calc-step-card p-2.5 my-1 text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300 border-l-4 border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 flex items-center justify-between';
            stepDiv.innerHTML = `<span>${wrapMath(st.latex, true)}</span> <span class="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded ml-2 shrink-0">คำตอบ</span>`;
          } else {
            // General equation calculation line
            stepDiv.className = 'calc-step-card p-2.5 my-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200';
            stepDiv.innerHTML = `${wrapMath(st.latex, true)}`;
          }

          el.solutionStepsText.appendChild(stepDiv);
        });
      } else {
        // Fallback to raw solution if formatted steps unavailable
        const raw = problem.solution_raw || 'ไม่มีข้อมูลเฉลย';
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'calc-step-card p-3 text-xs sm:text-sm font-mono whitespace-pre-wrap';
        fallbackDiv.textContent = raw;
        el.solutionStepsText.appendChild(fallbackDiv);
      }
    }


    // Render KaTeX Math across the solution section
    if (el.solutionSection) {
      renderMath(el.solutionSection);
    }
  }

  // Solution Toggle Visibility
  function toggleSolution() {
    if (state.isSolutionVisible) {
      hideSolution();
    } else {
      showSolution();
    }
  }

  function showSolution() {
    state.isSolutionVisible = true;
    if (el.solutionSection) {
      el.solutionSection.classList.remove('hidden');
      el.solutionSection.classList.add('fade-in');
      renderMath(el.solutionSection);
    }
    if (el.solutionToggleText) el.solutionToggleText.textContent = 'ซ่อนเฉลย (Hide Solution)';
    if (el.solutionIcon) el.solutionIcon.className = 'fa-solid fa-eye-slash text-slate-500';
    if (el.solutionToggleBtn) {
      el.solutionToggleBtn.classList.add('bg-slate-200', 'dark:bg-slate-700');
    }

    // Gamified reward on first view
    if (state.currentProblem && !state.currentProblem.viewed) {
      state.currentProblem.viewed = true;
      state.gamified.xp += 50;
      state.gamified.solvedCount += 1;
      try {
        localStorage.setItem('statics_xp', state.gamified.xp);
        localStorage.setItem('statics_solved', state.gamified.solvedCount);
      } catch (e) {}
      updateGamifiedUI();
      showToast('🎉 +50 XP! เพิ่มความชำนาญโจทย์ข้อนี้แล้ว', 'success');
    }
  }

  function updateGamifiedUI() {
    if (el.solvedCounterText) {
      el.solvedCounterText.textContent = `${state.gamified.solvedCount} ข้อ`;
    }
    if (el.xpPointsText) {
      el.xpPointsText.textContent = state.gamified.xp.toLocaleString();
    }
  }

  function hideSolution() {
    state.isSolutionVisible = false;
    if (el.solutionSection) el.solutionSection.classList.add('hidden');
    if (el.solutionToggleText) el.solutionToggleText.textContent = 'แสดงเฉลย (Show Solution)';
    if (el.solutionIcon) el.solutionIcon.className = 'fa-solid fa-lightbulb text-amber-500';
    if (el.solutionToggleBtn) {
      el.solutionToggleBtn.classList.remove('bg-slate-200', 'dark:bg-slate-700');
    }
  }

  // Navigation History
  function prevProblem() {
    if (state.historyIndex > 0) {
      state.historyIndex--;
      displayProblem(state.history[state.historyIndex]);
    }
  }

  function nextProblem() {
    if (state.historyIndex < state.history.length - 1) {
      state.historyIndex++;
      displayProblem(state.history[state.historyIndex]);
    }
  }

  // Bookmarking Feature
  function toggleBookmark() {
    if (!state.currentProblem) return;
    const pid = state.currentProblem.id;
    if (state.bookmarks.has(pid)) {
      state.bookmarks.delete(pid);
      showToast(`นำ ${pid} ออกจากข้อที่บันทึกไว้แล้ว`, 'info');
    } else {
      state.bookmarks.add(pid);
      showToast(`บันทึก ${pid} เรียบร้อยแล้ว ⭐`, 'success');
    }
    localStorage.setItem('statics_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
    updateBookmarkState(pid);
  }

  function updateBookmarkState(pid) {
    const isBookmarked = state.bookmarks.has(pid);
    if (el.bookmarkIcon) {
      if (isBookmarked) {
        el.bookmarkIcon.className = 'fa-solid fa-star text-amber-500';
      } else {
        el.bookmarkIcon.className = 'fa-regular fa-star text-slate-400 hover:text-amber-500';
      }
    }
  }

  // Copy Problem Info
  function copyProblem() {
    if (!state.currentProblem) return;
    const p = state.currentProblem;
    const text = `[สถิตยศาสตร์] ข้อ ${p.id} (บทที่ ${p.chapter}: ${p.chapter_name_th})\nโจทย์: ${p.question_en}\nเป้าหมาย: ${p.question_th_summary}\nหน้าหนังสือ: ${p.page_book}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast('คัดลอกโจทย์ไปยังคลิปบอร์ดแล้ว 📋', 'success');
    }).catch(() => {
      showToast('ไม่สามารถคัดลอกได้', 'error');
    });
  }

  // Exam Timer Logic (Fully Functional & Robust)
  function toggleTimer() {
    if (state.exam.active) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function startTimer() {
    state.exam.active = true;
    if (el.timerToggleIcon) el.timerToggleIcon.className = 'fa-solid fa-pause text-xs';
    if (el.timerToggleText) el.timerToggleText.textContent = 'หยุด';
    if (el.timerToggleBtn) {
      el.timerToggleBtn.classList.remove('clay-btn-primary');
      el.timerToggleBtn.classList.add('clay-btn-amber');
    }
    if (el.timerIcon) el.timerIcon.classList.add('animate-pulse');

    clearInterval(state.exam.intervalId);
    state.exam.intervalId = setInterval(() => {
      if (state.exam.secondsLeft > 0) {
        state.exam.secondsLeft--;
        updateTimerDisplay();
      } else {
        pauseTimer();
        showToast('⏰ หมดเวลาสำหรับการฝึกทำโจทย์แล้ว!', 'warning');
      }
    }, 1000);
  }

  function pauseTimer() {
    state.exam.active = false;
    clearInterval(state.exam.intervalId);
    if (el.timerToggleIcon) el.timerToggleIcon.className = 'fa-solid fa-play text-xs';
    if (el.timerToggleText) el.timerToggleText.textContent = 'เริ่ม';
    if (el.timerToggleBtn) {
      el.timerToggleBtn.classList.remove('clay-btn-amber');
      el.timerToggleBtn.classList.add('clay-btn-primary');
    }
    if (el.timerIcon) el.timerIcon.classList.remove('animate-pulse');
  }

  function resetTimer() {
    pauseTimer();
    state.exam.secondsLeft = 30 * 60;
    updateTimerDisplay();
    showToast('รีเซ็ตเวลาฝึกสอบเป็น 30:00 แล้ว', 'info');
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.exam.secondsLeft / 60);
    const s = state.exam.secondsLeft % 60;
    if (el.timerTime) {
      el.timerTime.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      if (state.exam.secondsLeft <= 300) {
        el.timerTime.classList.add('text-rose-500', 'font-black');
      } else {
        el.timerTime.classList.remove('text-rose-500', 'font-black');
      }
    }
  }

  // Theme Handling (Dark / Light)
  // ในโหมดมืด -> แสดงรูปพระจันทร์ (Moon)
  // ในโหมดสว่าง -> แสดงรูปดวงอาทิตย์ (Sun)
  function loadTheme() {
    const isDark = localStorage.getItem('statics_theme') === 'dark' || 
                   (!localStorage.getItem('statics_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (el.themeToggleBtn) {
        el.themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon text-indigo-300 text-base"></i>';
        el.themeToggleBtn.title = 'โหมดมืด (Dark Mode)';
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (el.themeToggleBtn) {
        el.themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun text-amber-500 text-base"></i>';
        el.themeToggleBtn.title = 'โหมดสว่าง (Light Mode)';
      }
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('statics_theme', isDark ? 'dark' : 'light');
    if (el.themeToggleBtn) {
      el.themeToggleBtn.innerHTML = isDark 
        ? '<i class="fa-solid fa-moon text-indigo-300 text-base"></i>' 
        : '<i class="fa-solid fa-sun text-amber-500 text-base"></i>';
      el.themeToggleBtn.title = isDark ? 'โหมดมืด (Dark Mode)' : 'โหมดสว่าง (Light Mode)';
    }
  }

  // Fullscreen Image Modal
  function openImageModal(imgSrc) {
    let src = '';
    if (typeof imgSrc === 'string' && imgSrc) {
      src = imgSrc;
    } else if (el.diagramImage && el.diagramImage.src && !el.diagramImage.classList.contains('hidden')) {
      src = el.diagramImage.src;
    } else if (state.currentProblem && state.currentProblem.image) {
      const cands = getProblemCandidates(state.currentProblem.image);
      src = cands[0] || state.currentProblem.image;
    }
    if (!src) return;
    if (el.modalImage && el.imageModal) {
      el.modalImage.src = src;
      el.imageModal.classList.remove('hidden');
      el.imageModal.classList.add('flex');
    }
  }

  function closeImageModal() {
    if (el.imageModal) {
      el.imageModal.classList.add('hidden');
      el.imageModal.classList.remove('flex');
    }
  }

  // Toast Notification
  function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const colors = {
      info: 'bg-indigo-600 text-white',
      success: 'bg-emerald-600 text-white',
      warning: 'bg-amber-600 text-white',
      error: 'bg-rose-600 text-white'
    };

    toast.className = `px-4 py-2.5 rounded-2xl shadow-xl text-xs sm:text-sm font-semibold ${colors[type] || colors.info} transform transition-all duration-300 translate-y-3 opacity-0 pointer-events-auto flex items-center gap-2 border-2 border-white/30`;
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // Expose global methods for HTML triggers
  window.showToast = showToast;
  window.filterAndPracticeChapter = function (ch) {
    const chNum = parseInt(ch, 10);
    state.filters.chapters = [chNum];
    state.filters.difficulty = 'all';

    renderChapterFilters();
    applyFilters();

    const practiceSec = document.getElementById('practice');
    if (practiceSec) {
      practiceSec.scrollIntoView({ behavior: 'smooth' });
    }

    getRandomProblem();
    showToast(`🎯 สุ่มโจทย์บทที่ ${chNum} เรียบร้อยแล้ว!`, 'info');
  };


  // ========================================================================
  // LESSON VIEWER & CHAPTER PDF EXPORTER (บทที่ 1 - 11)
  // ========================================================================
  function openLessonsModal(chapter = 1) {
    if (!el.lessonsModal) return;
    state.selectedLessonChapter = parseInt(chapter, 10) || 1;
    el.lessonsModal.classList.remove('hidden');
    el.lessonsModal.classList.add('flex');
    renderLessonChapterList();
    renderLessonContent(state.selectedLessonChapter);
  }

  function closeLessonsModal() {
    if (el.lessonsModal) {
      el.lessonsModal.classList.add('hidden');
      el.lessonsModal.classList.remove('flex');
    }
  }

  function switchLessonTab(tab) {
    state.selectedLessonTab = tab;
    
    // Tab buttons active states
    const tabs = [
      { id: 'formulas', btn: el.tabLessonFormulas },
      { id: 'review', btn: el.tabLessonReviewSheets },
      { id: 'pdf', btn: el.tabLessonPdfReader }
    ];

    tabs.forEach(t => {
      if (!t.btn) return;
      if (t.id === tab) {
        t.btn.classList.add('active', 'border-brand-500', 'font-bold', 'text-brand-600', 'dark:text-brand-400');
        t.btn.classList.remove('border-transparent', 'text-slate-500');
      } else {
        t.btn.classList.remove('active', 'border-brand-500', 'font-bold', 'text-brand-600', 'dark:text-brand-400');
        t.btn.classList.add('border-transparent', 'text-slate-500');
      }
    });

    renderLessonTabBody(state.selectedLessonChapter);
  }

  function renderLessonChapterList() {
    if (!el.lessonChapterList) return;
    el.lessonChapterList.innerHTML = '';

    const lessons = window.LESSONS_DATA || {};
    for (let ch = 1; ch <= 11; ch++) {
      const data = lessons[ch] || {
        chapter: ch,
        title_th: `บทที่ ${ch}`,
        title_en: '',
        total_problems: 0
      };

      const isSelected = ch === state.selectedLessonChapter;
      const item = document.createElement('button');
      item.className = `w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between border-2 select-none ${
        isSelected
          ? 'bg-gradient-to-r from-indigo-600 to-brand-600 text-white border-brand-400 shadow-md scale-[1.02]'
          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-750'
      }`;

      item.innerHTML = `
        <div class="flex items-center gap-2.5 overflow-hidden">
          <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
            isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-brand-600 dark:text-brand-400'
          }">
            ${ch}
          </div>
          <div class="truncate">
            <p class="font-heading font-bold text-xs truncate">${data.title_th}</p>
            <p class="text-[10px] ${isSelected ? 'text-indigo-100' : 'text-slate-400'} truncate">${data.title_en}</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ml-1.5 ${
          isSelected ? 'bg-white/20 text-white' : 'bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-300'
        }">${data.total_problems} ข้อ</span>
      `;

      item.addEventListener('click', () => {
        state.selectedLessonChapter = ch;
        renderLessonChapterList();
        renderLessonContent(ch);
      });

      el.lessonChapterList.appendChild(item);
    }
  }

  function renderLessonContent(ch) {
    const lessons = window.LESSONS_DATA || {};
    const data = lessons[ch];
    if (!data) return;

    // 1. Render Header Bar & Action Buttons
    if (el.lessonHeaderBar) {
      el.lessonHeaderBar.innerHTML = `
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-md bg-brand-500 text-white font-bold text-[11px]">บทที่ ${ch}</span>
              <h2 class="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">${data.title_th}</h2>
              <span class="text-xs text-slate-400 font-sans hidden sm:inline">(${data.title_en})</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3">
              <span><i class="fa-solid fa-book-open mr-1 text-brand-500"></i>${data.pages}</span>
              <span><i class="fa-solid fa-layer-group mr-1 text-emerald-500"></i>คลังโจทย์ ${data.total_problems} ข้อ</span>
            </p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <!-- Download / Export PDF -->
            <a href="${data.pdf_file}" download="Chapter_${ch.toString().padStart(2, '0')}_${data.title_en.replace(/\s+/g, '_')}.pdf" class="clay-btn clay-btn-primary text-xs !py-2 !px-3.5 !rounded-xl shadow-xs inline-flex items-center gap-1.5">
              <i class="fa-solid fa-file-arrow-down text-amber-300"></i>
              <span>Export PDF (${data.pages.split(' ')[0]})</span>
            </a>

            <!-- Open Full PDF in new tab -->
            <a href="${data.pdf_file}" target="_blank" class="clay-btn clay-btn-secondary text-xs !py-2 !px-3 !rounded-xl inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <span class="hidden sm:inline">เปิดอ่านเต็มจอ</span>
            </a>

            <!-- Start Practice this chapter -->
            <button onclick="filterAndPracticeChapter(${ch}); closeLessonsModal();" class="clay-btn clay-btn-emerald text-xs !py-2 !px-3.5 !rounded-xl shadow-xs inline-flex items-center gap-1.5">
              <i class="fa-solid fa-bolt"></i>
              <span>ฝึกทำโจทย์บทนี้</span>
            </button>
          </div>
        </div>
      `;
    }

    // 2. Render Tab Body
    renderLessonTabBody(ch);
  }

  function renderLessonTabBody(ch) {
    if (!el.lessonTabContent) return;
    const lessons = window.LESSONS_DATA || {};
    const data = lessons[ch];
    if (!data) return;

    if (state.selectedLessonTab === 'formulas') {
      // 1. FORMULAS & THEORY TAB
      let formulasHtml = (data.formulas || []).map((f, idx) => `
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-brand-400 dark:hover:border-brand-500 transition-all">
          <div class="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100 dark:border-slate-700/60">
            <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 text-xs font-mono flex items-center justify-center font-bold">
                ${idx + 1}
              </span>
              <span>${f.name}</span>
            </p>
            <span class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50">
              สมการหลัก
            </span>
          </div>
          <div id="lesson_formula_${ch}_${idx}" class="py-3 px-4 overflow-x-auto text-brand-700 dark:text-brand-300 flex items-center justify-center min-h-[52px] bg-slate-50/80 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800/80 text-base sm:text-lg">
            $$ ${f.latex} $$
          </div>
        </div>
      `).join('');

      let topicsHtml = (data.topics || []).map(t => `
        <li class="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-circle-check text-emerald-500 text-[11px] mt-0.5 shrink-0"></i>
          <span>${t}</span>
        </li>
      `).join('');

      let procedureHtml = (data.procedure || []).map((p, idx) => `
        <li class="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
          <span class="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 text-[10px] font-bold flex items-center justify-center shrink-0">
            ${idx + 1}
          </span>
          <span class="leading-relaxed">${p}</span>
        </li>
      `).join('');

      el.lessonTabContent.innerHTML = `
        <div class="space-y-6 max-w-4xl">
          <!-- Overview Card -->
          <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-brand-50/50 dark:from-slate-800/80 dark:to-slate-800/40 border border-brand-100 dark:border-slate-700">
            <h4 class="font-heading font-bold text-sm text-brand-800 dark:text-brand-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-lightbulb text-amber-500"></i>
              ภาพรวมเนื้อหา (Overview)
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${data.overview}</p>
          </div>

          <!-- Key Topics Covered -->
          <div>
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <i class="fa-solid fa-list-check text-indigo-500"></i>
              หัวข้อย่อยประจำบทเรียน
            </h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${topicsHtml}
            </ul>
          </div>

          <!-- Core Formulas (KaTeX) -->
          <div>
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <i class="fa-solid fa-square-root-variable text-amber-500"></i>
              สูตรคำนวณและสมการหลัก (Key Equations)
            </h4>
            <div class="space-y-3">
              ${formulasHtml}
            </div>
          </div>

          <!-- Step-by-Step Procedure -->
          <div>
            <h4 class="font-heading font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <i class="fa-solid fa-shoe-prints text-brand-500"></i>
              ขั้นตอนการวิเคราะห์โจทย์ (General Procedure for Analysis)
            </h4>
            <ul class="space-y-2.5">
              ${procedureHtml}
            </ul>
          </div>
        </div>
      `;

      // 1. Direct KaTeX rendering for every formula in this chapter
      (data.formulas || []).forEach((f, idx) => {
        const target = document.getElementById(`lesson_formula_${ch}_${idx}`);
        if (!target) return;
        if (typeof katex !== 'undefined' && typeof katex.render === 'function') {
          try {
            katex.render(f.latex, target, {
              displayMode: true,
              throwOnError: false
            });
          } catch (err) {
            console.warn(`KaTeX direct render error on Ch ${ch} formula ${idx}:`, err);
          }
        }
      });

      // 2. Auto-render any math expressions in Overview, Topics, and Procedure
      renderMath(el.lessonTabContent);

    } else if (state.selectedLessonTab === 'review') {
      // 2. CHAPTER REVIEW SHEETS TAB (Full visual textbook sheets)
      const sheets = data.review_sheets || [];
      if (sheets.length === 0) {
        el.lessonTabContent.innerHTML = `
          <div class="py-12 text-center text-slate-400">
            <i class="fa-regular fa-image text-4xl mb-2"></i>
            <p class="text-sm">ไม่มีแผ่นสรุปสำหรับบทนี้</p>
          </div>
        `;
        return;
      }

      let sheetsHtml = sheets.map((src, i) => `
        <div class="clay-card !p-3 border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 rounded-2xl flex flex-col items-center">
          <div class="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-700/60 text-xs font-bold text-slate-500">
            <span>แผ่นสรุปท้ายบทหน้าที่ ${i + 1} / ${sheets.length}</span>
            <a href="${src}" target="_blank" class="text-brand-500 hover:underline inline-flex items-center gap-1">
              <i class="fa-solid fa-expand"></i> ดูรูปขนาดเต็ม
            </a>
          </div>
          <img src="${src}" alt="Chapter Review ${ch} Page ${i + 1}" class="max-w-full rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-700 cursor-zoom-in" onclick="openImageModal('${src}')" loading="lazy">
        </div>
      `).join('');

      el.lessonTabContent.innerHTML = `
        <div class="space-y-4 max-w-4xl">
          <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-center gap-3">
            <i class="fa-solid fa-circle-info text-amber-500 text-base"></i>
            <p class="text-xs text-amber-900 dark:text-amber-200">
              ภาพแคปแผ่นสรุปเนื้อหาท้ายบท (Chapter Review) จากตำรา Hibbeler 14th Edition ฉบับจริง คลิกที่รูปเพื่อขยายใหญ่
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${sheetsHtml}
          </div>
        </div>
      `;

    } else if (state.selectedLessonTab === 'pdf') {
      // 3. FULL EMBEDDED PDF VIEWER TAB
      el.lessonTabContent.innerHTML = `
        <div class="h-full flex flex-col space-y-3">
          <div class="flex items-center justify-between bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl text-xs">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-file-pdf text-rose-500 text-sm"></i>
              <span class="font-bold text-slate-700 dark:text-slate-200">${data.pdf_file.split('/').pop()}</span>
              <span class="text-slate-400">(${data.pages})</span>
            </div>
            <a href="${data.pdf_file}" download class="clay-btn clay-btn-primary !py-1 !px-3 text-[11px] inline-flex items-center gap-1">
              <i class="fa-solid fa-download"></i> ดาวน์โหลด PDF
            </a>
          </div>
          <div class="flex-1 min-h-[500px] border-2 border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
            <iframe src="${data.pdf_file}#toolbar=1&navpanes=0" class="w-full h-full min-h-[500px]" frameborder="0"></iframe>
          </div>
        </div>
      `;
    }
  }

  // Global Helpers for Lessons

// Event Listeners
  function setupEventListeners() {
    if (el.randomBtn) el.randomBtn.addEventListener('click', getRandomProblem);
    if (el.solutionToggleBtn) el.solutionToggleBtn.addEventListener('click', toggleSolution);
    if (el.prevBtn) el.prevBtn.addEventListener('click', prevProblem);
    if (el.nextBtn) el.nextBtn.addEventListener('click', nextProblem);
    if (el.bookmarkBtn) el.bookmarkBtn.addEventListener('click', toggleBookmark);
    if (el.copyBtn) el.copyBtn.addEventListener('click', copyProblem);

    // Image Zoom
    if (el.diagramImage) el.diagramImage.addEventListener('click', () => openImageModal(el.diagramImage.src));
    if (el.imageModal) el.imageModal.addEventListener('click', closeImageModal);

    // Difficulty filter buttons
    if (el.diffAllBtn) el.diffAllBtn.addEventListener('click', () => { state.filters.difficulty = 'all'; applyFilters(); getRandomProblem(); });
    if (el.diffEasyBtn) el.diffEasyBtn.addEventListener('click', () => { state.filters.difficulty = 'easy'; applyFilters(); getRandomProblem(); });
    if (el.diffMediumBtn) el.diffMediumBtn.addEventListener('click', () => { state.filters.difficulty = 'medium'; applyFilters(); getRandomProblem(); });
    if (el.diffHardBtn) el.diffHardBtn.addEventListener('click', () => { state.filters.difficulty = 'hard'; applyFilters(); getRandomProblem(); });

    // Chapter selection shortcuts
    if (el.selectAllChaptersBtn) {
      el.selectAllChaptersBtn.addEventListener('click', () => {
        state.filters.chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        renderChapterFilters();
        applyFilters();
      });
    }
    if (el.clearAllChaptersBtn) {
      el.clearAllChaptersBtn.addEventListener('click', () => {
        state.filters.chapters = [];
        renderChapterFilters();
        applyFilters();
      });
    }

    // Theme toggle
    if (el.themeToggleBtn) el.themeToggleBtn.addEventListener('click', toggleTheme);

    // Timer controls
    if (el.timerToggleBtn) el.timerToggleBtn.addEventListener('click', toggleTimer);
    if (el.timerResetBtn) el.timerResetBtn.addEventListener('click', resetTimer);

    // Lesson Viewer Event Listeners
    if (el.lessonsBtn) el.lessonsBtn.addEventListener('click', () => openLessonsModal(state.filters.chapters[0] || 1));
    if (el.closeLessonsBtn) el.closeLessonsBtn.addEventListener('click', closeLessonsModal);
    if (el.lessonsModal) {
      el.lessonsModal.addEventListener('click', (e) => {
        if (e.target === el.lessonsModal) closeLessonsModal();
      });
    }
    if (el.tabLessonFormulas) el.tabLessonFormulas.addEventListener('click', () => switchLessonTab('formulas'));
    if (el.tabLessonReviewSheets) el.tabLessonReviewSheets.addEventListener('click', () => switchLessonTab('review'));
    if (el.tabLessonPdfReader) el.tabLessonPdfReader.addEventListener('click', () => switchLessonTab('pdf'));

    // Cheatsheet modal
    if (el.cheatsheetBtn && el.cheatsheetModal) {
      el.cheatsheetBtn.addEventListener('click', () => {
        el.cheatsheetModal.classList.remove('hidden');
        renderMath(el.cheatsheetContent);
      });
    }
    if (el.closeCheatsheetBtn && el.cheatsheetModal) {
      el.closeCheatsheetBtn.addEventListener('click', () => el.cheatsheetModal.classList.add('hidden'));
    }

    // Shortcuts modal
    if (el.shortcutsBtn && el.shortcutsModal) {
      el.shortcutsBtn.addEventListener('click', () => el.shortcutsModal.classList.remove('hidden'));
    }
    if (el.closeShortcutsBtn && el.shortcutsModal) {
      el.closeShortcutsBtn.addEventListener('click', () => el.shortcutsModal.classList.add('hidden'));
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.code === 'Space' || e.key.toLowerCase() === 'r') {
        e.preventDefault();
        getRandomProblem();
      } else if (e.key.toLowerCase() === 's') {
        e.preventDefault();
        toggleSolution();
      } else if (e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleBookmark();
      } else if (e.key === 'ArrowLeft') {
        prevProblem();
      } else if (e.key === 'ArrowRight') {
        nextProblem();
      } else if (e.key === 'Escape') {
        closeImageModal();
        if (el.cheatsheetModal) el.cheatsheetModal.classList.add('hidden');
        if (el.shortcutsModal) el.shortcutsModal.classList.add('hidden');
        closeLessonsModal();
      }
    });
  }

  // Global helpers exposed to window for HTML triggers
  window.openLessonsModal = openLessonsModal;
  window.closeLessonsModal = closeLessonsModal;
  window.switchLessonTab = switchLessonTab;
  window.openImageModal = openImageModal;
  window.closeImageModal = closeImageModal;
  window.showToast = showToast;
  window.filterAndPracticeChapter = filterAndPracticeChapter;

  // Start app
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
