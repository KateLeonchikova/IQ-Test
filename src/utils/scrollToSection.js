export function scrollToSection(sectionId) {
  const targetSection = document.querySelector(sectionId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
