document.getElementById("solve").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "solveCaptcha" }, (response) => {
      console.log("CAPTCHA status:", response.status);
    });
  });
});
