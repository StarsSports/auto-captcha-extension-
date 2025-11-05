chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "solveCaptcha") {
    const checkbox = document.querySelector("#fake-captcha-checkbox");
    const input = document.querySelector("#fake-captcha-answer");

    if (checkbox) checkbox.checked = true;
    if (input) input.value = "I am not a robot";

    sendResponse({ status: "solved" });
  }
});
