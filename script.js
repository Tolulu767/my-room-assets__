// Array of Objects capturing launcher links & properties
let customDeskAssets = [
  { name: "YouTube Mainframe", category: "Entertainment Desk Screen", url: "https://youtube.com" },
  { name: "innerFrench Diary", category: "Language Study Notepad", url: "https://innerfrench.com" },
  { name: "Gmail Station", category: "Mail Tablet Workstation", url: "https://google.com" },
  { name: "Spotify Stereo", category: "Music Desk Headphones", url: "https://spotify.com" },
  { name: "Sora Library Portal", category: "School Reading Stack", url: "https://soraapp.com" }
];

// Master Click Function
function clickOnDeskItem(itemName) {
  let selectedObject;

  // Conditional evaluation logic using your if/else notes
  if (itemName === "YouTube") {
    selectedObject = customDeskAssets[0]; // Index 0
  } else if (itemName === "innerFrench") {
    selectedObject = customDeskAssets[1]; // Index 1
  } else if (itemName === "Gmail") {
    selectedObject = customDeskAssets[2]; // Index 2
  } else if (itemName === "Spotify") {
    selectedObject = customDeskAssets[3]; // Index 3
  } else {
    selectedObject = customDeskAssets[4]; // Index 4 (Sora Books)
  }

  // Get elements from the HTML by their exact IDs
  let cardTitle = document.getElementById("portal-title");
  let cardDesc = document.getElementById("portal-desc");
  let launchButton = document.getElementById("portal-link");

  // String concatenation updates the screen text smoothly
  cardTitle.textContent = "✨ App Active: " + selectedObject.name;
  cardDesc.textContent = "Booting connection pipelines for your " + selectedObject.category + ". Click below to launch.";
  
  // Update the link destination asset and display the button
  launchButton.href = selectedObject.url;
  launchButton.style.display = "inline-block";
}
