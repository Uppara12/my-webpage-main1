let deferredPrompt;

window.addEventListener("beforeinstallprompt", async (e) => {

  // Stop default install mini-infobar
  e.preventDefault();

  // Save event
  deferredPrompt = e;

  // Immediately show install popup
  if (deferredPrompt) {

    deferredPrompt.prompt();

    // Wait for user action
    const result = await deferredPrompt.userChoice;

    console.log("User choice:", result.outcome);

    deferredPrompt = null;
  }

});