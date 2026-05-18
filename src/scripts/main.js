import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { loadLayoutTemplates } from "/scripts/modules/template-loader.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadLayoutTemplates();
});
