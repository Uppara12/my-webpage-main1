let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

  // Prevent mini infobar
  e.preventDefault();

  console.log("beforeinstallprompt triggered");

  // Save event
  deferredPrompt = e;

  // Auto popup after 2 seconds
  setTimeout(async () => {

    if (deferredPrompt) {

      deferredPrompt.prompt();

      const result = await deferredPrompt.userChoice;

      console.log("User Choice:", result.outcome);

      deferredPrompt = null;
    }

  }, 2000);

});