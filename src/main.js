import App from "./component/app.svelte";

window.addEventListener("error", () => {
  location.href = "/sorry.html";
}, false);

const $app = document.getElementById("jsApp");
const appType = $app.getAttribute("data-app-type");

if (appType !== "boy" && appType !== "girl") {
  throw new Error(`Undefined appType: ${appType}`);
}

$app.innerHTML = "";
new App({
  target: $app,
  props: { appType },
});

// TODO: ServiceWorker
