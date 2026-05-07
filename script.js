let deferredPrompt;

window.addEventListener("beforeinstallprompt", async (e) => {

  // Stop automatic mini infobar
  e.preventDefault();

  // Save the event
  deferredPrompt = e;

  // Wait 1 second after landing page opens
  setTimeout(async () => {

    if (!deferredPrompt) return;

    // Show install popup
    deferredPrompt.prompt();

    // Wait for user choice
    const choice = await deferredPrompt.userChoice;

    console.log("Install result:", choice.outcome);

    // Clear saved event
    deferredPrompt = null;

  }, 1000);

});