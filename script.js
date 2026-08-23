// ==========================================
// 1. DATA LAYERS & THEME GENERATORS (Your Notes: Objects & Arrays)
// ==========================================
let customDeskAssets = [
  { name: "YouTube Mainframe", category: "Entertainment Screen", url: "https://youtube.com", color: "rgba(255, 118, 117, 0.4)", gradient: "linear-gradient(135deg, #ff7675, #ff85a2)" },
  { name: "innerFrench Diary", category: "Study Notepad", url: "https://innerfrench.com", color: "rgba(253, 121, 168, 0.4)", gradient: "linear-gradient(135deg, #fd79a8, #a29bfe)" },
  { name: "Gmail Station", category: "Mail Tablet Workstation", url: "https://google.com", color: "rgba(255, 190, 118, 0.4)", gradient: "linear-gradient(135deg, #ffbe76, #ffeaa7)" },
  { name: "Spotify Stereo", category: "Desk Headphones", url: "https://spotify.com", color: "rgba(162, 155, 254, 0.4)", gradient: "linear-gradient(135deg, #a29bfe, #74b9ff)" },
  { name: "Sora Library Portal", category: "Reading Stack", url: "https://soraapp.com", color: "rgba(2fab140, 0.4)", gradient: "linear-gradient(135deg, #fab1a0, #ff85a2)" },
  { name: "Cozy Plant Sanctuary", category: "Aesthetic Room Greenery", url: "https://pinterest.com", color: "rgba(85, 239, 196, 0.4)", gradient: "linear-gradient(135deg, #55efc4, #81ecec)" }
];

let preppyGreetings = [
  "✨ Stay positive, work hard, and make it happen today! ✨",
  "🎀 Welcome back to your aesthetic command center! 🎀",
  "🌸 Your desk space is set up and ready for amazing things! 🌸",
  "⭐ Keep shining bright and moving closer to your goals! ⭐"
];

// Initialize random preppy message on load
window.onload = function() {
  let randomIndex = Math.floor(Math.random() * preppyGreetings.length);
  document.getElementById("greeting-text").textContent = preppyGreetings[randomIndex];
  resetMemory();
  spawn2048();
};

// Main interactive click function with dynamic colors and text updates
function clickOnDeskItem(itemName) {
  let selectedObject;

  if (itemName === "YouTube") { selectedObject = customDeskAssets[0]; }
  else if (itemName === "innerFrench") { selectedObject = customDeskAssets[1]; }
  else if (itemName === "Gmail") { selectedObject = customDeskAssets[2]; }
  else if (itemName === "Spotify") { selectedObject = customDeskAssets[3]; }
  else if (itemName === "Sora") { selectedObject = customDeskAssets[4]; }
  else { selectedObject = customDeskAssets[5]; }

  // Update dynamic content
  document.getElementById("portal-title").textContent = "✨ Active: " + selectedObject.name;
  document.getElementById("portal-desc").textContent = "Opening pipeline channels inside your " + selectedObject.category + ".";
  
  let launchButton = document.getElementById("portal-link");
  launchButton.href = selectedObject.url;
  launchButton.style.display = "inline-block";

  // Shift color states dynamically
  document.getElementById("glass-card").style.background = selectedObject.color;
  document.body.style.background = selectedObject.gradient;
}

// Side Panel Applet Switcher Menu
function switchGame(gameId) {
  let boxes = document.getElementsByClassName("game-box");
  for (let b of boxes) { b.classList.remove("active"); }
  let buttons = document.getElementsByClassName("tab-btn");
  for (let btn of buttons) { btn.classList.remove("active"); }
  
  document.getElementById("game-" + gameId).classList.add("active");
  event.currentTarget.classList.add("active");
}

// ==========================================
// 2. TIC-TAC-TOE ENGINE CORE
// ==========================================
let tttBoard = ["", "", "", "", "", "", "", "", ""];
let tttActive = true;

