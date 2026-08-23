/* Layout & Background Canvas Grid */
body {
  margin: 0;
  padding: 20px;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: linear-gradient(135deg, #ffeaa7 0%, #ff85a2 50%, #a29bfe 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background 0.8s ease;
}

.main-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  width: 95%;
  max-width: 1100px;
}

@media (max-width: 768px) {
  .main-layout { grid-template-columns: 1fr; }
}

/* Background Glowing Blobs */
.blob { position: absolute; border-radius: 50%; filter: blur(60px); z-index: 1; opacity: 0.5; }
.blob1 { width: 300px; height: 300px; background: #55efc4; top: 10%; left: 10%; }
.blob2 { width: 250px; height: 250px; background: #fd79a8; bottom: 15%; right: 10%; }

/* Core Layout Design */
.dashboard-container { text-align: center; }
h1, h3 { color: #fff; text-shadow: 0px 3px 6px rgba(0,0,0,0.1); margin-top: 0; }
.subtitle { color: #fff; font-weight: 500; margin-bottom: 25px; min-height: 24px; }

/* Expanded Desk Surface Row */
.desk-setup {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.25);
  border-bottom: 12px solid #fff;
  padding: 20px 10px;
  border-radius: 24px 24px 0 0;
  margin-bottom: 20px;
}

/* Object Shape Engines */
.desk-item { cursor: pointer; display: flex; flex-direction: column; align-items: center; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); padding: 8px; border-radius: 12px; }
.desk-item:hover { transform: translateY(-12px) scale(1.08); }

.laptop { background: #ffeaa7; width: 75px; height: 65px; border: 3px solid #fff; }
.notepad { background: #fd79a8; width: 60px; height: 75px; border: 3px solid #fff; }
.coffee { background: #ffbe76; width: 50px; height: 55px; border: 3px solid #fff; border-radius: 10px 10px 20px 20px; }
.headphones { background: #a29bfe; width: 55px; height: 55px; border: 3px solid #fff; border-radius: 50%; }
.books { background: #fab1a0; width: 60px; height: 70px; border: 3px solid #fff; }
.plant { background: #55efc4; width: 55px; height: 60px; border: 3px solid #fff; border-radius: 15px 15px 50% 50%; }

.icon { font-size: 1.8rem; margin-top: 4px; }
.label { font-size: 0.7rem; font-weight: bold; color: #2d3436; margin-top: auto; background: #fff; padding: 1px 6px; border-radius: 20px; }

/* Frosted Glass Layout Layer */
.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  padding: 25px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  color: #fff;
  transition: background 0.4s ease;
}

#portal-link, .reset-btn {
  background: #fff; color: #ff7675; text-decoration: none; font-weight: bold; padding: 10px 24px; border-radius: 30px; display: inline-block; margin-top: 15px; border: none; cursor: pointer; transition: 0.2s;
}
#portal-link:hover, .reset-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

/* Gaming Grid Panels CSS Layouts */
.game-tabs { display: flex; gap: 8px; margin-bottom: 20px; justify-content: center; }
.tab-btn { background: rgba(255,255,255,0.3); border: none; padding: 8px 14px; border-radius: 20px; color: #fff; cursor: pointer; font-weight: bold; transition: 0.2s; }
.tab-btn.active, .tab-btn:hover { background: #fff; color: #ff7675; }
.game-box { display: none; text-align: center; }
.game-box.active { display: block; }

/* Game 1: Tic-Tac-Toe UI Layout */
.ttt-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width: 200px; margin: 0 auto; }
.ttt-cell { background: rgba(255,255,255,0.25); border: 2px solid #fff; border-radius: 12px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: bold; cursor: pointer; }

/* Game 2: Memory Matrix Grid Setup */
.memory-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; max-width: 240px; margin: 0 auto; }
.mem-card { background: #fff; border-radius: 8px; height: 50px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; cursor: pointer; color: transparent; user-select: none; }
.mem-card.flipped { color: #000; background: rgba(255,255,255,0.9); }

/* Game 3: 2048 Grid Map Framework */
.grid-2048 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; max-width: 200px; background: rgba(0,0,0,0.15); padding: 6px; border-radius: 12px; margin: 0 auto 10px; }
.cell-2048 { background: rgba(255,255,255,0.2); border-radius: 6px; height: 45px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; }
.controls-2048 button { background: #fff; border: none; padding: 4px 10px; margin: 3px; border-radius: 6px; font-weight: bold; cursor: pointer; }
