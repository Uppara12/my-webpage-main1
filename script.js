let deferredPrompt;

window.addEventListener("beforeinstallprompt", async (e) => {

  // Prevent mini infobar
  e.preventDefault();

  console.log("beforeinstallprompt triggered");

  // Save event
  deferredPrompt = e;

  if (deferredPrompt) {

    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    console.log("User Choice:", result.outcome);

    deferredPrompt = null;
  }

});