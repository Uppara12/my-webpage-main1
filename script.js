let deferredPrompt;

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

// Save install event
window.addEventListener("beforeinstallprompt", (e) => {

  e.preventDefault();

  deferredPrompt = e;

  // Show custom popup automatically
  const installNow = confirm("Install this app?");

  if (installNow) {

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {

      if (choiceResult.outcome === "accepted") {
        console.log("User accepted install");
      } else {
        console.log("User dismissed install");
      }

      deferredPrompt = null;

    });

  }

});