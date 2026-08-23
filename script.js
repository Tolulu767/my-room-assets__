let customDeskAssets = [
  { name: "YouTube Mainframe", category: "Entertainment Screen", url: "https://youtube.com", color: "rgba(255, 118, 117, 0.35)", gradient: "linear-gradient(135deg, #ff7675, #ff85a2)" },
  { name: "innerFrench Diary", category: "Study Notepad", url: "https://innerfrench.com", color: "rgba(253, 121, 168, 0.35)", gradient: "linear-gradient(135deg, #fd79a8, #a29bfe)" },
  { name: "Gmail Station", category: "Mail Tablet Workstation", url: "https://google.com", color: "rgba(255, 190, 118, 0.35)", gradient: "linear-gradient(135deg, #ffbe76, #ffeaa7)" },
  { name: "Spotify Stereo", category: "Desk Headphones", url: "https://spotify.com", color: "rgba(162, 155, 254, 0.35)", gradient: "linear-gradient(135deg, #a29bfe, #74b9ff)" },
  { name: "Sora Library Portal", category: "Reading Stack", url: "https://soraapp.com", color: "rgba(250, 177, 160, 0.35)", gradient: "linear-gradient(135deg, #fab1a0, #ff85a2)" },
  { name: "Cozy Plant Sanctuary", category: "Aesthetic Greenery", url: "https://pinterest.com", color: "rgba(85, 239, 196, 0.35)", gradient: "linear-gradient(135deg, #55efc4, #81ecec)" }
];

function clickOnDeskItem(itemName) {
  let selectedObject;

  if (itemName === "YouTube") selectedObject = customDeskAssets[0];
  else if (itemName === "innerFrench") selectedObject = customDeskAssets[1];
  else if (itemName === "Gmail") selectedObject = customDeskAssets[2];
  else if (itemName === "Spotify") selectedObject = customDeskAssets[3];
  else if (itemName === "Sora") selectedObject = customDeskAssets[4];
  else selectedObject = customDeskAssets[5];

  document.getElementById("portal-title").textContent = "✨ Active: " + selectedObject.name;
  document.getElementById("portal-desc").textContent = "Opening pipeline channels inside your " + selectedObject.category + ".";
  
  let launchButton = document.getElementById("portal-link");
  launchButton.href = selectedObject.url;
  launchButton.style.display = "inline-block";

  document.getElementById("glass-card").style.background = selectedObject.color;
  document.body.style.background = selectedObject.gradient;
}
