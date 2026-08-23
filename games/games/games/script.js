// ==========================================
// 🕹️ MASTER ARCADE CONSOLE INTERFACE ENGINE
// ==========================================
function activateArcadeGame(gameDeckId) {
  let decks = document.getElementsByClassName("arcade-deck");
  for (let d of decks) { d.classList.remove("active"); }
  
  let tabs = document.getElementsByClassName("game-tab");
  for (let t of tabs) { t.classList.remove("active"); }

  document.getElementById("deck-" + gameDeckId).classList.add("active");
  event.currentTarget.classList.add("active");

  // Re-initialize chosen engine block cleanly on trigger swap
  if (gameDeckId === 'memory') rebuildMemoryMatrix();
  if (gameDeckId === 'game2048') initiate2048Engine();
}

window.onload = function() {
  clearTTTDeck();
};

// ==========================================
// 🌸 GAME SYSTEM 1: TIC-TAC-TOE CONTROLLER
// ==========================================
let boardTTT = ["", "", "", "", "", "", "", "", ""];
let activeTTT = true;

function handleTTTClick(index) {
  let cells = document.getElementsByClassName("ttt-cell");
  if (boardTTT[index] !== "" || !activeTTT) return;

  boardTTT[index] = "🌸";
  cells[index].textContent = "🌸";

  if (evaluateTTTWin("🌸")) {
    document.getElementById("ttt-announcement").textContent = "✨ Omg, you won! Incredible match! ✨";
    activeTTT = false;
    return;
  }
  if (!boardTTT.includes("")) {
    document.getElementById("ttt-announcement").textContent = "🤝 Cute tie! Play another round!";
    return;
  }

  activeTTT = false;
  document.getElementById("ttt-announcement").textContent = "🤖 Opponent thinking...";
  
  setTimeout(() => {
    let emptySlots = boardTTT.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    if (emptySlots.length > 0) {
      let botDecision = emptySlots[Math.floor(Math.random() * emptySlots.length)];
      boardTTT[botDecision] = "🍓";
      cells[botDecision].textContent = "🍓";

      if (evaluateTTTWin("🍓")) {
        document.getElementById("ttt-announcement").textContent = "❌ Sweet strawberry wins! Reset to retry.";
      } else {
        document.getElementById("ttt-announcement").textContent = "Your turn! Place an 🌸";
        activeTTT = true;
      }
    }
  }, 400);
}

function evaluateTTTWin(token) {
  const boundaries = [, [3, 4, 5], [6, 7, 8], // Horizontals, [1, 4, 7], [2, 5, 8], // Verticals, [2, 4, 6]             // Diagonals
  ];
  return boundaries.some(comb => comb.every(idx => boardTTT[idx] === token));
}

function clearTTTDeck() {
  boardTTT = ["", "", "", "", "", "", "", "", ""];
  activeTTT = true;
  document.getElementById("ttt-announcement").textContent = "Your turn! Place an 🌸";
  let cells = document.getElementsByClassName("ttt-cell");
  for (let c of cells) { c.textContent = ""; }
}

// ==========================================
// 🍓 GAME SYSTEM 2: INTERACTIVE MEMORY MATCH
// ==========================================
const matrixTokens = ["🦄", "🦄", "🌸", "🌸", "🧁", "🧁", "🍓", "🍓", "🎀", "🎀", "🎈", "🎈"];
let processDeckArray = [];

function rebuildMemoryMatrix() {
  let grid = document.getElementById("memory-matrix");
  grid.innerHTML = "";
  processDeckArray = [];
  document.getElementById("memory-announcement").textContent = "Find all matching pastel card pairs!";
  
  let randomizedDeck = [...matrixTokens].sort(() => Math.random() - 0.5);

  randomizedDeck.forEach((token) => {
    let nodeCard = document.createElement("div");
    nodeCard.classList.add("vector-card");
    nodeCard.innerHTML = `<span class="card-face-content">${token}</span>`;
    nodeCard.dataset.val = token;
    
    nodeCard.onclick = function() {
      if (processDeckArray.length < 2 && !nodeCard.classList.contains("flipped") && !nodeCard.classList.contains("matched")) {
        nodeCard.classList.add("flipped");
        processDeckArray.push(nodeCard);

        if (processDeckArray.length === 2) {
          setTimeout(verifyCardMatchPair, 500);
        }
      }
    };
    grid.appendChild(nodeCard);
  });
}

