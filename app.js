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
    idlePreloadQueue();
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

  // GitHub Pages Edge CDN Accelerator (jsDelivr Multi-CDN for 10x-50x Faster Loading)
  let gitHubCdnBase = null;
  if (typeof window !== 'undefined' && window.location) {
    const host = window.location.hostname || '';
    if (host.endsWith('github.io')) {
      const user = host.split('.')[0];
      const pathParts = (window.location.pathname || '').split('/').filter(Boolean);
      const repo = pathParts[0] || '';
      if (user && repo) {
        gitHubCdnBase = `https://cdn.jsdelivr.net/gh/${user}/${repo}@main/`;
        console.log('⚡ [CDN Accelerator] Active for GitHub Pages:', gitHubCdnBase);
      }
    }
  }

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

      // 0. High-Speed Edge CDN (jsDelivr Bangkok/Singapore Edge - 15ms latency)
    if (gitHubCdnBase) {
      candidates.push(`${gitHubCdnBase}images/problem 2/${partStr}/${fname}`);
      candidates.push(`${gitHubCdnBase}${partStr}/${fname}`);
    }

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

      // 0. High-Speed Edge CDN (jsDelivr)
      if (gitHubCdnBase) {
        candidates.push(`${gitHubCdnBase}images/problems/${fname}`);
        candidates.push(`${gitHubCdnBase}${batchFolder}/${fname}`);
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

  // Deep Idle Preloader: Pre-warms the next 12 problems in background during idle moments
  function idlePreloadQueue() {
    if (!Array.isArray(state.filteredProblems) || state.filteredProblems.length === 0) return;
    const idleCount = Math.min(12, state.filteredProblems.length);
    let curIdx = 0;

    function step() {
      if (curIdx >= idleCount) return;
      const p = state.filteredProblems[curIdx++];
      if (p && p.image) {
        const cands = getFastCandidates(p);
        if (cands.length > 0) preloadImage(cands[0]);
      }
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(step, { timeout: 1000 });
      } else {
        setTimeout(step, 80);
      }
    }

    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(step, { timeout: 1200 });
    } else {
      setTimeout(step, 150);
    }
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
                   (!localStorage.getItem('statics_theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
  function filterAndPracticeChapter(ch) {
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
  }


  // ========================================================================
  // EMBEDDED LESSONS DATASET (Zero-Dependency Resilient Fallback)
  // Ensures Chapter Lessons 1-11 ALWAYS work, even if data/lessons.js is missing or 404 on GitHub
  // ========================================================================
  const EMBEDDED_LESSONS_DATA = {
  "1": {
    "chapter": 1,
    "title_en": "General Principles",
    "title_th": "หลักการทั่วไป",
    "pages": "24–37 (14 หน้า)",
    "total_problems": 16,
    "pdf_file": "pdf_chapters/Chapter_01_General_Principles.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_01_review_p1.webp",
      "images/lesson_reviews/ch_01_review_p2.webp"
    ],
    "overview": "ปูพื้นฐานแนวคิดทางกลศาสตร์ กฎการเคลื่อนที่ของนิวตัน ระบบหน่วยวัดสากล (SI Units vs US Customary) คำนำหน้าหน่วยเอสไอ (Prefixes) และหลักการปัดเศษเลขนัยสำคัญในการคำนวณทางวิศวกรรม",
    "topics": [
      "1.1 Mechanics & Fundamental Concepts (มวล ความยาว เวลา แรง)",
      "1.2 Newton's Three Laws of Motion & Gravitational Attraction",
      "1.3 Units of Measurement (SI Units: N, kg, m, s vs FPS Units: lb, slug, ft, s)",
      "1.4 SI Prefixes (kilo, mega, giga, milli, micro, nano)",
      "1.5 Numerical Calculations & Significant Figures (กฎ 3 เลขนัยสำคัญ)",
      "1.6 General Procedure for Analysis (ขั้นตอนการวิเคราะห์ปัญหาทางสถิตยศาสตร์)"
    ],
    "formulas": [
      {
        "name": "กฎแรงโน้มถ่วงสากล (Universal Gravitation)",
        "latex": "F = G \\frac{m_1 m_2}{r^2}"
      },
      {
        "name": "น้ำหนักของวัตถุ (Weight)",
        "latex": "W = m \\cdot g \\quad (g = 9.81 \\text{ m/s}^2 = 32.2 \\text{ ft/s}^2)"
      },
      {
        "name": "คำนำหน้าเอสไอ (SI Prefixes)",
        "latex": "\\text{k} (10^3), \\quad \\text{M} (10^6), \\quad \\text{G} (10^9), \\quad \\text{m} (10^{-3}), \\quad \\mu (10^{-6}), \\quad \\text{n} (10^{-9})"
      }
    ],
    "procedure": [
      "ตรวจสอบและแปลงหน่วยทุกค่าให้อยู่ในระบบเดียวกันก่อนเริ่มคำนวณ",
      "เขียนสมการในรูปแบบสัญลักษณ์ก่อนแทนค่าตัวเลข",
      "คงทศนิยมอย่างน้อย 4 ตำแหน่งระหว่างขั้นตอนการคำนวณ",
      "ตอบผลลัพธ์สุดท้ายด้วยเลขนัยสำคัญ 3 ตัว (Significant Figures) พร้อมระบุหน่วยให้ถูกต้องเสมอ"
    ]
  },
  "2": {
    "chapter": 2,
    "title_en": "Force Vectors",
    "title_th": "เวกเตอร์ของแรง",
    "pages": "38–107 (70 หน้า)",
    "total_problems": 136,
    "pdf_file": "pdf_chapters/Chapter_02_Force_Vectors.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_02_review_p1.webp",
      "images/lesson_reviews/ch_02_review_p2.webp",
      "images/lesson_reviews/ch_02_review_p3.webp"
    ],
    "overview": "การบวกและแยกแรงใน 2 มิติและ 3 มิติ กฎรูปสี่เหลี่ยมด้านขนาน กฎของไซน์และโคไซน์ เวกเตอร์คาร์ทีเซียน (Cartesian Vectors) มุมและโคไซน์แสดงทิศทาง (Coordinate Direction Angles) เวกเตอร์บอกตำแหน่ง (Position Vectors) แรงตามแนวเส้นตรง และผลคูณจุด (Dot Product) เพื่อหาการฉายแรงและมุมระหว่างเวกเตอร์",
    "topics": [
      "2.1 Scalars and Vectors & Vector Operations",
      "2.2 Vector Addition of Forces (Parallelogram Law & Triangle Rule)",
      "2.3 Coplanar Force Systems & Rectangular Components",
      "2.4 Cartesian Vectors in 3D & Magnitude Calculation",
      "2.5 Coordinate Direction Angles (alpha, beta, gamma)",
      "2.6 Addition of Cartesian Vectors (Sum of components)",
      "2.7 Position Vectors & Force Directed Along a Line",
      "2.8 Dot Product (ผลคูณจุดเพื่อหามุมและการฉายเวกเตอร์)"
    ],
    "formulas": [
      {
        "name": "กฎของโคไซน์ (Law of Cosines)",
        "latex": "C = \\sqrt{A^2 + B^2 - 2AB \\cos c}"
      },
      {
        "name": "กฎของไซน์ (Law of Sines)",
        "latex": "\\frac{A}{\\sin a} = \\frac{B}{\\sin b} = \\frac{C}{\\sin c}"
      },
      {
        "name": "เวกเตอร์หนึ่งหน่วย (Unit Vector in 3D)",
        "latex": "\\mathbf{u}_A = \\frac{\\mathbf{A}}{A} = \\cos\\alpha\\,\\mathbf{i} + \\cos\\beta\\,\\mathbf{j} + \\cos\\gamma\\,\\mathbf{k}"
      },
      {
        "name": "ความสัมพันธ์ของมุมทิศทาง",
        "latex": "\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1"
      },
      {
        "name": "แรงตามแนวเส้นตรง AB",
        "latex": "\\mathbf{F} = F \\cdot \\mathbf{u}_{AB} = F \\left(\\frac{\\mathbf{r}_B - \\mathbf{r}_A}{|\\mathbf{r}_B - \\mathbf{r}_A|}\\right)"
      },
      {
        "name": "ผลคูณสเกลาร์ (Dot Product)",
        "latex": "\\mathbf{A} \\cdot \\mathbf{B} = A B \\cos\\theta = A_x B_x + A_y B_y + A_z B_z"
      }
    ],
    "procedure": [
      "สำหรับ 2D: ใช้กฎสี่เหลี่ยมด้านขนาน หรือแตกแรงลงแกน x และ y ด้วย sin/cos",
      "สำหรับ 3D: เขียนพิกัดจุดเริ่มต้นและปลายทาง หาเวกเตอร์บอกตำแหน่ง r_AB แล้วทำเป็นเวกเตอร์หนึ่งหน่วย u_AB",
      "รวมแรงลัพธ์: รวมแต่ละแกน R_x = sum F_x, R_y = sum F_y, R_z = sum F_z",
      "หาขนาดแรงลัพธ์: R = sqrt(R_x^2 + R_y^2 + R_z^2) และหามุมทิศทางจาก cos(alpha) = R_x / R"
    ]
  },
  "3": {
    "chapter": 3,
    "title_en": "Equilibrium of a Particle",
    "title_th": "สมดุลของอนุภาค",
    "pages": "108–141 (34 หน้า)",
    "total_problems": 62,
    "pdf_file": "pdf_chapters/Chapter_03_Equilibrium_of_a_Particle.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_03_review_p1.webp",
      "images/lesson_reviews/ch_03_review_p2.webp"
    ],
    "overview": "สภาวะสมดุลของอนุภาคที่ไม่มีขนาด (จุดร่วม) เมื่อแรงลัพธ์เป็นศูนย์ การวาดแผนภาพวัตถุอิสระ (Free-Body Diagram: FBD) การคำนวณแรงดึงในสายเคเบิล รอกไร้แรงเสียดทาน แรงสปริงเชิงเส้น (Hooke's Law) และการแก้ระบบสมการสมดุล 2D และ 3D",
    "topics": [
      "3.1 Condition for the Equilibrium of a Particle (F_R = sum F = 0)",
      "3.2 The Free-Body Diagram (FBD) - การแยกอนุภาคและเขียนแรงทุกแรง",
      "3.3 Coplanar Force Systems (2D Equilibrium: sum F_x = 0, sum F_y = 0)",
      "3.4 Linear Elastic Springs (F = k * s = k * (l - l_0))",
      "3.5 Cables and Pulleys (สายเคเบิลส่งผ่านแรงดึงอย่างสม่ำเสมอ)",
      "3.6 Three-Dimensional Force Systems (3D Equilibrium: sum F_x = sum F_y = sum F_z = 0)"
    ],
    "formulas": [
      {
        "name": "สมการสมดุลในระนาบ 2 มิติ",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0"
      },
      {
        "name": "สมการสมดุลใน 3 มิติ",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0"
      },
      {
        "name": "กฎของฮุกสำหรับสปริง (Hooke's Law)",
        "latex": "F_{sp} = k \\cdot s = k (l - l_0)"
      }
    ],
    "procedure": [
      "เลือกอนุภาคจุดร่วมที่มีแรงกระทำมากที่สุดและมีตัวแปรที่ต้องการหา",
      "วาด FBD แสดงแรงที่ทราบค่าและไม่ทราบค่าทั้งหมด (สมมติทิศทางแรงดึงออกจากจุด)",
      "ตั้งแกนพิกัด x-y (หรือ x-y-z) ให้สอดคล้องกับทิศทางแรงส่วนใหญ่เพื่อลดการแตกแรง",
      "ตั้งสมการ sum F_x = 0 และ sum F_y = 0 แล้วแก้ระบบสมการเชิงเส้นหาค่าตัวแปร"
    ]
  },
  "4": {
    "chapter": 4,
    "title_en": "Force System Resultants",
    "title_th": "ผลลัพธ์ของระบบแรงและโมเมนต์",
    "pages": "142–227 (86 หน้า)",
    "total_problems": 161,
    "pdf_file": "pdf_chapters/Chapter_04_Force_System_Resultants.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_04_review_p1.webp",
      "images/lesson_reviews/ch_04_review_p2.webp",
      "images/lesson_reviews/ch_04_review_p3.webp"
    ],
    "overview": "โมเมนต์ของแรงรอบจุด (สูตรสเกลาร์ F*d และเวกเตอร์ r x F) ทฤษฎีของวาริญง (Varignon's Theorem) โมเมนต์รอบแกนที่กำหนด โมเมนต์ของคู่ควบ (Couple Moment) การยุบรวมระบบแรงและคู่ควบให้เป็นแรงลัพธ์และโมเมนต์ลัพธ์เดี่ยว และการลดรูประบบแรงกระจาย (Distributed Loading)",
    "topics": [
      "4.1 Moment of a Force - Scalar Formulation (M_O = F * d)",
      "4.2 Cross Product & Vector Formulation (M_O = r x F)",
      "4.3 Principle of Moments (Varignon's Theorem)",
      "4.4 Moment of a Force About a Specified Axis (M_a = u_a . (r x F))",
      "4.5 Moment of a Couple (M = r x F, อิสระจากจุดหมุน)",
      "4.6 Simplification of a Force and Couple System",
      "4.7 Further Reduction of a Force System (Wrench / Screw Resultant)",
      "4.8 Reduction of a Simple Distributed Loading (แรงกระจายรูปสี่เหลี่ยม สามเหลี่ยม พาราโบลา)"
    ],
    "formulas": [
      {
        "name": "โมเมนต์รอบจุด (เวกเตอร์)",
        "latex": "\\mathbf{M}_O = \\mathbf{r} \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}"
      },
      {
        "name": "โมเมนต์รอบแกนระบุ a-a",
        "latex": "M_a = \\mathbf{u}_a \\cdot (\\mathbf{r} \\times \\mathbf{F})"
      },
      {
        "name": "โมเมนต์คู่ควบ (Couple Moment)",
        "latex": "\\mathbf{M} = \\mathbf{r} \\times \\mathbf{F}"
      },
      {
        "name": "แรงลัพธ์ของแรงกระจาย (Distributed Load)",
        "latex": "F_R = \\int_0^L w(x)\\,dx = \\text{พื้นที่ใต้กราฟ}"
      },
      {
        "name": "ตำแหน่งแรงลัพธ์ของแรงกระจาย",
        "latex": "\\bar{x} = \\frac{\\int_0^L x\\,w(x)\\,dx}{\\int_0^L w(x)\\,dx} = \\text{จุดเซนทรอยด์ของพื้นที่}"
      }
    ],
    "procedure": [
      "หาสเกลาร์: M = F * d เมื่อ d คือระยะตั้งฉากจากจุดหมุนไปยังแนวแรง ใช้กฎมือขวาเพื่อดูทิศทวน/ตามเข็ม",
      "หาเวกเตอร์: ลากเวกเตอร์ตำแหน่ง r จากจุดหมุน O ไปยังจุดใดก็ได้บนแนวแรง F แล้วทำการคูณ Cross Product",
      "แรงกระจาย: หาพื้นที่ใต้กราฟเพื่อเป็นขนาดแรงลัพธ์ F_R และวางที่ตำแหน่งจุดเซนทรอยด์ x̄ ของรูปร่างนั้น"
    ]
  },
  "5": {
    "chapter": 5,
    "title_en": "Equilibrium of a Rigid Body",
    "title_th": "สมดุลของวัตถุเกร็ง",
    "pages": "228–293 (66 หน้า)",
    "total_problems": 69,
    "pdf_file": "pdf_chapters/Chapter_05_Equilibrium_of_a_Rigid_Body.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_05_review_p1.webp",
      "images/lesson_reviews/ch_05_review_p2.webp"
    ],
    "overview": "สมดุลของวัตถุที่มีขนาด (Rigid Body) แผนภาพอิสระ (FBD) ของวัตถุเกร็ง แรงปฏิกิริยาที่จุดรองรับชนิดต่างๆ (ลูกกลิ้ง สลัก ข้อต่อคงที่ ฯลฯ) สมการสมดุลใน 2 มิติและ 3 มิติ ชิ้นส่วนสองแรง (Two-Force Members) และสามแรง (Three-Force Members) และสภาวะโครงสร้างไม่กำหนดทางสถิตศาสตร์ (Statically Indeterminate)",
    "topics": [
      "5.1 Conditions for Rigid-Body Equilibrium (sum F = 0, sum M_O = 0)",
      "5.2 Free-Body Diagrams (การปลดจุดรองรับและใส่แรงปฏิกิริยา)",
      "5.3 Support Reactions in 2D (Roller: 1 แรง, Pin: 2 แรง, Fixed: 2 แรง + 1 โมเมนต์)",
      "5.4 Equations of Equilibrium in 2D (sum F_x = 0, sum F_y = 0, sum M_A = 0)",
      "5.5 Two-Force and Three-Force Members (ชิ้นส่วนสองแรงและสามแรง)",
      "5.6 Support Reactions in 3D (Ball-and-socket, Journal bearing, Hinge, Fixed)",
      "5.7 Equations of Equilibrium in 3D (6 สมการสมดุล)"
    ],
    "formulas": [
      {
        "name": "สมการสมดุลวัตถุเกร็งใน 2 มิติ",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0"
      },
      {
        "name": "สมการสมดุลวัตถุเกร็งใน 3 มิติ",
        "latex": "\\sum \\mathbf{F} = 0, \\quad \\sum \\mathbf{M}_O = 0 \\implies 6 \\text{ สมการสเกลาร์}"
      },
      {
        "name": "ชิ้นส่วนสองแรง (Two-Force Member)",
        "latex": "\\mathbf{F}_A = -\\mathbf{F}_B \\quad (\\text{แรงมีขนาดเท่ากัน แนวแรงผ่านจุดเชื่อมทั้งสอง})"
      }
    ],
    "procedure": [
      "วาด FBD ของวัตถุเกร็งอย่างสมบูรณ์ ปลดจุดยึดและใส่แรงปฏิกิริยาตามประเภทจุดรองรับ",
      "พิจารณาชิ้นส่วนสองแรง (Two-Force Members) เพื่อลดจำนวนตัวแปรที่ไม่ทราบค่า",
      "เลือกจุดเทกโมเมนต์ (sum M = 0) ณ จุดที่มีแรงไม่ทราบค่าตัดผ่านมากที่สุดเพื่อตัดตัวแปร",
      "ใช้สมการ sum F_x = 0 และ sum F_y = 0 เพื่อหาตัวแปรที่เหลือ"
    ]
  },
  "6": {
    "chapter": 6,
    "title_en": "Structural Analysis",
    "title_th": "การวิเคราะห์โครงสร้าง",
    "pages": "294–363 (70 หน้า)",
    "total_problems": 113,
    "pdf_file": "pdf_chapters/Chapter_06_Structural_Analysis.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_06_review_p1.webp",
      "images/lesson_reviews/ch_06_review_p2.webp",
      "images/lesson_reviews/ch_06_review_p3.webp"
    ],
    "overview": "การวิเคราะห์โครงถักระนาบ (Simple Trusses) วิธีพิจารณาข้อต่อ (Method of Joints) ชิ้นส่วนที่มีแรงเป็นศูนย์ (Zero-Force Members) วิธีตัดหน้าตัด (Method of Sections) โครงสร้างสามมิติ (Space Trusses) และการวิเคราะห์โครงเฟรม (Frames) และเครื่องกล (Machines)",
    "topics": [
      "6.1 Simple Trusses & Assumptions for Design (แรงกระทำที่ข้อต่อ ชิ้นส่วนสองแรง)",
      "6.2 The Method of Joints (สมดุลอนุภาคที่แต่ละข้อต่อ)",
      "6.3 Zero-Force Members (การตรวจหาชิ้นส่วนแรงศูนย์อย่างรวดเร็ว)",
      "6.4 The Method of Sections (ตัดผ่านชิ้นส่วนที่ต้องการหาแรงไม่เกิน 3 ชิ้น)",
      "6.5 Space Trusses (โครงถัก 3 มิติ)",
      "6.6 Frames and Machines (ชิ้นส่วนรับแรงหลายจุด และแรงภายในข้อต่อ)"
    ],
    "formulas": [
      {
        "name": "วิธีข้อต่อ (Method of Joints)",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0 \\quad (\\text{พิจารณาที่แต่ละ Joint})"
      },
      {
        "name": "วิธีตัดหน้าตัด (Method of Sections)",
        "latex": "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0 \\quad (\\text{สำหรับส่วนที่ตัด})"
      },
      {
        "name": "การตรวจสอบ Zero-Force Member",
        "latex": "\\text{สองชิ้นไม่ขนานกันไม่มีแรงภายนอก } \\implies F_1 = F_2 = 0"
      }
    ],
    "procedure": [
      "Method of Joints: เหมาะสำหรับหาแรงในชิ้นส่วนเกือบทุกชิ้น เริ่มต้นที่ข้อต่อที่มีตัวแปรไม่ทราบค่าไม่เกิน 2 ตัว",
      "Zero-Force Members: สังเกตข้อต่อที่มี 2 ชิ้นส่วนไม่ขนานกันและไม่มีแรงภายนอก หรือ 3 ชิ้นส่วนโดย 2 ชิ้นร่วมแนวกัน",
      "Method of Sections: ตัดผ่านชิ้นส่วนที่ต้องการหา (ไม่เกิน 3 ชิ้น) วาด FBD ฝั่งใดฝั่งหนึ่ง แล้วเทกโมเมนต์ ณ จุดตัดของ 2 ชิ้นที่ไม่ต้องการ",
      "Frames & Machines: แยกชิ้นส่วนแต่ละชิ้น วาด FBD ของทุกชิ้น แรงกระทำระหว่างชิ้นส่วนจะมีขนาดเท่ากันแต่ทิศตรงข้าม (กฎข้อ 3 ของนิวตัน)"
    ]
  },
  "7": {
    "chapter": 7,
    "title_en": "Internal Forces",
    "title_th": "แรงภายใน",
    "pages": "364–421 (58 หน้า)",
    "total_problems": 109,
    "pdf_file": "pdf_chapters/Chapter_07_Internal_Forces.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_07_review_p1.webp",
      "images/lesson_reviews/ch_07_review_p2.webp",
      "images/lesson_reviews/ch_07_review_p3.webp"
    ],
    "overview": "แรงภายในที่เกิดขึ้นในชิ้นส่วนโครงสร้าง: แรงในแนวแกน (Axial Force N) แรงเฉือน (Shear Force V) และโมเมนต์ดัด (Bending Moment M) การเขียนฟังก์ชันแรงเฉือนและโมเมนต์ดัด แผนภาพแรงเฉือนและโมเมนต์ดัด (SFD & BMD) ความสัมพันธ์เชิงอนุพันธ์ และการวิเคราะห์สายเคเบิลรับแรง",
    "topics": [
      "7.1 Internal Loadings Developed in Structural Members (N, V, M)",
      "7.2 Sign Conventions (ข้อกำหนดเครื่องหมายบวกสำหรับ N, V, M)",
      "7.3 Shear and Moment Equations and Diagrams (ฟังก์ชัน V(x) และ M(x))",
      "7.4 Relations Between Distributed Load, Shear, and Moment (dV/dx = -w, dM/dx = V)",
      "7.5 Cables Subjected to Concentrated Loads",
      "7.6 Cables Subjected to a Uniform Distributed Load (Parabolic & Catenary Cables)"
    ],
    "formulas": [
      {
        "name": "ความสัมพันธ์อนุพันธ์แรงเฉือนและแรงกระจาย",
        "latex": "\\frac{dV}{dx} = -w(x) \\implies \\Delta V = -\\int w(x)\\,dx"
      },
      {
        "name": "ความสัมพันธ์อนุพันธ์โมเมนต์และแรงเฉือน",
        "latex": "\\frac{dM}{dx} = V \\implies \\Delta M = \\int V\\,dx = \\text{พื้นที่ใต้กราฟ SFD}"
      },
      {
        "name": "ตำแหน่งโมเมนต์ดัดสูงสุด",
        "latex": "M_{\\max} \\text{ เกิดขึ้นที่จุดที่ } V(x) = 0"
      }
    ],
    "procedure": [
      "หาแรงปฏิกิริยาที่จุดรองรับทั้งหมดของคานก่อนเสมอ",
      "ตัดหน้าตัดที่ตำแหน่ง x ใดๆ วาด FBD ใส่ N, V, M ในทิศทางบวกมาตรฐาน",
      "ใช้สมการสมดุล sum F_x = 0, sum F_y = 0, sum M_cut = 0 เพื่อสร้างสมการ V(x) และ M(x)",
      "วาด SFD: เริ่มจากซ้าย แรงกดลงดึงกราฟลง แรงดันขึ้นดึงกราฟขึ้น",
      "วาด BMD: ความชันของกราฟ M คือค่าของ V พื้นที่ใต้กราฟ V คือการเปลี่ยนแปลงของ M"
    ]
  },
  "8": {
    "chapter": 8,
    "title_en": "Friction",
    "title_th": "ความเสียดทาน",
    "pages": "422–485 (64 หน้า)",
    "total_problems": 104,
    "pdf_file": "pdf_chapters/Chapter_08_Friction.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_08_review_p1.webp",
      "images/lesson_reviews/ch_08_review_p2.webp",
      "images/lesson_reviews/ch_08_review_p3.webp"
    ],
    "overview": "ทฤษฎีแรงเสียดทานแห้ง (Coulomb Friction) สภาวะก่อนเริ่มเคลื่อนที่ (Impending Motion) การตรวจสอบการไถล (Slipping) เทียบกับการพลิกคว่ำ (Tipping) การวิเคราะห์ลิ่ม (Wedges) สกรูเกลียว (Screws) แบริ่งสมบูรณ์ (Flat/Collar Bearings) และแรงเสียดทานในสายพาน (Belt Friction)",
    "topics": [
      "8.1 Characteristics of Dry Friction (สถิต vs จลน์, mu_s vs mu_k)",
      "8.2 Problems Involving Dry Friction (สภาวะสมดุล, เริ่มไถล, หรือพลิกคว่ำ)",
      "8.3 Wedges (การวิเคราะห์ลิ่มเพื่อยกของหนัก)",
      "8.4 Frictional Forces on Screws (Square-threaded screws, Self-locking)",
      "8.5 Frictional Forces on Flat Belts (สายพานส่งกำลังรอบเพลา T_2 = T_1 * e^(mu * beta))",
      "8.6 Frictional Forces on Collar Bearings and Disks",
      "8.7 Rolling Resistance (ความต้านทานการกลิ้ง)"
    ],
    "formulas": [
      {
        "name": "แรงเสียดทานสถิตสูงสุด (Max Static Friction)",
        "latex": "F_{\\max} = \\mu_s N"
      },
      {
        "name": "แรงเสียดทานจลน์ (Kinetic Friction)",
        "latex": "F_k = \\mu_k N"
      },
      {
        "name": "มุมเสียดทานสถิต (Angle of Static Friction)",
        "latex": "\\tan\\phi_s = \\mu_s"
      },
      {
        "name": "สูตรแรงเสียดทานสายพาน (Belt Friction)",
        "latex": "T_2 = T_1 \\cdot e^{\\mu \\beta} \\quad (T_2 > T_1, \\, \\beta \\text{ ในหน่วยเรเดียน})"
      },
      {
        "name": "สกรูเกลียวสี่เหลี่ยม (Screw)",
        "latex": "M = W r \\tan(\\theta \\pm \\phi_s)"
      }
    ],
    "procedure": [
      "วาด FBD ใส่แรงปฏิกิริยาตั้งฉาก N และแรงเสียดทาน F ขนานผิวสัมผัสต้านการเคลื่อนที่",
      "ตรวจสอบสมมติฐาน: วัตถุเริ่มไถล (F = mu_s * N) หรือวัตถุเริ่มพลิกคว่ำ (N เลื่อนไปอยู่ที่ขอบ x = b)",
      "คำนวณตำแหน่งแนวแรง N จาก sum M = 0 หากค่า x เกินขอบเขตของวัตถุแสดงว่าจะเกิดการพลิกคว่ำก่อนไถล",
      "สำหรับสายพาน: ตรวจสอบมุมโอบ beta ในหน่วยเรเดียน และกำหนด T_2 ให้เป็นด้านที่มีแรงดึงมากกว่าเสมอ"
    ]
  },
  "9": {
    "chapter": 9,
    "title_en": "Center of Gravity and Centroid",
    "title_th": "จุดศูนย์ถ่วงและเซนทรอยด์",
    "pages": "486–549 (64 หน้า)",
    "total_problems": 119,
    "pdf_file": "pdf_chapters/Chapter_09_Center_of_Gravity_and_Centroid.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_09_review_p1.webp",
      "images/lesson_reviews/ch_09_review_p2.webp",
      "images/lesson_reviews/ch_09_review_p3.webp"
    ],
    "overview": "จุดศูนย์ถ่วงของวัตถุ (Center of Gravity) จุดศูนย์กลางมวล (Center of Mass) เซนทรอยด์ของเส้น พื้นที่ และปริมาตร (Centroid) การอินทิเกรตหาเซนทรอยด์ รูปร่างประกอบ (Composite Bodies) ทฤษฎีบทของพัปพัส-กูลดินัส (Pappus-Guldinus Theorems) และแรงดันของของไหลสถิตบนพื้นผิว (Hydrostatic Pressure)",
    "topics": [
      "9.1 Center of Gravity, Center of Mass, and the Centroid of a Body",
      "9.2 Composite Bodies (การรวมชิ้นส่วนมาตรฐาน: สี่เหลี่ยม สามเหลี่ยม ครึ่งวงกลม วงกลมกลวง)",
      "9.3 Theorems of Pappus and Guldinus (คำนวณพื้นที่ผิวและปริมาตรจากการหมุน)",
      "9.4 Resultant of a General Distributed Loading",
      "9.5 Fluid Pressure on Flat and Curved Surfaces (แรงดันของเหลว p = rho * g * h)"
    ],
    "formulas": [
      {
        "name": "เซนทรอยด์ของพื้นที่ (การอินทิเกรต)",
        "latex": "\\bar{x} = \\frac{\\int \\tilde{x}\\,dA}{\\int dA}, \\quad \\bar{y} = \\frac{\\int \\tilde{y}\\,dA}{\\int dA}"
      },
      {
        "name": "เซนทรอยด์ของรูปร่างประกอบ (Composite)",
        "latex": "\\bar{X} = \\frac{\\sum \\tilde{x}_i A_i}{\\sum A_i}, \\quad \\bar{Y} = \\frac{\\sum \\tilde{y}_i A_i}{\\sum A_i}"
      },
      {
        "name": "ทฤษฎีพัปพัส: พื้นที่ผิวจากการหมุน",
        "latex": "A = 2\\pi \\bar{y} L \\quad (\\text{หมุนเส้นความยาว } L \\text{ รอบแกน})"
      },
      {
        "name": "ทฤษฎีพัปพัส: ปริมาตรจากการหมุน",
        "latex": "V = 2\\pi \\bar{y} A \\quad (\\text{หมุนพื้นที่ } A \\text{ รอบแกน})"
      }
    ],
    "procedure": [
      "Composite Bodies: แบ่งรูปร่างออกเป็นรูปทรงเรขาคณิตมาตรฐาน กำหนดแกนอ้างอิง (x, y)",
      "สร้างตารางคำนวณ: คอลัมน์ รูปร่าง, พื้นที่ A_i (ถ้าเป็นรูกลวงให้เป็นค่าลบ), พิกัดเซนทรอยด์ (x̃_i, ỹ_i), และผลคูณ x̃_i*A_i, ỹ_i*A_i",
      "หาผลรวม sum A, sum x̃*A, sum ỹ*A แล้วคำนวณ X̄ = sum(x̃*A)/sum(A) และ Ȳ = sum(ỹ*A)/sum(A)",
      "แรงดันของไหล: p = rho*g*h แปรผันตรงกับความลึก คิดเสมือนแรงกระจายรูปสามเหลี่ยมหรือสี่เหลี่ยมคางหมู"
    ]
  },
  "10": {
    "chapter": 10,
    "title_en": "Moments of Inertia",
    "title_th": "โมเมนต์ความเฉื่อย",
    "pages": "550–601 (52 หน้า)",
    "total_problems": 90,
    "pdf_file": "pdf_chapters/Chapter_10_Moments_of_Inertia.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_10_review_p1.webp",
      "images/lesson_reviews/ch_10_review_p2.webp"
    ],
    "overview": "โมเมนต์ความเฉื่อยของพื้นที่ (Area Moment of Inertia I_x, I_y) ทฤษฎีบทแกนขนาน (Parallel-Axis Theorem) รัศมีไจเรชัน (Radius of Gyration) โมเมนต์ความเฉื่อยของพื้นที่ประกอบ ผลคูณความเฉื่อย (Product of Inertia I_xy) การหมุนแกนและแกนหลักความเฉื่อย (Principal Axes & Mohr's Circle)",
    "topics": [
      "10.1 Definition of Moments of Inertia for Areas (I_x = int y^2 dA, I_y = int x^2 dA)",
      "10.2 Parallel-Axis Theorem for an Area (I = I_bar + A * d^2)",
      "10.3 Radius of Gyration of an Area (k = sqrt(I / A))",
      "10.4 Moments of Inertia for Composite Areas (การรวมชิ้นส่วนและคิดแกนขนาน)",
      "10.5 Product of Inertia for an Area (I_xy = int x y dA, เป็นศูนย์ถ้ามีแกนสมมาตร)",
      "10.6 Moments of Inertia for an Area about Inclined Axes",
      "10.7 Mohr's Circle for Moments of Inertia (วงกลมมอร์หาค่าสูงสุด I_max, I_min)"
    ],
    "formulas": [
      {
        "name": "โมเมนต์ความเฉื่อยของพื้นที่",
        "latex": "I_x = \\int y^2\\,dA, \\quad I_y = \\int x^2\\,dA"
      },
      {
        "name": "ทฤษฎีบทแกนขนาน (Parallel-Axis Theorem)",
        "latex": "I_x = \\bar{I}_{x'} + A d_y^2, \\quad I_y = \\bar{I}_{y'} + A d_x^2"
      },
      {
        "name": "โมเมนต์ความเฉื่อยขั้ว (Polar Moment)",
        "latex": "J_O = I_x + I_y = \\int r^2\\,dA"
      },
      {
        "name": "รัศมีไจเรชัน (Radius of Gyration)",
        "latex": "k_x = \\sqrt{\\frac{I_x}{A}}, \\quad k_y = \\sqrt{\\frac{I_y}{A}}"
      },
      {
        "name": "โมเมนต์ความเฉื่อยสี่เหลี่ยมรอบแกนเซนทรอยด์",
        "latex": "\\bar{I}_{x'} = \\frac{1}{12} b h^3, \\quad \\bar{I}_{y'} = \\frac{1}{12} h b^3"
      }
    ],
    "procedure": [
      "แบ่งพื้นที่ออกเป็นชิ้นส่วนมาตรฐาน (สี่เหลี่ยม สามเหลี่ยม วงกลม ฯลฯ)",
      "หาตำแหน่งเซนทรอยด์รวม (X̄, Ȳ) ของพื้นที่ทั้งหมดก่อน",
      "สำหรับแต่ละชิ้นส่วน: หา I_bar รอบแกนเซนทรอยด์ของตัวเอง, คำนวณระยะ d จากแกนเซนทรอยด์ชิ้นส่วนไปยังแกนอ้างอิง",
      "ใช้สูตรแกนขนาน I = I_bar + A * d^2 แล้วนำมารวมกัน (ชิ้นส่วนที่เป็นรูกลวงให้ลบออก)"
    ]
  },
  "11": {
    "chapter": 11,
    "title_en": "Virtual Work",
    "title_th": "งานเสมือน",
    "pages": "602–637 (36 หน้า)",
    "total_problems": 41,
    "pdf_file": "pdf_chapters/Chapter_11_Virtual_Work.pdf",
    "review_sheets": [
      "images/lesson_reviews/ch_11_review_p1.webp",
      "images/lesson_reviews/ch_11_review_p2.webp"
    ],
    "overview": "หลักการของงานเสมือน (Principle of Virtual Work dU = 0) การขจัดเสมือน (Virtual Displacement) การวิเคราะห์กลไกและระบบเชื่อมโยงที่เคลื่อนที่ได้ พลังงานศักย์ (Potential Energy V) สภาวะสมดุลจากพลังงานศักย์ (dV/dq = 0) และการตรวจสอบความเสถียรของสภาวะสมดุล (Stability of Equilibrium: เสถียร ไม่เสถียร สะเทิน)",
    "topics": [
      "11.1 Definition of Work and Virtual Work (dU = F . dr, dU = M * dtheta)",
      "11.2 Principle of Virtual Work for an Ideal System of Connected Bodies (delta U = 0)",
      "11.3 Conservative Forces & Potential Energy (V_g = W * y, V_e = 1/2 * k * s^2)",
      "11.4 Energy Criterion for Equilibrium (dV/dtheta = 0)",
      "11.5 Stability of Equilibrium (d^2V/dtheta^2 > 0: เสถียร, < 0: ไม่เสถียร, = 0: สะเทิน)"
    ],
    "formulas": [
      {
        "name": "หลักการงานเสมือน (Virtual Work)",
        "latex": "\\delta U = \\sum \\mathbf{F} \\cdot \\delta\\mathbf{r} + \\sum \\mathbf{M} \\cdot \\delta\\boldsymbol{\\theta} = 0"
      },
      {
        "name": "พลังงานศักย์โน้มถ่วงและสปริง",
        "latex": "V = V_g + V_e = W y + \\frac{1}{2} k s^2"
      },
      {
        "name": "เงื่อนไขสมดุลจากพลังงานศักย์",
        "latex": "\\frac{dV}{dq} = 0 \\quad (q \\text{ คือพิกัดอิสระ เช่น } \\theta)"
      },
      {
        "name": "เกณฑ์ความเสถียรของสมดุล (Stability)",
        "latex": "\\frac{d^2V}{dq^2} > 0 \\implies \\text{เสถียร (Stable)}, \\quad \\frac{d^2V}{dq^2} < 0 \\implies \\text{ไม่เสถียร (Unstable)}"
      }
    ],
    "procedure": [
      "กำหนดพิกัดอิสระ (Coordinate q เช่น มุม theta หรือระยะ x) เพื่ออธิบายตำแหน่งของระบบ",
      "เขียนพิกัดจุดกระทำของแรงทุกแรง (ที่ทำงาน) ในรูปของฟังก์ชันตัวแปร q",
      "หาอนุพันธ์เพื่อหาการขจัดเสมือน delta r = (dr/dq) * delta q",
      "ตั้งสมการงานเสมือน delta U = 0 หรือเขียนฟังก์ชันพลังงานศักย์รวม V(q) แล้วหาอนุพันธ์ dV/dq = 0"
    ]
  }
};

  if (!window.LESSONS_DATA || Object.keys(window.LESSONS_DATA).length === 0) {
    window.LESSONS_DATA = EMBEDDED_LESSONS_DATA;
  }

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

    const lessons = (window.LESSONS_DATA && Object.keys(window.LESSONS_DATA).length > 0) ? window.LESSONS_DATA : EMBEDDED_LESSONS_DATA;
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
    const lessons = (window.LESSONS_DATA && Object.keys(window.LESSONS_DATA).length > 0) ? window.LESSONS_DATA : EMBEDDED_LESSONS_DATA;
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
    const lessons = (window.LESSONS_DATA && Object.keys(window.LESSONS_DATA).length > 0) ? window.LESSONS_DATA : EMBEDDED_LESSONS_DATA;
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
      // 3. FULL EMBEDDED PDF VIEWER TAB (With Smart Fallbacks & 404 Missing Detection)
      const pdfFileName = data.pdf_file.split('/').pop();
      const currentFullUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/') + data.pdf_file;
      const gdocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(currentFullUrl)}&embedded=true`;

      el.lessonTabContent.innerHTML = `
        <div class="h-full flex flex-col space-y-3">
          <!-- Top PDF Toolbar -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-100 dark:bg-slate-800/90 px-4 py-2.5 rounded-2xl gap-3 border border-slate-200/60 dark:border-slate-700/60 text-xs">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-sm font-bold shrink-0">
                <i class="fa-solid fa-file-pdf"></i>
              </div>
              <div>
                <p class="font-bold text-slate-800 dark:text-slate-100 font-mono text-xs sm:text-sm truncate max-w-[220px] sm:max-w-none">
                  ${pdfFileName}
                </p>
                <p class="text-[11px] text-slate-400">เนื้อหาตามตำราหลัก Hibbeler 14th Ed. (${data.pages})</p>
              </div>
            </div>

            <!-- PDF Control Actions -->
            <div class="flex flex-wrap items-center gap-2">
              <!-- Open Native Full Screen in New Tab -->
              <a href="${data.pdf_file}" target="_blank" class="clay-btn clay-btn-secondary text-xs !py-1.5 !px-3 !rounded-xl inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                <i class="fa-solid fa-arrow-up-right-from-square text-indigo-500"></i>
                <span>เปิดอ่านเต็มจอ</span>
              </a>

              <!-- Google Cloud Docs Viewer Fallback Toggle -->
              <button id="toggleGDocsBtn" onclick="togglePdfViewerEngine('${gdocsViewerUrl}', '${data.pdf_file}')" class="clay-btn clay-btn-secondary text-xs !py-1.5 !px-3 !rounded-xl inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                <i class="fa-solid fa-globe text-emerald-500"></i>
                <span id="toggleGDocsText">ใช้ Cloud Viewer</span>
              </button>

              <!-- Download Button -->
              <a href="${data.pdf_file}" download="${pdfFileName}" class="clay-btn clay-btn-primary text-xs !py-1.5 !px-3.5 !rounded-xl inline-flex items-center gap-1.5 shadow-xs">
                <i class="fa-solid fa-download text-amber-300"></i>
                <span>ดาวน์โหลด PDF</span>
              </a>
            </div>
          </div>

          <!-- Main PDF Viewer Canvas -->
          <div id="pdfViewerContainer" class="flex-1 min-h-[540px] border-2 border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-inner bg-slate-900 relative flex flex-col">
            <object id="pdfObjectTag" data="${data.pdf_file}#toolbar=1&navpanes=0" type="application/pdf" class="w-full flex-1 min-h-[540px]">
              <iframe id="pdfIframeTag" src="${data.pdf_file}#toolbar=1&navpanes=0" class="w-full flex-1 min-h-[540px]" frameborder="0">
                <div class="p-8 text-center text-white">
                  <p class="mb-2 font-bold">บราวเซอร์ของคุณไม่รองรับการเปิด PDF ภายในแท็บนี้โดยตรง</p>
                  <a href="${data.pdf_file}" target="_blank" class="clay-btn clay-btn-primary !py-2 !px-4 text-xs inline-block">
                    คลิกที่นี่เพื่อเปิดอ่านเต็มจอในแท็บใหม่
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      `;

      // Smart 404 Missing Detection: Check if file exists on server
      fetch(data.pdf_file, { method: 'HEAD' })
        .then(res => {
          if (res.status === 404) {
            const container = document.getElementById('pdfViewerContainer');
            if (container) {
              container.innerHTML = `
                <div class="h-full min-h-[520px] flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
                  <div class="w-16 h-16 rounded-3xl bg-rose-500/20 text-rose-400 border-2 border-rose-500/40 flex items-center justify-center text-3xl mb-4 shadow-lg animate-pulse">
                    <i class="fa-solid fa-file-circle-xmark"></i>
                  </div>
                  <h3 class="font-heading font-bold text-lg sm:text-xl text-white mb-2">
                    ยังไม่ได้อัปโหลดโฟลเดอร์ pdf_chapters ขึ้น GitHub
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-300 max-w-lg mb-6 leading-relaxed">
                    สาเหตุที่หน้าจอนี้มืด/ว่างเปล่า เพราะใน GitHub Repository ของคุณยังไม่มีไฟล์ <code class="px-2 py-0.5 bg-slate-800 text-amber-300 rounded font-mono">${data.pdf_file}</code>
                    <br><span class="text-slate-400 text-xs">(บนเครื่อง Drive A เปิดได้ปกติเพราะมีไฟล์อยู่ในเครื่องแล้ว)</span>
                  </p>
                  
                  <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-left text-xs max-w-md w-full space-y-2.5 mb-6">
                    <div class="font-bold text-amber-300 flex items-center gap-1.5 mb-1 text-sm">
                      <i class="fa-solid fa-cloud-arrow-up"></i> วิธีทำให้เปิดอ่าน PDF ได้บน GitHub:
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-200">
                      <span class="w-5 h-5 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                      <span>เปิดโฟลเดอร์ <strong>pdf_chapters/</strong> ในเครื่องคอมพิวเตอร์ของคุณ (มีครบ 11 ไฟล์ ขนาดรวม ~35 MB)</span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-200">
                      <span class="w-5 h-5 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                      <span>ลากโฟลเดอร์ <strong>pdf_chapters/</strong> ทั้งโฟลเดอร์ไปวางอัปโหลดใน GitHub Repository</span>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center justify-center gap-3">
                    <a href="${data.pdf_file}" target="_blank" class="clay-btn clay-btn-secondary text-xs !py-2.5 !px-4 !rounded-xl inline-flex items-center gap-2">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i> ลองเปิดอ่านเต็มจอ
                    </a>
                    <a href="${data.pdf_file}" download class="clay-btn clay-btn-primary text-xs !py-2.5 !px-4 !rounded-xl inline-flex items-center gap-2">
                      <i class="fa-solid fa-download"></i> ลองดาวน์โหลดไฟล์
                    </a>
                  </div>
                </div>
              `;
            }
          }
        })
        .catch(err => console.log('PDF verification skipped:', err));
    }
  }

  // Helper to toggle between Native PDF Viewer and Google Docs Cloud Viewer
  window.togglePdfViewerEngine = function(gdocsUrl, nativeUrl) {
    const container = document.getElementById('pdfViewerContainer');
    const btnText = document.getElementById('toggleGDocsText');
    if (!container || !btnText) return;

    if (btnText.textContent.includes('Cloud')) {
      container.innerHTML = `
        <iframe src="${gdocsUrl}" class="w-full flex-1 min-h-[540px]" frameborder="0"></iframe>
      `;
      btnText.textContent = 'ใช้ Native Viewer';
    } else {
      container.innerHTML = `
        <object data="${nativeUrl}#toolbar=1&navpanes=0" type="application/pdf" class="w-full flex-1 min-h-[540px]">
          <iframe src="${nativeUrl}#toolbar=1&navpanes=0" class="w-full flex-1 min-h-[540px]" frameborder="0"></iframe>
        </object>
      `;
      btnText.textContent = 'ใช้ Cloud Viewer';
    }
  };

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
