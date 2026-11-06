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

    if (window.STATICS_DATA) {
      loadData(window.STATICS_DATA);
    } else {
      try {
        const resp = await fetch('data/problems.json?v=3.0');
        const data = await resp.json();
        loadData(data);
      } catch (err) {
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

  // Image Preloader & Background Cache Engine (Instant 0s Rendering)
  const imageCache = new Set();

  function preloadImage(url) {
    if (!url || imageCache.has(url)) return;
    const img = new Image();
    img.src = url;
    img.onload = () => imageCache.add(url);
  }

  function preloadCandidateProblems(problems, count = 5) {
    if (!Array.isArray(problems) || problems.length === 0) return;
    for (let i = 0; i < Math.min(count, problems.length); i++) {
      const p = problems[i];
      if (p) {
        if (p.image) preloadImage(p.image);
      }
    }
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

  // Multi-Path Candidate Resolvers for GitHub Root Uploads & Local Structure
  function getProblemCandidates(rawPath) {
    if (!rawPath) return [];
    const cleanPath = (rawPath || '').trim();
    const fname = cleanPath.split('/').pop();
    const altFname = fname.includes('_') ? fname.replace(/_([^_]+)$/, '-$1') : fname.replace(/-([^-]+)$/, '_$1');

    const list = [
      cleanPath,
      // Problem 2 base folders (all spelling variations: with/without space, with/without s)
      `images/problem 2/${fname}`,
      `problem 2/${fname}`,
      `images/problems2/${fname}`,
      `problems2/${fname}`,
      `images/problem2/${fname}`,
      `problem2/${fname}`,
      `images/problems/${fname}`,
      `images/problems/${altFname}`
    ];

    // Check all part folders (part1 to part9) across all folder variations
    for (let i = 1; i <= 9; i++) {
      // 1. Direct root part folders (e.g. part1/, part2/ - Most recommended)
      list.push(`part${i}/${fname}`);

      // 2. Standard problem 2 subfolders
      list.push(`images/problem 2/part${i}/${fname}`);
      list.push(`problem 2/part${i}/${fname}`);
      list.push(`images/problems2/part${i}/${fname}`);
      list.push(`problems2/part${i}/${fname}`);
      list.push(`images/problem2/part${i}/${fname}`);
      list.push(`problem2/part${i}/${fname}`);
      list.push(`images/problems/part${i}/${fname}`);

      // 3. Ready batch folder names
      list.push(`problem_2_part${i}_92files/${fname}`);
      list.push(`problem_2_part${i}_60files/${fname}`);
      list.push(`problem_2_part${i}/${fname}`);
      list.push(`problems2_part${i}_92files/${fname}`);
      list.push(`problems2_part${i}_60files/${fname}`);
      list.push(`problems2_part${i}/${fname}`);
      list.push(`problem2_part${i}/${fname}`);
      list.push(`problems_part${i}/${fname}`);
      list.push(`github-upload-batches/problem 2/part${i}/${fname}`);

      // Alt filenames (hyphen vs underscore)
      list.push(`part${i}/${altFname}`);
      list.push(`images/problem 2/part${i}/${altFname}`);
      list.push(`problem 2/part${i}/${altFname}`);
      list.push(`problems2/part${i}/${altFname}`);
      list.push(`problem2/part${i}/${altFname}`);
      list.push(`problem_2_part${i}_92files/${altFname}`);
    }

    // Legacy batch folder paths for backward compatibility
    list.push(
      `1_problems_batch1_98files/${fname}`,
      `2_problems_batch2_98files/${fname}`,
      `3_problems_batch3_81files/${fname}`,
      `github-upload-batches/1_problems_batch1_98files/${fname}`,
      `github-upload-batches/2_problems_batch2_98files/${fname}`,
      `github-upload-batches/3_problems_batch3_81files/${fname}`,
      `./${fname}`,
      `./${altFname}`
    );

    return [...new Set(list)];
  }

  // Preload candidates for upcoming problems
  function preloadCandidateProblems(problems, count = 5) {
    if (!Array.isArray(problems) || problems.length === 0) return;
    for (let i = 0; i < Math.min(count, problems.length); i++) {
      const p = problems[i];
      if (p) {
        if (p.image) {
          const cands = getProblemCandidates(p.image);
          if (cands.length > 0) {
            preloadImage(cands[0]);
            preloadImage(cands[1]);
          }
        }

      }
    }
  }

  // Resilient Diagram Loader (Zero-Flicker & Multi-Path Discovery)
  function loadDiagramImage(problem) {
    if (!el.diagramImage) return;

    if (!problem || !problem.image) {
      if (el.diagramLoader) el.diagramLoader.classList.add('hidden');
      if (el.diagramWrapper) el.diagramWrapper.classList.add('hidden');
      if (el.diagramHint) el.diagramHint.classList.add('hidden');
      if (el.imagePlaceholder) {
        el.imagePlaceholder.classList.remove('hidden');
        el.imagePlaceholder.innerHTML = `
          <i class="fa-regular fa-image text-3xl mb-2 text-slate-400"></i>
          <p class="text-xs text-slate-400">โจทย์ข้อนี้เป็นการคำนวณตามสูตร (ไม่มีรูปประกอบ)</p>
        `;
      }
      return;
    }

    const img = el.diagramImage;
    const candidates = getProblemCandidates(problem.image);
    const fname = (problem.image || '').trim().split('/').pop();

    let idx = 0;
    if (el.diagramLoader) el.diagramLoader.classList.remove('hidden');
    if (el.diagramWrapper) el.diagramWrapper.classList.add('hidden');
    if (el.imagePlaceholder) el.imagePlaceholder.classList.add('hidden');
    if (el.diagramHint) el.diagramHint.classList.add('hidden');
    img.style.opacity = '0';
    img.alt = `Diagram for problem ${problem.id}`;

    function tryNext() {
      if (idx >= candidates.length) {
        // All paths failed: show helpful card
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
                <span class="text-[10px] text-slate-400">หากเพิ่งอัปเดต app.js ให้กด Ctrl + F5 เพื่อล้างแคช</span>
              </div>
            </div>
          `;
        }
        return;
      }

      const nextUrl = candidates[idx++];
      if (!nextUrl) {
        tryNext();
        return;
      }

      // In-memory probe to prevent broken-image icon flicker
      const probe = new Image();
      probe.onload = function() {
        img.src = nextUrl;
        img.classList.remove('hidden');
        img.style.opacity = '1';
        img.onclick = () => openImageModal(img.src);
        if (el.diagramLoader) el.diagramLoader.classList.add('hidden');
        if (el.diagramWrapper) el.diagramWrapper.classList.remove('hidden');
        if (el.imagePlaceholder) el.imagePlaceholder.classList.add('hidden');
        if (el.diagramHint) el.diagramHint.classList.remove('hidden');
      };
      probe.onerror = function() {
        tryNext();
      };
      probe.src = nextUrl;
    }

    tryNext();

    // Background preloader for solution diagram and next candidates

    preloadCandidateProblems(state.filteredProblems, 5);
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
      }
    });
  }

  // Start app
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
