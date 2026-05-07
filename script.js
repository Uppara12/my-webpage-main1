let deferredPrompt;

// Capture install event
window.addEventListener("beforeinstallprompt", (e) => {

  // Prevent automatic mini infobar
  e.preventDefault();

  // Save event
  deferredPrompt = e;

  // Automatically trigger popup on landing page
  window.addEventListener("load", () => {

    setTimeout(async () => {

      if (!deferredPrompt) return;

      // Show install popup
      deferredPrompt.prompt();

      // Wait for user response
      const choice = await deferredPrompt.userChoice;

      console.log("Install result:", choice.outcome);

      // Clear prompt
      deferredPrompt = null;

    }, 1000);

  });

});