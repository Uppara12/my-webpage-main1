let deferredPrompt;

// Capture install event
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Trigger install after first user interaction
  document.addEventListener("click", triggerInstall, { once: true });
});

async function triggerInstall() {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();

  const choice = await deferredPrompt.userChoice;
  console.log("Install result:", choice.outcome);

  deferredPrompt = null;
}