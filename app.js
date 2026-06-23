// Daily prompts database
const PROMPTS = {
  1: {
    title: "Task 1",
    name: "Enter the Writer's Workshop",
    excerpt: "Fill in the blanks activity. The user/student will have to fill in the blanks into a poem : “Valentine” by Carol Anne Duffy. Then the original poem will be revealed. The objective is not to have a guessing game but to have the writer experience flexibility and imagination within the constraints of a given “skeleton.”",
    prompt: "Fill in the blanks activity. The user/student will have to fill in the blanks into a poem : “Valentine” by Carol Anne Duffy. Then the original poem will be revealed. The objective is not to have a guessing game but to have the writer experience flexibility and imagination within the constraints of a given “skeleton.”",
    wordGoal: 200
  },
  2: {
    title: "Task 2",
    name: "The Word Harvest",
    excerpt: "The Word Harvest\nA random choice of words to encourage free-writing in a playful manner",
    prompt: "The Word Harvest\nA random choice of words to encourage free-writing in a playful manner",
    wordGoal: 80
  },
  3: {
    title: "Task 3",
    name: "Scene Generator",
    excerpt: "Scene Generator\nThis tasks proposes writing a scene out of visual cues plus an added situation or conflict that creates tension",
    prompt: "Scene Generator\nThis tasks proposes writing a scene out of visual cues plus an added situation or conflict that creates tension",
    wordGoal: 200
  },
  4: {
    title: "Task 4",
    name: "Instructions on how to climb a staircase",
    excerpt: "Instructions manual. \"Instructions for Climbing a Ladder” by Julio Cortázar \"",
    prompt: "Along the lines of “Instructions for Climbing a Ladder” by Julio Cortázar (the story and its reading are shown below), write a set of instructions for one of the plain actions listed:\n\n●	Instructions for getting ready before a date\n●	Instructions for opening an umbrella\n●	Instructions for wrapping up a present\n●	Instructions for eating spaghetti\n●	Instructions for spying on your spouse’s phone.",
    wordGoal: 300
  },
  5: {
    title: "Task 5",
    name: "Observing people",
    excerpt: "Observing people",
    prompt: "Go to some public place, look around, observe people you see. Describe several people (two or three) that caught your eye.  It should be clear from your description why did you choose them or, even better, one could understand something about their character.",
    wordGoal: 250
  },
  6: {
    title: "Task 6",
    name: "Observing situations",
    excerpt: "Observing situations",
    prompt: "Go to some public place (a court, a zoo or just a mall) where there are people talking in public, try to notice what is going on around you. Listen to dialogues, communications around you. Invent and write down a small story around the dialogues and situations you observed (200-300 words)",
    wordGoal: 250
  },
  7: {
    title: "Task 7",
    name: "Essay",
    excerpt: "Essay",
    prompt: "Write an essay on one of the topics (happiness, anger, fear or any other feeling) – Write it the way so it would be obvious which topic you have chosen. Don’t use dialogue in your essay, try to show feelings through description. (200 – 300 words)",
    wordGoal: 300
  },
  8: {
    title: "Task 8",
    name: "Look at the world through your character's eyes",
    excerpt: "Look at the world through your character eyes",
    prompt: "Invent your character, think of a space that is relevant to him (his room, his classroom, his place of work – anything). Describe it the way so one could understand why or how this place is important for the character. Consider what your character thinks of (but you don’t need to specifically write it down in the text), what he would know about this place and what he would not. You can mention only things that your character knows. Try to observe the world through his eyes (200 – 300 words)",
    wordGoal: 300
  },
  9: {
    title: "Task 9",
    name: "Show, Don't Tell",
    excerpt: "Show, Don’t Tell",
    prompt: "Character in a Queue - 100 words. A stranger is standing in line in front of you. Describe this person. By the end of the paragraph the reader should feel something about the person—without you ever saying what that feeling is. \"Show don't tell\" in a contained/restrained format.",
    wordGoal: 100
  },
  10: {
    title: "Task 10",
    name: "Rewrite a paragraph from notable author",
    excerpt: "Rewrite a paragraph from notable author",
    prompt: "Use the format of the author but change the nouns, adjectives, verbs descriptions etc.. You can turn serious into comical or vice versa. Be creative!\n\na)\t“A filthy boy stood on the doorstep. He might be scrubbed of all that dirt, eventually—but not of so many orange freckles. No more than fourteen, with skinny, unstable legs like a marionette, he kept pitching forward, shifting soot into the hall. Still, the woman, who’d opened the door—easily amused, susceptible to beauty – found she couldn’t despise him”.\nZadie Smith, The Fraud\n\nb)\t\"She sent for one of those squat, plump little cakes called 'petites madeleines,' which look as though they had been moulded in the fluted valve of a scallop shell. And soon, mechanically, dispirited after a dreary day with the prospect of a depressing morrow, I raised to my lips a spoonful of the tea in which I had soaked a morsel of the cake.\"\nMarcel Proust, In Search of Lost Time: Swann's Way, Vol. 1\n\nc)\t“At first, Ifemelu forgot that she was someone else. In an apartment in South Philadelphia, a tired-faced woman opened the door and led her into a strong stench of urine.  The living room was dark, unaired, and she imagined the whole building steeped in months, even years, of accumulated urine, and herself working every day in this urine cloud.  From inside the apartment, a man was groaning, deep and eerie sounds; they were the groans of a person for whom groaning was the only choice left, and they frightened her.”\nChimamanda Ngozi Adichie, Americanah",
    wordGoal: 300
  },
  11: {
    title: "Task 11",
    name: "The Stolen First Line",
    excerpt: "The Stolen First Line",
    prompt: "Choose one of the five famous opening lines below. Keep the line exactly as written, then use it as the starting point for a story that takes the opposite direction—same energy, but a completely different world, premise, or outcome. This exercise will help you see how a single sentence establishes tone, voice, and narrative possibilities.\n\na) \"It was a bright cold day in April, and the clocks were striking thirteen.\" George Orwell, 1984 \n\nb) \"Mother died today. Or maybe yesterday; I can't be sure.\" Albert Camus, The Stranger \n\nc) \"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\" Jane Austen, Pride and Prejudice \n\nd) \"124 was spiteful.\" Toni Morrison, Beloved \n\ne) \"Call me Ishmael.\" Herman Melville, Moby-Dick",
    wordGoal: 300
  },
  12: {
    title: "Task 12",
    name: "Five Senses, One Moment",
    excerpt: "Five Senses, One Moment",
    prompt: "Pick an ordinary moment (e.g. waiting for the bus, buttering your toast, planning a trip) and write it using all five senses, but you can only use each sense once.\nThis exercise will help you develop precision and economy of language.",
    wordGoal: 100
  },
  13: {
    title: "Task 13",
    name: "Peter Elbow’s method",
    excerpt: "Peter Elbow’s method",
    prompt: "Choose your favourite task. Take the text you have written before and try to rewrite it from a scratch without looking at your original text or coping sentences from there. Let yourself get distracted and write everything that comes into your mind. Give yourself 30 minutes to do that. Then look through your text for 10 minutes and choose the best parts. Then, based on chosen parts, write everything down for another 30 minutes from the beginning. You can let yourself get distracted from the initial topic.  Repeat the process one more time. In the end you should have four different but at the same time similar texts. Which one do you like the most? Did freewriting help you find right words? Publish the best text (you can combine parts from different options) and describe your experience.",
    wordGoal: 400
  }
};

// Workspace user session management
let currentUser = "";

function initUserSession() {
  const params = new URLSearchParams(window.location.search);
  const userParam = params.get("user");
  
  if (userParam && userParam.trim()) {
    currentUser = userParam.trim().toLowerCase();
    
    // Save to list of recent workspaces
    saveRecentWorkspace(currentUser);
    
    // Update badge in header
    const badge = document.getElementById("user-profile-badge");
    const nameText = document.getElementById("user-display-name");
    if (badge && nameText) {
      nameText.textContent = currentUser;
      badge.style.display = "flex";
    }
    
    // Hide welcome modal
    const modal = document.getElementById("welcome-modal");
    if (modal) modal.style.display = "none";
  } else {
    // No user specified, check last active user in this browser
    const lastActive = localStorage.getItem("inkwell_last_user");
    if (lastActive && lastActive.trim()) {
      window.location.search = `?user=${encodeURIComponent(lastActive.trim())}`;
    } else {
      // Show welcome modal
      showWelcomeModal();
    }
  }
}

