// Template loader with absolute paths
async function loadTemplate(id, templatePath) {
  try {
    const response = await fetch(templatePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const html = await response.text();
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading template: ${templatePath}`, error);
  }
}

export async function loadLayoutTemplates() {
  await Promise.all([
    loadTemplate("header", "/layouts/header.html"),
    loadTemplate("footer", "/layouts/footer.html"),
  ]);

  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = String(new Date().getFullYear());
  }
}
