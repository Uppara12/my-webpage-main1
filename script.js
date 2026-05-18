let deferredPrompt;

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => {
        console.log("Service Worker Registered", reg);
      })
      .catch((err) => {
        console.log("Service Worker Registration Failed", err);
      });
  });
}

// Install Prompt
window.addEventListener("beforeinstallprompt", async (e) => {

  // Prevent automatic mini infobar
  e.preventDefault();

  // Save event
  deferredPrompt = e;

  // Show install popup automatically
  if (deferredPrompt) {

    deferredPrompt.prompt();

    // Wait for user choice
    const result = await deferredPrompt.userChoice;

    console.log("User choice:", result.outcome);

    deferredPrompt = null;
  }

});