function showWelcomeModal() {
  const modal = document.getElementById("welcome-modal");
  if (modal) {
    modal.style.display = "flex";
  }
  
  // Render recent profiles
  renderRecentProfiles();
  
  // Bind form submissions
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.onsubmit = function(e) {
      e.preventDefault();
      const input = document.getElementById("workspace-input");
      const name = input.value.trim().toLowerCase();
      if (name) {
        enterWorkspace(name);
      }
    };
  }
  
  const ipBtn = document.getElementById("ip-login-btn");
  if (ipBtn) {
    ipBtn.onclick = function() {
      ipBtn.disabled = true;
      ipBtn.textContent = "Detecting IP...";
      
      // Fetch public IP address
      fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(data => {
          if (data && data.ip) {
            enterWorkspace(data.ip);
          } else {
            throw new Error("Invalid IP response");
          }
        })
        .catch(err => {
          console.error("IP lookup failed, using local fallback", err);
          showToast("Could not detect public IP. Using 'offline-user' workspace.");
          enterWorkspace("offline-user");
        })
        .finally(() => {
          ipBtn.disabled = false;
          ipBtn.innerHTML = "<span>🌐</span> Auto-Detect IP Workspace";
        });
    };
  }
}

function enterWorkspace(username) {
  localStorage.setItem("inkwell_last_user", username);
  window.location.search = `?user=${encodeURIComponent(username)}`;
}

function logoutUser() {
  localStorage.removeItem("inkwell_last_user");
  window.location.search = "";
}

