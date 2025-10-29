function login() {
  document.getElementById("login-screen").classList.remove("active");
  document.getElementById("main-screen").classList.add("active");
  showScreen("chat");
}

function showScreen(screen) {
  const content = document.getElementById("content");
  switch (screen) {
    case "chat":
      content.innerHTML = `
        <h2>Chats</h2>
        <div>Bob: I am doing great! <span>8:53</span></div>
        <div>Charlie: Are you free for a call? <span>8:51</span></div>
        <div>Flutter Devs: Who wants to pair program? <span>6:55</span></div>
      `;
      break;
    case "calls":
      content.innerHTML = `
        <h2>Calls</h2>
        <div>Bob - Video Call - 15m ✅</div>
        <div>Charlie - Audio Call - 8m ❌</div>
      `;
      break;
    case "ai":
      content.innerHTML = `
        <h2>AI Chat</h2>
        <div>User: Tell me about Flutter widgets.</div>
        <div>AI: Flutter widgets are the building blocks of a Flutter app...</div>
      `;
      break;
    case "frastion":
      content.innerHTML = `
        <h2>Frastion</h2>
        <div>Bob: Check out my new design concept! 🐦</div>
        <div>Charlie: What do you think of this color palette? 🎨</div>
      `;
      break;
    case "profile":
      content.innerHTML = `
        <h2>Profile</h2>
        <div>Alice 🐦</div>
        <p>No public details</p>
        <button>Join or Create Group</button>
        <button>Privacy Settings</button>
      `;
      break;
  }
}
