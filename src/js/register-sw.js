export function registerSW() {
  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("service-worker.js")
        .then((registration) => {
          console.log("Service worker registered!");
          console.log(registration);
        })
        .catch((err) => {
          console.log("Service worker not found!");
          console.log(err);
        });
    } else {
      console.log("Sorry, your browser does not support Service Worker");
    }
  });
}