function saveRecentWorkspace(username) {
  let recents = [];
  const saved = localStorage.getItem("inkwell_recent_users");
  if (saved) {
    try {
      recents = JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  recents = recents.filter(u => u !== username);
  recents.unshift(username);
  if (recents.length > 5) recents.pop();
  localStorage.setItem("inkwell_recent_users", JSON.stringify(recents));
}

function renderRecentProfiles() {
  const section = document.getElementById("recent-profiles-section");
  const list = document.getElementById("recent-profiles-list");
  if (!section || !list) return;
  
  let recents = [];
  const saved = localStorage.getItem("inkwell_recent_users");
  if (saved) {
    try {
      recents = JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  
  if (recents.length > 0) {
    list.innerHTML = "";
    recents.forEach(u => {
      const btn = document.createElement("button");
      btn.className = "recent-item-btn";
      btn.innerHTML = `
        <span class="recent-item-name">👤 ${u}</span>
        <span class="recent-item-arrow">→</span>
      `;
      btn.onclick = () => enterWorkspace(u);
      list.appendChild(btn);
    });
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

// Application State
let state = {
  theme: "light",
  activeDay: null,
  writings: {}
};

// Initialize default state structure for 13 days
for (let i = 1; i <= 13; i++) {
  state.writings[i] = {
    draft: "",
    submitted: "",
    isCompleted: false
  };
}

// Select DOM elements
const el = {
  themeToggle: document.getElementById("theme-toggle"),
  themeIcon: document.getElementById("theme-icon"),
  
  // Stats
  completedCount: document.getElementById("completed-count"),
  totalWordCount: document.getElementById("total-word-count"),
  streakCount: document.getElementById("streak-count"),
  progressBarFill: document.getElementById("progress-fill"),
  
  // Views
  dashboardView: document.getElementById("dashboard-view"),
  studioView: document.getElementById("studio-view"),
  portfolioSection: document.getElementById("portfolio-section"),
  libraryView: document.getElementById("library-view"),
  
  // Grid
  taskGrid: document.getElementById("task-grid"),
  
  // Studio
  promptDay: document.getElementById("prompt-day"),
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  promptWordGoal: document.getElementById("prompt-word-goal"),
  editorTextarea: document.getElementById("editor-textarea"),
  editorWordCount: document.getElementById("editor-word-count"),
  editorCharCount: document.getElementById("editor-char-count"),
  saveStatusText: document.getElementById("save-status-text"),
  saveStatusDot: document.getElementById("save-status-dot"),
  backBtn: document.getElementById("back-btn"),
  submitBtn: document.getElementById("submit-btn"),
  downloadBtn: document.getElementById("download-btn"),
  
  // Portfolio
  portfolioGrid: document.getElementById("portfolio-grid"),
  portfolioEmpty: document.getElementById("portfolio-empty"),
  
  // Toast
  toast: document.getElementById("toast"),
  
  // Community Section
  communityContainer: document.getElementById("community-container")
};

// Load state from localStorage
function loadState() {
  const saved = localStorage.getItem(`inkwell_state_${currentUser}`);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Deep merge parsed settings over default structure
      state.theme = parsed.theme || "light";
      if (parsed.writings) {
        for (let i = 1; i <= 13; i++) {
          if (parsed.writings[i]) {
            state.writings[i] = {
              draft: parsed.writings[i].draft || "",
              submitted: parsed.writings[i].submitted || "",
              isCompleted: !!parsed.writings[i].isCompleted
            };
          }
        }
      }
    } catch (e) {
      console.error("Error parsing saved state", e);
    }
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem(`inkwell_state_${currentUser}`, JSON.stringify(state));
}

// Apply theme to document
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  if (state.theme === "dark") {
    el.themeIcon.textContent = "☀️";
    el.themeToggle.title = "Switch to Parchment Theme";
  } else {
    el.themeIcon.textContent = "🌙";
    el.themeToggle.title = "Switch to Midnight Ink Theme";
  }
}

// Display beautiful toast notification
let toastTimeout;
function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    el.toast.classList.remove("show");
  }, 3000);
}

// Helper to count words
function countWords(str) {
  const matches = str.trim().match(/\b[-a-zA-Z']+\b/gi);
  return matches ? matches.length : 0;
}

// Update stats banners in header
function updateStats() {
  let completed = 0;
  let words = 0;
  let streak = 0;
  
  // Calculate stats
  for (let i = 1; i <= 13; i++) {
    const w = state.writings[i];
    if (w.isCompleted) {
      completed++;
      words += countWords(w.submitted);
    } else {
      words += countWords(w.draft);
    }
  }
  
  // Basic streak calculation based on consecutive completed days
  let currentStreak = 0;
  for (let i = 1; i <= 13; i++) {
    if (state.writings[i].isCompleted) {
      currentStreak++;
      streak = Math.max(streak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }
  
  // Update HTML elements
  el.completedCount.textContent = `${completed}/13`;
  el.totalWordCount.textContent = words.toLocaleString();
  el.streakCount.textContent = streak;
  
  const percentage = (completed / 13) * 100;
  el.progressBarFill.style.width = `${percentage}%`;
}

// Build 13 task cards on Dashboard
function renderDashboard() {
  el.taskGrid.innerHTML = "";
  
  for (let i = 1; i <= 13; i++) {
    const task = PROMPTS[i];
    const userWriting = state.writings[i];
    
    // Determine card status
    let statusClass = "status-not-started";
    let statusText = "Not Started";
    let wordCountDisplay = "";
    
    if (userWriting.isCompleted) {
      statusClass = "status-completed";
      statusText = "Completed";
      wordCountDisplay = `${countWords(userWriting.submitted)} words`;
    } else if (userWriting.draft.trim().length > 0) {
      statusClass = "status-in-progress";
      statusText = "In Progress";
      wordCountDisplay = `${countWords(userWriting.draft)} words`;
    }
    
    const card = document.createElement("div");
    card.className = "task-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Day ${i}: ${task.title}. Status: ${statusText}`);
    
    let contentHtml = "";
    if (task.name) {
      contentHtml = `
        <div class="task-day">Day ${i}</div>
        <h3 class="task-title">${task.title}</h3>
        <p class="task-desc">${task.name}</p>
      `;
    } else {
      contentHtml = `
        <div class="task-day">Day ${i}</div>
        <h3 class="task-title">${task.title}</h3>
        <p class="task-desc">${task.excerpt}</p>
      `;
    }

    card.innerHTML = `
      <div>
        ${contentHtml}
      </div>
      <div class="task-card-footer">
        <span class="task-status-badge ${statusClass}">${statusText}</span>
        <span class="task-word-count">${wordCountDisplay}</span>
      </div>
    `;
    
    // Navigation handling
    const openTask = () => {
      openDay(i);
    };
    
    card.addEventListener("click", openTask);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openTask();
      }
    });
    
    el.taskGrid.appendChild(card);
  }
}

// Build list in "My Portfolio"
function renderPortfolio() {
  el.portfolioGrid.innerHTML = "";
  let hasSubmissions = false;
  
  for (let i = 1; i <= 13; i++) {
    const userWriting = state.writings[i];
    if (userWriting.isCompleted) {
      hasSubmissions = true;
      const prompt = PROMPTS[i];
      
      const card = document.createElement("div");
      card.className = "portfolio-card";
      
      card.innerHTML = `
        <div>
          <div class="portfolio-card-header">
            <span class="portfolio-card-day">Day ${i}</span>
            <span class="task-word-count">${countWords(userWriting.submitted)} words</span>
          </div>
          <h4 class="portfolio-card-title">${prompt.title}</h4>
          <p class="portfolio-card-excerpt">${escapeHTML(userWriting.submitted)}</p>
        </div>
        <div class="portfolio-card-actions">
          <button class="btn btn-sm" onclick="exportWriting(${i})">
            <span>📥</span> Download
          </button>
          <button class="btn btn-sm" onclick="copyWriting(${i})">
            <span>📋</span> Copy
          </button>
          <button class="btn btn-sm" onclick="openDay(${i})">
            <span>✏️</span> Edit
          </button>
        </div>
      `;
      el.portfolioGrid.appendChild(card);
    }
  }
  
  if (hasSubmissions) {
    el.portfolioEmpty.style.display = "none";
    el.portfolioSection.style.display = "block";
  } else {
    el.portfolioEmpty.style.display = "block";
    el.portfolioSection.style.display = "none";
  }
}

// HTML escape helper
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Trigger routing by changing the URL hash
function openDay(dayNum) {
  window.location.hash = `day-${dayNum}`;
}

// Trigger routing back to dashboard by clearing the hash
function closeDay() {
  window.location.hash = "";
}

// Handle routing transitions - called automatically on hashchange
function handleHashChange() {
  const hash = window.location.hash;
  const match = hash.match(/^#day-(\d+)$/);
  
  if (match) {
    const dayNum = parseInt(match[1], 10);
    if (dayNum >= 1 && dayNum <= 13) {
      showDayView(dayNum);
      return;
    }
  } else if (hash === "#library") {
    showLibraryView();
    return;
  }
  
  showDashboardView();
}

function showLibraryView() {
  state.activeDay = null;
  el.dashboardView.style.display = "none";
  el.portfolioSection.style.display = "none";
  el.studioView.style.display = "none";
  el.libraryView.style.display = "block";
}

// Render the Day X view in the DOM
function showDayView(dayNum) {
  state.activeDay = dayNum;
  const prompt = PROMPTS[dayNum];
  const userWriting = state.writings[dayNum];
  
  // Populating prompt elements
  el.promptDay.textContent = `Task ${dayNum}`;
  el.promptTitle.textContent = prompt.name || prompt.title;
  
  // Custom prompt rendering for Day 4 (Instructions manual)
  if (dayNum === 4) {
    el.promptContent.innerHTML = `
      <p style="margin-bottom: 1rem;">
        Along the lines of “Instructions for Climbing a Ladder” by Julio Cortázar (the story and its reading are shown below), write a set of instructions for one of the plain actions listed:
      </p>
      <ul class="routinary-list" style="margin-left: 1.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; list-style-type: disc;">
        <li>Instructions for getting ready before a date</li>
        <li>Instructions for opening an umbrella</li>
        <li>Instructions for wrapping up a present</li>
        <li>Instructions for eating spaghetti</li>
        <li>Instructions for spying on your spouse’s phone.</li>
      </ul>
      <div class="video-container" style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); height: 200px;">
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/fG0d0DDT9rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="reading-pane-box" style="max-height: 250px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; background-color: var(--bg-primary); font-size: 0.85rem; line-height: 1.6; font-family: var(--font-sans);">
        <h4 style="font-family: var(--font-serif); margin-bottom: 0.5rem; font-size: 1rem;">Instructions on How to Climb a Staircase</h4>
        <p style="font-style: italic; margin-bottom: 0.5rem; color: var(--text-secondary);">By Julio Cortázar</p>
        <p style="margin-bottom: 0.5rem;">There is no one who hasn’t observed that frequently the floor will fold in such a manner that one part of it rises at a right angle with the plane of the floor, and later the following part is placed in a parallel manner to this plane, giving way to a new perpendicular, and that this conduct repeats as a spiral or broken line up to an extremely variable height. Each one of these footholds, formed along the way by two elements, is situated equally higher and more forward than the former, a principle that gives meaning to the staircase since whatever other combination will produce a form perhaps more beautiful or picturesque, but incapable of translating the lower floor to the upper floor. Stairs are climbed from the front, since climbing them from behind or the side will result particularly uncomfortable. The natural attitude consists in maintaining oneself on one’s feet, the arms loosely hanging at the side, the head erect but not so much so that the eyes stop seeing those elevated footholds immediate to the one that is being tread upon, and breathing slowly and regularly.</p>
        <p style="margin-bottom: 0.5rem;">In order to climb a staircase one commences by raising that portion of the body situated at the below right, covered almost always in leather or rubber, and almost without exception fits exactly upon the foothold.</p>
        <p>Said part being placed upon the first foothold, and in order to abbreviate we will hitherto call it “foot”, the equivalent part on the left is then removed (also called foot, but one must not confuse it with the aforementioned foot.) and raising it to the height of the foot, it is to be made to follow until it is placed upon the second foothold, upon which the foot may now may rest, and upon the first the other foot may rest. (The first footholds are always the most difficult, until acquiring the necessary coordination. The coincidence of the name between foot and foot make the explanation difficult. Be especially careful to not raise the foot and the foot at the same time.) Arriving in this manner to the second foothold, it is enough to alternate the movements until one finds oneself at the end of the stairs. One can easily leave them with a light blow of the heel that fixes it in its place, from which it shall not move until the moment of descent.</p>
      </div>
    `;
  } else if (dayNum === 9) {
    el.promptContent.innerHTML = `
      <p style="margin-bottom: 1.5rem; font-style: italic;">Character in a Queue - 100 Words</p>
      <p>A stranger is standing in line in front of you. Describe this person. By the end of the paragraph the reader should feel something about the person—without you ever saying what that feeling is. "Show don't tell" in a contained/restrained format.</p>
    `;
  } else {
    el.promptContent.innerHTML = prompt.prompt.replace(/\n/g, '<br>');
  }
  
  el.promptWordGoal.textContent = `${prompt.wordGoal} words recommended`;
  
  // Populating editor content
  // Load submitted text if completed, otherwise load draft
  const currentText = userWriting.isCompleted ? userWriting.submitted : userWriting.draft;
  el.editorTextarea.value = currentText;
  
  // Enable editing state
  el.editorTextarea.removeAttribute("disabled");
  el.submitBtn.textContent = userWriting.isCompleted ? "Update Submission" : "Submit Response";
  
  // Update counts
  updateEditorStats(currentText);
  
  // Clear autosave status
  el.saveStatusText.textContent = "All changes saved";
  el.saveStatusDot.classList.remove("active");
  
  // Handle layout toggling for Interactive Tasks 1, 2, 3
  const standardSidebar = document.querySelector(".studio-sidebar");
  const interactiveLayout = document.getElementById("studio-interactive-layout");
  const promptHeader = getOrCreatePromptHeader();
  
  if (dayNum <= 3) {
    el.studioView.classList.add("interactive-mode");
    if (standardSidebar) standardSidebar.style.display = "none";
    if (interactiveLayout) {
      interactiveLayout.style.display = "block";
      renderInteractiveLayout(dayNum);
    }
  } else {
    el.studioView.classList.remove("interactive-mode");
    if (standardSidebar) standardSidebar.style.display = "flex";
    if (interactiveLayout) interactiveLayout.style.display = "none";
    if (promptHeader) promptHeader.style.display = "none";
  }
  
  // Transition views
  el.dashboardView.style.display = "none";
  el.portfolioSection.style.display = "none";
  el.libraryView.style.display = "none";
  el.studioView.style.display = "grid";
  
  // Render community section (locked or unlocked)
  renderCommunitySection(dayNum);
  
  // Focus editor (skip focus for interactive tasks to avoid jarring scroll)
  if (dayNum > 3) {
    el.editorTextarea.focus();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Helper to get or create prompt header above editor
function getOrCreatePromptHeader() {
  let header = document.getElementById("interactive-prompt-header");
  if (!header) {
    header = document.createElement("div");
    header.id = "interactive-prompt-header";
    header.style.marginBottom = "1rem";
    header.style.padding = "0.75rem 1rem";
    header.style.backgroundColor = "var(--bg-tertiary)";
    header.style.borderLeft = "3px solid var(--color-accent)";
    header.style.borderRadius = "6px";
    header.style.fontSize = "0.95rem";
    header.style.fontFamily = "var(--font-editor)";
    header.style.display = "none";
    
    const wrapper = document.querySelector(".writing-area-wrapper");
    if (wrapper && wrapper.parentNode) {
      wrapper.parentNode.insertBefore(header, wrapper);
    }
  }
  return header;
}

// Main router for rendering Day 1-3 interactive components
function renderInteractiveLayout(dayNum) {
  const container = document.getElementById("studio-interactive-layout");
  if (!container) return;
  
  if (dayNum === 1) {
    renderTask1(container);
  } else if (dayNum === 2) {
    renderTask2(container);
  } else if (dayNum === 3) {
    renderTask3(container);
  }
}

// ----------------------------------------------------
// Day 1: Elizabeth Barrett Browning Fill-In-The-Blanks
// ----------------------------------------------------
function renderTask1(container) {
  container.innerHTML = `
    <div class="interactive-panel task1-panel">
      <div class="back-btn-container">
        <button class="btn back-to-dashboard-btn" id="task1-back">← Dashboard</button>
      </div>
      <div class="prompt-day">Task 1</div>
      <h2 class="prompt-title">Enter the Writer's Workshop</h2>
      <p class="prompt-content" style="font-size:0.95rem; margin-bottom:1.5rem; font-family: var(--font-sans); color: var(--text-secondary);">
        Some of the poet's words have been lifted away. Step into her chair — fill each blank with your own, then reveal what she chose.
      </p>
      
      <div class="poem-frame">
        <div class="poem" id="poem-container">
          <div class="pline">How do I love thee? Let me count the ways.</div>
          <div class="pline">I love thee to the depth and <input class="gap" data-answer="breadth" style="width:8ch"> and <input class="gap" data-answer="height" style="width:7ch"></div>
          <div class="pline">My <input class="gap" data-answer="soul" style="width:5ch"> can reach, when feeling out of <input class="gap" data-answer="sight" style="width:6ch"></div>
          <div class="pline">For the ends of being and ideal <input class="gap" data-answer="grace" style="width:6ch">.</div>
          <div class="pline">I love thee to the level of every day's</div>
          <div class="pline">Most quiet <input class="gap" data-answer="need" style="width:5ch">, by sun and <input class="gap" data-answer="candle-light" style="width:13ch">.</div>
          <div class="pline">I love thee freely, as men strive for <input class="gap" data-answer="right" style="width:6ch">.</div>
          <div class="pline">I love thee purely, as they turn from <input class="gap" data-answer="praise" style="width:7ch">.</div>
          <div class="pline">I love thee with the <input class="gap" data-answer="passion" style="width:8ch"> put to use</div>
          <div class="pline">In my old <input class="gap" data-answer="griefs" style="width:7ch">, and with my childhood's <input class="gap" data-answer="faith" style="width:6ch">.</div>
          <div class="pline">I love thee with a love I seemed to lose</div>
          <div class="pline">With my lost <input class="gap" data-answer="saints" style="width:7ch">. I love thee with the <input class="gap" data-answer="breath" style="width:7ch">,</div>
          <div class="pline">Smiles, <input class="gap" data-answer="tears" style="width:6ch">, of all my <input class="gap" data-answer="life" style="width:5ch">; and, if God choose,</div>
          <div class="pline">I shall but love thee better after <input class="gap" data-answer="death" style="width:6ch">.</div>
        </div>
      </div>
      
      <div class="row" style="margin-top: 1.5rem; display: flex; gap: 10px;">
        <button class="btn btn-primary" id="revealBtn">Reveal the poet's words</button>
        <button class="btn" id="resetBtn">Clear my words</button>
        <button class="btn" id="copyToEditorBtn" title="Copy filled poem to draft space">📋 Copy to Draft</button>
      </div>
      <p class="note" style="margin-top: 1rem;">
        The poet's words appear in gold. Where yours differ, ask which is braver — hers or yours.
      </p>
    </div>
  `;
  
  // Bind back button
  document.getElementById("task1-back").onclick = closeDay;
  
  const gaps = [...container.querySelectorAll("input.gap")];
  let revealed = false;
  let stash = [];
  
  // Load saved gap values from localStorage
  const savedGaps = localStorage.getItem(`inkwell_task1_gaps_${currentUser}`);
  if (savedGaps) {
    try {
      const parsed = JSON.parse(savedGaps);
      gaps.forEach((g, idx) => {
        if (parsed[idx] !== undefined) g.value = parsed[idx];
      });
    } catch (e) {
      console.error("Error loading gaps", e);
    }
  }
  
  // Autosave gap inputs when typing
  gaps.forEach(g => {
    g.oninput = () => {
      if (revealed) return;
      const values = gaps.map(gap => gap.value);
      localStorage.setItem(`inkwell_task1_gaps_${currentUser}`, JSON.stringify(values));
    };
  });
  
  // Reveal poet's words toggle
  const revealBtn = document.getElementById("revealBtn");
  revealBtn.onclick = function() {
    revealed = !revealed;
    if (revealed) {
      stash = gaps.map(g => g.value);
      gaps.forEach(g => {
        g.value = g.dataset.answer;
        g.classList.add("revealed");
        g.readOnly = true;
        g.style.width = (g.dataset.answer.length + 1) + "ch";
      });
      this.textContent = "Hide the poet's words";
    } else {
      gaps.forEach((g, i) => {
        g.value = stash[i] || "";
        g.classList.remove("revealed");
        g.readOnly = false;
        g.style.width = (g.value.length ? Math.max(g.value.length + 1, 5) : 5) + "ch";
      });
      this.textContent = "Reveal the poet's words";
    }
  };
  
  // Reset all words
  document.getElementById("resetBtn").onclick = function() {
    gaps.forEach(g => {
      g.value = "";
      g.classList.remove("revealed");
      g.readOnly = false;
      g.style.width = "6ch";
    });
    revealed = false;
    revealBtn.textContent = "Reveal the poet's words";
    localStorage.removeItem(`inkwell_task1_gaps_${currentUser}`);
  };
  
  // Copy poem to editor
  document.getElementById("copyToEditorBtn").onclick = function() {
    let compiled = "";
    const lines = [...container.querySelectorAll(".pline")];
    
    lines.forEach(line => {
      let lineText = "";
      // Rebuild the line by checking child nodes
      line.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          lineText += node.textContent;
        } else if (node.tagName === "INPUT") {
          const val = node.value.trim();
          lineText += val ? `[${val}]` : "[_________]";
        }
      });
      compiled += lineText + "\n";
    });
    
    el.editorTextarea.value = compiled.trim();
    handleEditorInput();
    showToast("Filled poem copied to your writing draft!");
  };
}

// ----------------------------------------------------
// Day 2: The Word Harvest Clicking Game
// ----------------------------------------------------
const WORDS_DECK = [
  "friend", "grass", "yell", "distant", "old", "city", "drag", "walk", "purple", "fast", "easy-going",
  "window", "whisper", "rust", "lemon", "almost", "hurry", "soft", "ladder", "river", "forget", "crowded",
  "balloon", "echo", "pocket", "sudden", "gold", "tremble", "melt", "glass", "sticky", "midnight"
];
const CARD_PALETTE = ["#2c5e43", "#c5a059", "#3d7eaa", "#b24c63", "#896a9e", "#5b8266", "#c89d53", "#587291"];

let wordHarvestOrder = [...WORDS_DECK];
let wordHarvestPicked = new Set();

function renderTask2(container) {
  // Load saved picked words
  const savedPicked = localStorage.getItem(`inkwell_task2_picked_${currentUser}`);
  if (savedPicked) {
    try {
      wordHarvestPicked = new Set(JSON.parse(savedPicked));
    } catch (e) {
      console.error(e);
    }
  }
  
  container.innerHTML = `
    <div class="interactive-panel task2-panel">
      <div class="back-btn-container">
        <button class="btn back-to-dashboard-btn" id="task2-back">← Dashboard</button>
      </div>
      <div class="prompt-day">Task 2</div>
      <h2 class="prompt-title">The Word Harvest</h2>
      <div class="why" style="background: var(--bg-tertiary); border-radius: 8px; padding: 1rem; font-size: 0.85rem; margin-bottom: 1.5rem; font-family: var(--font-sans); color: var(--text-secondary); line-height: 1.55;">
        <strong>The point:</strong> a fixed set of random words pulls you out of your usual phrases. You stop reaching for the sentence you already know and start building around what you're given — and the surprising connections are where the writing gets alive.
      </div>
      
      <div class="barrow" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-family: var(--font-sans);">
        <span class="step" style="font-size: 0.95rem; font-weight: 600;">1. Pick exactly 12 cards by instinct:</span>
        <span class="counter" id="card-counter" style="font-weight: 600; padding: 0.3rem 0.8rem; border: 1px solid var(--border-color); border-radius: 20px; font-size: 0.85rem; background-color: var(--bg-primary);">0 / 12</span>
      </div>
      
      <div class="card-grid-container" id="card-bank"></div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <button class="btn" id="shuffleBtn">↺ Shuffle Deck</button>
        <span style="font-size:0.8rem; color: var(--text-muted);">Max writing limit: 80 words</span>
      </div>
      
      <div class="checklist-section">
        <h4 style="font-family: var(--font-serif); font-size: 1rem; margin-bottom: 0.5rem; color: var(--text-primary);">Used Words Tracker:</h4>
        <div class="used-words-box" id="used-words-container" style="font-size: 0.85rem; padding: 0.8rem; background-color: var(--bg-primary); border-radius: 8px; border: 1px solid var(--border-color); min-height: 50px; line-height: 1.6;">
          <span class="empty" style="color: var(--text-muted); font-style: italic;">Your 12 words will check off here as you use them.</span>
        </div>
      </div>
    </div>
  `;
  
  // Bind back button
  document.getElementById("task2-back").onclick = closeDay;
  
  const bank = document.getElementById("card-bank");
  const counter = document.getElementById("card-counter");
  const shuffleBtn = document.getElementById("shuffleBtn");
  
  function renderHarvestCards() {
    bank.innerHTML = "";
    wordHarvestOrder.forEach((w, idx) => {
      const c = document.createElement("button");
      c.className = "card";
      
      const isPicked = wordHarvestPicked.has(w);
      const isMaxReached = wordHarvestPicked.size >= 12;
      
      if (isPicked) c.classList.add("flipped");
      else if (isMaxReached) c.classList.add("dim");
      
      const inner = document.createElement("div");
      inner.className = "inner";
      
      const back = document.createElement("div");
      back.className = "face back";
      back.textContent = "?";
      back.style.background = `linear-gradient(135deg, ${CARD_PALETTE[idx % CARD_PALETTE.length]}, var(--color-gold))`;
      
      const front = document.createElement("div");
      front.className = "face front";
      front.textContent = w;
      
      inner.appendChild(back);
      inner.appendChild(front);
      c.appendChild(inner);
      
      c.onclick = () => {
        if (wordHarvestPicked.has(w)) {
          wordHarvestPicked.delete(w);
        } else if (wordHarvestPicked.size < 12) {
          wordHarvestPicked.add(w);
        }
        localStorage.setItem(`inkwell_task2_picked_${currentUser}`, JSON.stringify([...wordHarvestPicked]));
        renderHarvestCards();
      };
      
      bank.appendChild(c);
    });
    
    counter.textContent = `${wordHarvestPicked.size} / 12`;
    counter.style.borderColor = wordHarvestPicked.size === 12 ? "var(--color-accent)" : "var(--border-color)";
    counter.style.color = wordHarvestPicked.size === 12 ? "var(--color-accent)" : "var(--text-primary)";
    
    updateWordHarvestChecklist();
  }
  
  // Shuffle cards
  shuffleBtn.onclick = () => {
    wordHarvestOrder.sort(() => Math.random() - 0.5);
    renderHarvestCards();
  };
  
  // Initial render
  renderHarvestCards();
}

// Function to update the Day 2 checklist in real-time
function updateWordHarvestChecklist() {
  const container = document.getElementById("used-words-container");
  if (!container) return;
  
  if (wordHarvestPicked.size === 0) {
    container.innerHTML = '<span class="empty" style="color: var(--text-muted); font-style: italic;">Your 12 words will check off here as you use them.</span>';
    return;
  }
  
  const text = el.editorTextarea.value.toLowerCase();
  let hits = 0;
  
  const parts = [...wordHarvestPicked].map(word => {
    // Escape special regex chars
    const esc = word.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp("\\b" + esc, "i");
    const isUsed = regex.test(text);
    if (isUsed) hits++;
    
    return isUsed ? `<span class="tick" style="color: var(--color-accent); font-weight: 600;">${word} ✓</span>` : `<span style="color: var(--text-secondary); opacity: 0.75;">${word}</span>`;
  });
  
  container.innerHTML = `<div style="margin-bottom: 0.5rem;"><strong>${hits} of ${wordHarvestPicked.size} words used</strong></div>` + parts.join("<span style='color: var(--text-muted);'>, </span>");
}

// ----------------------------------------------------
// Day 3: Character/Location/Mood Scene Generator
// ----------------------------------------------------
function renderTask3(container) {
  const PEOPLE = [
    { id: 'p1', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'A tired nurse' },
    { id: 'p2', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'A businessman' },
    { id: 'p3', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'A teenager with dyed hair' },
    { id: 'p4', img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'An elderly woman' },
    { id: 'p5', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'A nervous student' },
    { id: 'p6', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'A street musician' }
  ];

  const PLACES = [
    { id: 'pl1', img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=200&h=200', pos: 'center', cap: 'An empty diner at 3 AM' },
    { id: 'pl2', img: 'assets/crowded_elevator.png', pos: 'center', cap: 'A crowded elevator' },
    { id: 'pl3', img: 'assets/laundromat.png', pos: 'center', cap: 'A laundromat' },
    { id: 'pl4', img: 'assets/park_bench_rain.png', pos: 'center', cap: 'A park bench in the rain' }
  ];

  const MOODS = [
    'Someone is lying.',
    'One of them is about to leave forever.',
    'They share a secret.',
    'One owes the other money.',
    'They just realized they are being watched.'
  ];

  let picks = { people: new Set(), place: null, mood: null };
  
  // Load saved choices from localStorage
  const savedPicks = localStorage.getItem(`inkwell_task3_picks_${currentUser}`);
  if (savedPicks) {
    try {
      const parsed = JSON.parse(savedPicks);
      picks.people = new Set(parsed.people || []);
      picks.place = parsed.place || null;
      picks.mood = parsed.mood || null;
    } catch (e) {
      console.error(e);
    }
  }
  
  container.innerHTML = `
    <div class="interactive-panel task3-panel">
      <div class="back-btn-container">
        <button class="btn back-to-dashboard-btn" id="task3-back">← Dashboard</button>
      </div>
      <div class="prompt-day">Task 3</div>
      <h2 class="prompt-title">Scene Generator</h2>
      <div class="why" style="background: var(--bg-tertiary); border-radius: 8px; padding: 1rem; font-size: 0.85rem; margin-bottom: 1.5rem; font-family: var(--font-sans); color: var(--text-secondary); line-height: 1.55;">
        <strong>The point:</strong> pulling together people who don't obviously belong together, a place, and a hidden tension forces you to <em>invent</em> the connective tissue. The friction between the pieces is where the story comes from.
      </div>
      
      <div class="group" style="margin-bottom: 1.5rem;">
        <div class="glabel">Choose two people:</div>
        <div class="ghint">Who is in the scene? Pick exactly 2.</div>
        <div class="tiles-grid" id="people-grid"></div>
      </div>
      
      <div class="group" style="margin-bottom: 1.5rem;">
        <div class="glabel">Choose a place:</div>
        <div class="ghint">Where are they? Pick exactly 1.</div>
        <div class="tiles-grid" id="places-grid"></div>
      </div>
      
      <div class="group" style="margin-bottom: 1.5rem;">
        <div class="glabel">Choose the charge in the air:</div>
        <div class="ghint">The unspoken tension or tone. Pick exactly 1.</div>
        <div class="moods-grid" id="moods-grid"></div>
      </div>
      
      <div class="compiled-scene-box" id="scene-summary-box"></div>
    </div>
  `;
  
  // Bind back button
  document.getElementById("task3-back").onclick = closeDay;
  
  const peopleGrid = document.getElementById("people-grid");
  const placesGrid = document.getElementById("places-grid");
  const moodsGrid = document.getElementById("moods-grid");
  const sceneBox = document.getElementById("scene-summary-box");
  
  function renderSceneTiles() {
    // 1. Render People Grid
    peopleGrid.innerHTML = "";
    PEOPLE.forEach(item => {
      const tile = document.createElement("div");
      tile.className = "tile";
      
      const isSelected = picks.people.has(item.id);
      const isMaxReached = picks.people.size >= 2;
      
      if (isSelected) tile.classList.add("sel");
      else if (isMaxReached) tile.classList.add("dim");
      
      tile.innerHTML = `
        <div class="thumb"><img src="${item.img}" style="object-position: ${item.pos};" alt="${item.cap}"></div>
        <div class="cap">${item.cap}</div>
      `;
      
      tile.onclick = () => {
        if (picks.people.has(item.id)) {
          picks.people.delete(item.id);
        } else if (picks.people.size < 2) {
          picks.people.add(item.id);
        }
        saveTask3State();
        renderSceneTiles();
      };
      peopleGrid.appendChild(tile);
    });
    
    // 2. Render Places Grid
    placesGrid.innerHTML = "";
    PLACES.forEach(item => {
      const tile = document.createElement("div");
      tile.className = "tile";
      
      const isSelected = picks.place === item.id;
      if (isSelected) tile.classList.add("sel");
      
      tile.innerHTML = `
        <div class="thumb"><img src="${item.img}" style="object-position: ${item.pos};" alt="${item.cap}"></div>
        <div class="cap">${item.cap}</div>
      `;
      
      tile.onclick = () => {
        picks.place = picks.place === item.id ? null : item.id;
        saveTask3State();
        renderSceneTiles();
      };
      placesGrid.appendChild(tile);
    });
    
    // 3. Render Moods list
    moodsGrid.innerHTML = "";
    MOODS.forEach(m => {
      const btn = document.createElement("button");
      btn.className = "mood-btn" + (picks.mood === m ? " sel" : "");
      btn.textContent = m;
      
      btn.onclick = () => {
        picks.mood = picks.mood === m ? null : m;
        saveTask3State();
        renderSceneTiles();
      };
      moodsGrid.appendChild(btn);
    });
    
    // 4. Update the prompt feedback box
    updateSceneFeedback();
  }
  
  function saveTask3State() {
    const serialized = {
      people: [...picks.people],
      place: picks.place,
      mood: picks.mood
    };
    localStorage.setItem(`inkwell_task3_picks_${currentUser}`, JSON.stringify(serialized));
  }
  
  const getCap = (list, id) => {
    const f = list.find(x => x.id === id);
    return f ? f.cap.toLowerCase() : null;
  };
  
  function updateSceneFeedback() {
    const ppl = [...picks.people].map(id => getCap(PEOPLE, id));
    const placeName = getCap(PLACES, picks.place);
    
    const slotSpan = val => val ? `<span class="fill">${val}</span>` : `<span class="slot">&hellip;</span>`;
    
    const promptString = `Your scene: ${slotSpan(ppl[0])} and ${slotSpan(ppl[1])}, in ${slotSpan(placeName)}. In the air — ${picks.mood ? `<span class="fill">${picks.mood.toLowerCase()}</span>` : `<span class="slot">&hellip;</span>`}.`;
    
    sceneBox.innerHTML = promptString;
    
    // Also update prompt header above the editor
    const promptHeader = getOrCreatePromptHeader();
    if (promptHeader) {
      const cleanPrompt = `Your scene: ${ppl[0] || '...'} and ${ppl[1] || '...'}, in ${placeName || '...'}. In the air — ${picks.mood ? picks.mood.toLowerCase() : '...'}.`;
      promptHeader.innerHTML = `<strong>Active Prompt:</strong> ${cleanPrompt}`;
      promptHeader.style.display = "block";
    }
  }
  
  // Initial render
  renderSceneTiles();
}

// Render the Dashboard view in the DOM
function showDashboardView() {
  state.activeDay = null;
  
  // Transition views
  el.studioView.style.display = "none";
  el.libraryView.style.display = "none";
  el.dashboardView.style.display = "block";
  
  // Clear community gallery DOM footprint
  if (el.communityContainer) {
    el.communityContainer.innerHTML = "";
  }
  
  // Refresh layout components
  renderDashboard();
  renderPortfolio();
  updateStats();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update word counts in editor footer
function updateEditorStats(text) {
  const words = countWords(text);
  const chars = text.length;
  
  el.editorWordCount.textContent = words;
  el.editorCharCount.textContent = chars;
}

// Handle real-time draft typing and auto-save
let saveTimeout;
function handleEditorInput() {
  if (!state.activeDay) return;
  
  const text = el.editorTextarea.value;
  updateEditorStats(text);
  
  // Real-time checking for Word Harvest (Day 2)
  if (state.activeDay === 2) {
    updateWordHarvestChecklist();
  }
  
  // Indicate save in progress
  el.saveStatusText.textContent = "Drafting...";
  el.saveStatusDot.classList.add("active");
  
  // Debounce saves (save 800ms after user stops typing)
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const currentDay = state.activeDay;
    
    // Save to memory
    if (state.writings[currentDay].isCompleted) {
      // If updating a previously submitted task, we save directly to submitted
      state.writings[currentDay].submitted = text;
    } else {
      state.writings[currentDay].draft = text;
    }
    
    saveState();
    updateStats();
    
    // Visual indicators
    el.saveStatusText.textContent = "Draft autosaved";
    el.saveStatusDot.classList.remove("active");
  }, 800);
}

// Submit Response handler
function submitResponse() {
  const day = state.activeDay;
  if (!day) return;
  
  const text = el.editorTextarea.value.trim();
  if (text.length === 0) {
    showToast("Please write something before submitting.");
    return;
  }
  
  // Mark as completed and save text
  state.writings[day].submitted = text;
  state.writings[day].draft = ""; // Clear draft once submitted
  state.writings[day].isCompleted = true;
  
  saveState();
  showToast(`Congratulations! Day ${day} challenge submitted successfully.`);
  
  // Transition back to dashboard
  closeDay();
}

// Trigger browser download of text file
function downloadTxtFile(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Export specific day submission
function exportWriting(dayNum) {
  const writing = state.writings[dayNum];
  const prompt = PROMPTS[dayNum];
  if (!writing.isCompleted) return;
  
  const title = `Day-${dayNum}-${prompt.title.replace(/\s+/g, "-")}.txt`;
  const content = `INKWELL: A 13-DAY LITERARY WORKSHOP\n` +
                  `==================================================\n` +
                  `DAY ${dayNum}: ${prompt.title.toUpperCase()}\n` +
                  `Prompt: ${prompt.prompt}\n` +
                  `Submitted response: (${countWords(writing.submitted)} words)\n` +
                  `==================================================\n\n` +
                  `${writing.submitted}`;
                  
  downloadTxtFile(title, content);
  showToast(`Downloaded Day ${dayNum} submission as a file.`);
}

// Copy writing to clipboard
function copyWriting(dayNum) {
  const writing = state.writings[dayNum];
  if (!writing.isCompleted) return;
  
  navigator.clipboard.writeText(writing.submitted)
    .then(() => {
      showToast(`Copied Day ${dayNum} response to clipboard.`);
    })
    .catch((err) => {
      console.error("Clipboard copy failed", err);
      showToast("Could not copy writing to clipboard.");
    });
}

// Comment storage and interaction logic
let userComments = {};

function loadComments() {
  const saved = localStorage.getItem(`inkwell_comments_${currentUser}`);
  if (saved) {
    try {
      userComments = JSON.parse(saved);
    } catch (e) {
      console.error("Error loading comments", e);
    }
  }
}

function saveComments() {
  localStorage.setItem(`inkwell_comments_${currentUser}`, JSON.stringify(userComments));
}

// Get comments for a specific submission (merging mock feedback + user custom comments)
function getUserComments(dayNum, authorId) {
  const key = `${dayNum}_${authorId}`;
  let custom = userComments[key] || [];
  let defaults = [];
  
  // Seed initial mock comments for other participants
  if (authorId === "elena" && dayNum === 1) {
    defaults = [{ author: "Julian Finch", text: "The terracotta description is gorgeous. I can feel the cold tiles.", time: "1 hour ago" }];
  } else if (authorId === "marcus" && dayNum === 1) {
    defaults = [{ author: "Sophia Varma", text: "The water rings and ink stains—such a simple, powerful image.", time: "3 hours ago" }];
  } else if (authorId === "sophia" && dayNum === 2) {
    defaults = [{ author: "Elena Rostova", text: "The needle pointing to a North that no longer exists is a beautiful metaphor.", time: "2 hours ago" }];
  } else if (authorId === "julian" && dayNum === 2) {
    defaults = [{ author: "Marcus Chen", text: "Fascinating characterization. The pen bleeding ink is a great tactile detail.", time: "4 hours ago" }];
  } else if (authorId === "clara" && dayNum === 3) {
    defaults = [{ author: "David Sterling", text: "The quick dialogue back-and-forth builds so much suspense.", time: "1 hour ago" }];
  } else if (authorId === "david" && dayNum === 3) {
    defaults = [{ author: "Clara Martinez", text: "The settling dust detail makes the room feel so heavy.", time: "2 hours ago" }];
  } else if (authorId === "arthur" && dayNum === 4) {
    defaults = [{ author: "Elena Rostova", text: "You made this character very convincing. It's easy to see their pragmatism.", time: "3 hours ago" }];
  } else if (authorId === "elena" && dayNum === 4) {
    defaults = [{ author: "Arthur Pendleton", text: "A great defense of home. Strong, clear voice.", time: "1 hour ago" }];
  } else if (authorId === "julian" && dayNum === 5) {
    defaults = [{ author: "Sophia Varma", text: "The tension with the sleeve and honey pot was brilliant.", time: "2 hours ago" }];
  } else if (authorId === "marcus" && dayNum === 5) {
    defaults = [{ author: "David Sterling", text: "Adjustment of the scarf says it all. Subtext is perfect here.", time: "4 hours ago" }];
  } else if (authorId === "sophia" && dayNum === 6) {
    defaults = [{ author: "Julian Finch", text: "The structure of this piece flows so naturally. I love the transition.", time: "1 hour ago" }];
  } else if (authorId === "david" && dayNum === 6) {
    defaults = [{ author: "Elena Rostova", text: "Great ending sentence. It really emphasizes the circular nature of choices.", time: "3 hours ago" }];
  } else if (authorId === "elena" && dayNum === 7) {
    defaults = [{ author: "Julian Finch", text: "The description of the heart rate changes is so intense. Great essay.", time: "1 hour ago" }];
  } else if (authorId === "marcus" && dayNum === 7) {
    defaults = [{ author: "Sophia Varma", text: "I can feel the heat in your description of anger. Beautiful work.", time: "2 hours ago" }];
  } else if (authorId === "arthur" && dayNum === 8) {
    defaults = [{ author: "Elena Rostova", text: "The detail about the three inches shelf height says so much about his daily routine.", time: "3 hours ago" }];
  } else if (authorId === "sophia" && dayNum === 8) {
    defaults = [{ author: "David Sterling", text: "Observing through her eyes is very convincing. Loved the chalk grit detail.", time: "1 hour ago" }];
  } else if (authorId === "clara" && dayNum === 9) {
    defaults = [{ author: "Elena Rostova", text: "The manila envelope and the watch checking are perfect visual cues for anxiety.", time: "1 hour ago" }];
  } else if (authorId === "david" && dayNum === 9) {
    defaults = [{ author: "Marcus Chen", text: "You showed her humility and pride so well without mentioning it.", time: "3 hours ago" }];
  } else if (authorId === "clara" && dayNum === 10) {
    defaults = [{ author: "Sophia Varma", text: "Your Zadie Smith parody is hilarious! The server room soot replacement is brilliant.", time: "2 hours ago" }];
  } else if (authorId === "david" && dayNum === 10) {
    defaults = [{ author: "Elena Rostova", text: "The hamburger slider Proust parody is so funny. Mechanical and dispirited indeed!", time: "1 hour ago" }];
  } else if (authorId === "clara" && dayNum === 11) {
    defaults = [{ author: "Marcus Chen", text: "Starting with Camus' line and introducing a warm baguette is a great contrast.", time: "1 hour ago" }];
  } else if (authorId === "david" && dayNum === 11) {
    defaults = [{ author: "Sophia Varma", text: "Spinning clocks at the carnival completely flipped Orwell's dark mood. Beautiful.", time: "2 hours ago" }];
  } else if (authorId === "clara" && dayNum === 12) {
    defaults = [{ author: "Julian Finch", text: "Perfect economy of language. Each sense is so crisp and distinct.", time: "2 hours ago" }];
  } else if (authorId === "david" && dayNum === 12) {
    defaults = [{ author: "Elena Rostova", text: "I can smell the sourdough! Splendid exercise.", time: "3 hours ago" }];
  } else if (authorId === "clara" && dayNum === 13) {
    defaults = [{ author: "David Sterling", text: "Your comparison of the four texts is really interesting. The final one flows so well.", time: "1 hour ago" }];
  } else if (authorId === "david" && dayNum === 13) {
    defaults = [{ author: "Clara Martinez", text: "Freewriting definitely worked for you. The description of uncovering water is beautiful.", time: "2 hours ago" }];
  }
  
  // Seed the mock feedback comment on the user's entry if they submitted
  if (authorId === "user" && state.writings[dayNum].isCompleted) {
    const feedbackAuthor = MOCK_SUBMISSIONS[dayNum] ? MOCK_SUBMISSIONS[dayNum][0].author : "Marcus Chen";
    defaults = [
      {
        author: feedbackAuthor,
        text: getMockFeedbackMessage(dayNum),
        time: "Just now"
      }
    ];
  }
  
  return [...defaults, ...custom];
}

// Pre-packaged peer reviews from classmates
function getMockFeedbackMessage(dayNum) {
  const feedbacks = {
    1: "Your words in the gaps make Elizabeth Barrett Browning's poem feel fresh. A lovely launching pad!",
    2: "Using these specific 12 words created a very organic, playful flow. Well done!",
    3: "A great scene! The tension created by the mood is palpable between the two characters.",
    4: "Your instructions are incredibly funny and detailed. Julio Cortázar would be proud!",
    5: "Your description of these people is highly detailed and reveals so much about their hidden character.",
    6: "The dialogue you captured is so natural. The small story you built around it is very engaging.",
    7: "This essay really brings out the chosen feeling without dialogue. The sensory descriptions are excellent!",
    8: "Observing this space entirely through your character's eyes is very effective. It feels extremely authentic.",
    9: "You showed the stranger's character perfectly without telling us. The contained format is handled masterfully.",
    10: "Your parody is very creative and funny. You matched the original author's structure perfectly!",
    11: "Taking that classic first line and launching into the opposite story is a great exercise. You captured the energy perfectly.",
    12: "Using each of the five senses exactly once created a very precise, economic description. Every word counts.",
    13: "Peter Elbow's method is tough, but your final text shows how powerful freewriting and iterating can be. Great job!"
  };
  return feedbacks[dayNum] || "This is beautifully written. I really enjoyed reading your response!";
}

// Render locked state (pre-submission) or comments lists (post-submission)
function renderCommunitySection(dayNum) {
  const container = el.communityContainer;
  if (!container) return;
  
  const isCompleted = state.writings[dayNum].isCompleted;
  
  if (!isCompleted) {
    // Render Locked State
    container.innerHTML = `
      <div class="community-locked">
        <div class="locked-icon">🔒</div>
        <h3 class="locked-title">Community Gallery</h3>
        <p class="locked-message">
          Other writers have submitted their responses for Day ${dayNum}. 
          Submit your response to unlock the gallery, read their stories, and exchange feedback!
        </p>
      </div>
    `;
    return;
  }
  
  // Render Unlocked Feed
  let html = `
    <div class="community-feed-header">
      <h3>Community Gallery</h3>
      <p>Read submissions from other participants and share your thoughts below.</p>
    </div>
    <div class="community-grid">
  `;
  
  // Render User Card First
  const userWriting = state.writings[dayNum].submitted;
  const userCommentsList = getUserComments(dayNum, "user");
  
  html += `
    <div class="community-card user-entry">
      <div class="community-card-header">
        <div class="author-avatar" style="background-color: var(--color-gold);">You</div>
        <div class="author-meta">
          <span class="author-name">Your Submission <span class="author-badge">Author</span></span>
          <span class="submission-time">Submitted recently</span>
        </div>
      </div>
      <p class="community-text">${escapeHTML(userWriting)}</p>
      
      <div class="comments-section">
        <div class="comments-title">💬 Comments (${userCommentsList.length})</div>
        <div class="comments-list" id="comments-list-user-${dayNum}">
          ${renderCommentsList(userCommentsList)}
        </div>
        <form class="comment-form" onsubmit="handleCommentSubmit(event, ${dayNum}, 'user')">
          <input type="text" placeholder="Write a response..." class="comment-input" required>
          <button type="submit" class="comment-submit-btn">Post</button>
        </form>
      </div>
    </div>
  `;
  
  // Render Mocks Cards
  const mocks = MOCK_SUBMISSIONS[dayNum] || [];
  mocks.forEach((mock) => {
    const mockComments = getUserComments(dayNum, mock.id);
    
    html += `
      <div class="community-card">
        <div class="community-card-header">
          <div class="author-avatar" style="background-color: ${mock.avatarColor};">${mock.author.split(' ').map(n => n[0]).join('')}</div>
          <div class="author-meta">
            <span class="author-name">${mock.author}</span>
            <span class="submission-time">${mock.time}</span>
          </div>
        </div>
        <p class="community-text">${escapeHTML(mock.text)}</p>
        
        <div class="comments-section">
          <div class="comments-title">💬 Comments (${mockComments.length})</div>
          <div class="comments-list" id="comments-list-${mock.id}-${dayNum}">
            ${renderCommentsList(mockComments)}
          </div>
          <form class="comment-form" onsubmit="handleCommentSubmit(event, ${dayNum}, '${mock.id}')">
            <input type="text" placeholder="Add to the discussion..." class="comment-input" required>
            <button type="submit" class="comment-submit-btn">Post</button>
          </form>
        </div>
      </div>
    `;
  });
  
  html += `</div>`;
  container.innerHTML = html;
}

// Helper to format comments list HTML
function renderCommentsList(comments) {
  if (comments.length === 0) {
    return `<p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; margin-bottom: 0;">No comments yet. Be the first to reply!</p>`;
  }
  
  return comments.map(c => `
    <div class="comment-item">
      <div class="comment-header">
        <span class="comment-author">${c.author}</span>
        <span class="comment-time">${c.time}</span>
      </div>
      <p class="comment-text">${escapeHTML(c.text)}</p>
    </div>
  `).join('');
}

// Submit a new comment handler
function handleCommentSubmit(event, dayNum, authorId) {
  event.preventDefault();
  
  const form = event.target;
  const input = form.querySelector('.comment-input');
  const text = input.value.trim();
  
  if (text.length === 0) return;
  
  const key = `${dayNum}_${authorId}`;
  if (!userComments[key]) {
    userComments[key] = [];
  }
  
  userComments[key].push({
    author: "You",
    text: text,
    time: "Just now"
  });
  
  saveComments();
  
  // Clear input, re-render panel, show notification
  input.value = "";
  renderCommunitySection(dayNum);
  showToast("Comment posted!");
}

// Global functions exposed to inline onClick event handlers
window.exportWriting = exportWriting;
window.copyWriting = copyWriting;
window.openDay = openDay;
window.handleCommentSubmit = handleCommentSubmit;

// Set up UI events
function setupEvents() {
  // Theme Toggle
  el.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    saveState();
    applyTheme();
  });
  
  // Back to Dashboard button
  el.backBtn.addEventListener("click", closeDay);
  
  // Library Events
  const libraryCard = document.getElementById("library-card");
  const libraryBackBtn = document.getElementById("library-back-btn");
  if (libraryCard) {
    libraryCard.addEventListener("click", () => window.location.hash = "#library");
    libraryCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.hash = "#library";
      }
    });
  }
  if (libraryBackBtn) libraryBackBtn.addEventListener("click", closeDay);
  
  // Handle browser back/forward navigation
  window.addEventListener("hashchange", handleHashChange);
  
  // Editor typing handler
  el.editorTextarea.addEventListener("input", handleEditorInput);
  
  // Submit Response button
  el.submitBtn.addEventListener("click", submitResponse);
  
  // Download button (inside editor)
  el.downloadBtn.addEventListener("click", () => {
    if (!state.activeDay) return;
    const currentDay = state.activeDay;
    const prompt = PROMPTS[currentDay];
    const text = el.editorTextarea.value;
    
    if (text.trim().length === 0) {
      showToast("There is no writing to download yet.");
      return;
    }
    
    const title = `Day-${currentDay}-Draft-${prompt.title.replace(/\s+/g, "-")}.txt`;
    const content = `INKWELL: DRAFT WORK IN PROGRESS\n` +
                    `============================================\n` +
                    `DAY ${currentDay}: ${prompt.title.toUpperCase()}\n` +
                    `Prompt: ${prompt.prompt}\n` +
                    `============================================\n\n` +
                    `${text}`;
                    
    downloadTxtFile(title, content);
    showToast("Downloaded active draft.");
  });
  
  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    // If pressing ESC while in editor, offer way to back out
    if (e.key === "Escape" && state.activeDay) {
      closeDay();
    }
  });
  
  // Logout switch workspace
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.onclick = logoutUser;
  }
}

// Initialise application
function init() {
  initUserSession();
  
  if (!currentUser) return;
  
  loadState();
  loadComments();
  applyTheme();
  setupEvents();
  renderDashboard();
  renderPortfolio();
  updateStats();
  
  // Process the hash on start in case of refresh or deep linking
  handleHashChange();
}

// Run app
document.addEventListener("DOMContentLoaded", init);