function verifyCardMatchPair() {
  let [c1, c2] = processDeckArray;
  if (c1.dataset.val === c2.dataset.val) {
    c1.classList.add("matched");
    c2.classList.add("matched");
    
    let remaining = document.querySelectorAll(".vector-card:not(.matched)");
    if (remaining.length === 0) {
      document.getElementById("memory-announcement").textContent = "🎉 Match Victory! Incredible memory! 🎉";
    }
  } else {
    c1.classList.remove("flipped");
    c2.classList.remove("flipped");
  }
  processDeckArray = [];
}

// ==========================================
// 🦄 GAME SYSTEM 3: RESPONSIVE 2048 CORE
// ==========================================
let matrix2048 = Array(16).fill(0);
let currentScore2048 = 0;

function initiate2048Engine() {
  matrix2048 = Array(16).fill(0);
  currentScore2048 = 0;
  document.getElementById("val-score-2048").textContent = "0";
  injectRandom2048Node();
  injectRandom2048Node();
  sync2048DisplayCanvas();
}

function sync2048DisplayCanvas() {
  for (let i = 0; i < 16; i++) {
    let elementNode = document.getElementById("n" + i);
    let value = matrix2048[i];
    elementNode.textContent = value > 0 ? value : "";
    elementNode.setAttribute("data-val", value);
  }
}

function injectRandom2048Node() {
  let emptyIndices = matrix2048.map((v, i) => v === 0 ? i : null).filter(v => v !== null);
  if (emptyIndices.length > 0) {
    let chosenSlot = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    matrix2048[chosenSlot] = Math.random() < 0.9 ? 2 : 4;
  }
}

function collapseRowLeft(row) {
  let valuesOnly = row.filter(val => val !== 0);
  for (let i = 0; i < valuesOnly.length - 1; i++) {
    if (valuesOnly[i] === valuesOnly[i + 1]) {
      valuesOnly[i] *= 2;
      currentScore2048 += valuesOnly[i];
      valuesOnly[i + 1] = 0;
    }
  }
  valuesOnly = valuesOnly.filter(val => val !== 0);
  while (valuesOnly.length < 4) { valuesOnly.push(0); }
  return valuesOnly;
}

function processSlide2048(direction) {
  let initialMapString = JSON.stringify(matrix2048);

  for (let i = 0; i < 4; i++) {
    let rowOrCol = [];
    
    if (direction === 'left' || direction === 'right') {
      for (let j = 0; j < 4; j++) { rowOrCol.push(matrix2048[i * 4 + j]); }
      if (direction === 'right') rowOrCol.reverse();
      let dynamicResult = collapseRowLeft(rowOrCol);
      if (direction === 'right') dynamicResult.reverse();
      for (let j = 0; j < 4; j++) { matrix2048[i * 4 + j] = dynamicResult[j]; }
    } 
    else if (direction === 'up' || direction === 'down') {
      for (let j = 0; j < 4; j++) { rowOrCol.push(matrix2048[j * 4 + i]); }
      if (direction === 'down') rowOrCol.reverse();
      let dynamicResult = collapseRowLeft(rowOrCol);
      if (direction === 'down') dynamicResult.reverse();
      for (let j = 0; j < 4; j++) { matrix2048[j * 4 + i] = dynamicResult[j]; }
    }
  }

  if (initialMapString !== JSON.stringify(matrix2048)) {
    injectRandom2048Node();
    document.getElementById("val-score-2048").textContent = currentScore2048;
    sync2048DisplayCanvas();
  }
}