function makeTTTMove(index) {
  let cells = document.getElementsByClassName("ttt-cell");
  if (tttBoard[index] !== "" || !tttActive) return;

  tttBoard[index] = "X";
  cells[index].textContent = "X";
  cells[index].style.color = "#ff7675";

  if (checkTTTWin("X")) {
    document.getElementById("ttt-status").textContent = "🎉 You win!";
    tttActive = false;
    return;
  }
  if (!tttBoard.includes("")) {
    document.getElementById("ttt-status").textContent = "🤝 It's a tie!";
    return;
  }

  // AI Turn (Simulated basic opponent response loop)
  document.getElementById("ttt-status").textContent = "🤖 Bot thinking...";
  setTimeout(() => {
    let emptyIndices = tttBoard.map((val, idx) => val === "" ? idx : null).filter(v => v !== null);
    if (emptyIndices.length > 0 && tttActive) {
      let botChoice = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      tttBoard[botChoice] = "O";
      cells[botChoice].textContent = "O";
      cells[botChoice].style.color = "#a29bfe";
      
      if (checkTTTWin("O")) {
        document.getElementById("ttt-status").textContent = "❌ Bot wins!";
        tttActive = false;
      } else {
        document.getElementById("ttt-status").textContent = "Your turn (X)";
      }
    }
  }, 400);
}

function checkTTTWin(p) {
  const winConditions = [, [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  return winConditions.some(comb => comb.every(idx => tttBoard[idx] === p));
}

function resetTTT() {
  tttBoard = ["", "", "", "", "", "", "", "", ""];
  tttActive = true;
  document.getElementById("ttt-status").textContent = "Your turn (X)";
  let cells = document.getElementsByClassName("ttt-cell");
  for (let c of cells) { c.textContent = ""; }
}

// ==========================================
// 3. MEMORY GAME MATRIX ENGINE
// ==========================================
const memoryItems = ["🌸","🌸","🍓","🍓","🦄","🦄","🎀","🎀","🧁","🧁","🐱","🐱"];
let flippedCards = [];

function resetMemory() {
  let grid = document.getElementById("memory-grid");
  grid.innerHTML = "";
  flippedCards = [];
  let shuffled = [...memoryItems].sort(() => Math.random() - 0.5);

  shuffled.forEach((item, idx) => {
    let card = document.createElement("div");
    card.classList.add("mem-card");
    card.dataset.value = item;
    card.dataset.id = idx;
    card.textContent = item;
    card.onclick = function() {
      if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        flippedCards.push(card);
        if (flippedCards.length === 2) {
          setTimeout(checkMemoryMatch, 600);
        }
      }
    };
    grid.appendChild(card);
  });
}

function checkMemoryMatch() {
  if (flippedCards[0].dataset.value !== flippedCards[1].dataset.value) {
    flippedCards[0].classList.remove("flipped");
    flippedCards[1].classList.remove("flipped");
  }
  flippedCards = [];
}

// ==========================================
// 4. CASUAL 2048 ENGINE
// ==========================================
let board2048 = Array(16).fill("");

function update2048Display() {
  let hexIds = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  for (let i = 0; i < 16; i++) {
    let element = document.getElementById("c" + hexIds[i]);
    element.textContent = board2048[i];
    element.style.background = board2048[i] ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)";
    element.style.color = board2048[i] ? "#2d3436" : "transparent";
  }
}

function spawn2048() {
  let emptyIndices = board2048.map((v, i) => v === "" ? i : null).filter(v => v !== null);
  if (emptyIndices.length > 0) {
    board2048[emptyIndices[Math.floor(Math.random() * emptyIndices.length)]] = 2;
    update2048Display();
  }
}

function move2048(direction) {
  // Simplistic slide-shift simulator logic for 2048 tiles
  let shifted = false;
  for (let i = 0; i < 16; i++) {
    if (board2048[i] !== "") {
      let target = i;
      if (direction === 'left' && i % 4 > 0 && board2048[i-1] === "") { board2048[i-1] = board2048[i]; board2048[i] = ""; shifted = true; }
      if (direction === 'right' && i % 4 < 3 && board2048[i+1] === "") { board2048[i+1] = board2048[i]; board2048[i] = ""; shifted = true; }
      if (direction === 'up' && i >= 4 && board2048[i-4] === "") { board2048[i-4] = board2048[i]; board2048[i] = ""; shifted = true; }
      if (direction === 'down' && i < 12 && board2048[i+4] === "") { board2048[i+4] = board2048[i]; board2048[i] = ""; shifted = true; }
    }
  }
  if (shifted) { spawn2048(); } else { spawn2048(); }
}

