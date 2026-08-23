// Array of Objects capturing launcher links & properties
let customDeskAssets = [
  { name: "YouTube Mainframe", category: "Entertainment Desk Screen", url: "https://youtube.com", color: "rgba(255, 118, 117, 0.35)", gradient: "linear-gradient(135deg, #ff7675, #ff85a2)" },
  { name: "innerFrench Diary", category: "Language Study Notepad", url: "games/index.html", color: "rgba(253, 121, 168, 0.35)", gradient: "linear-gradient(135deg, #fd79a8, #a29bfe)" },
  { name: "Gmail Station", category: "Mail Tablet Workstation", url: "https://google.com", color: "rgba(255, 190, 118, 0.35)", gradient: "linear-gradient(135deg, #ffbe76, #ffeaa7)" },
  { name: "Spotify Stereo", category: "Music Desk Headphones", url: "https://spotify.com", color: "rgba(162, 155, 254, 0.35)", gradient: "linear-gradient(135deg, #a29bfe, #74b9ff)" },
  { name: "Sora Library Portal", category: "School Reading Stack", url: "https://soraapp.com", color: "rgba(250, 177, 160, 0.35)", gradient: "linear-gradient(135deg, #fab1a0, #ff85a2)" },
  { name: "Cozy Plant Sanctuary", category: "Aesthetic Room Greenery", url: "https://pinterest.com", color: "rgba(85, 239, 196, 0.35)", gradient: "linear-gradient(135deg, #55efc4, #81ecec)" }
];

let preppyGreetings = [
  "✨ Stay positive, work hard, and make it happen today! ✨",
  "🎀 Welcome back to your beautiful aesthetic space! 🎀",
  "🌸 Your desk setup is fully loaded and ready for fun! 🌸",
  "⭐ Keep shining bright and coding incredible designs! ⭐"
];

// Generates a random fun text decoration greeting when the site page loads!
window.onload = function() {
  let randomIndex = Math.floor(Math.random() * preppyGreetings.length);
  document.getElementById("greeting-text").textContent = preppyGreetings[randomIndex];
};

// Master Click Function
function clickOnDeskItem(itemName) {
  // SPECIAL TELEPORTATION LOGIC FOR THE NOTEBOOK
  if (itemName === "innerFrench") {
    // Instantly routes the browser window inside your custom high-quality games directory!
    window.location.href = "games/index.html";
    return; // Stops running the rest of the function!
  }

  let selectedObject;

  // Conditional matching statements
  if (itemName === "YouTube") { selectedObject = customDeskAssets[0]; }
  else if (itemName === "Gmail") { selectedObject = customDeskAssets[2]; }
  else if (itemName === "Spotify") { selectedObject = customDeskAssets[3]; }
  else if (itemName === "Sora") { selectedObject = customDeskAssets[4]; }
  else { selectedObject = customDeskAssets[5]; } // Default to plant

  // Target HTML elements to update text contents
  document.getElementById("portal-title").textContent = "✨ Active: " + selectedObject.name;
  document.getElementById("portal-desc").textContent = "Opening pipeline channels inside your " + selectedObject.category + ". Click below to launch.";
  
  let launchButton = document.getElementById("portal-link");
  launchButton.href = selectedObject.url;
  launchButton.style.display = "inline-block";

  // Change layout styling and background hex variables dynamically!
  document.getElementById("glass-card").style.background = selectedObject.color;
  document.body.style.background = selectedObject.gradient;
}
