const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector("[data-header]");

const updateMenuButton = (isOpen) => {
  if (!menuButton) return;
  const label = isOpen ? "Close navigation" : "Open navigation";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", window.portfolioI18n?.translateAttribute(label) || label);
  menuButton.textContent = isOpen ? "×" : "☰";
};

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    updateMenuButton(isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      updateMenuButton(false);
      document.body.classList.remove("menu-open");
    });
  });

  document.addEventListener("portfolio-language-change", () => {
    updateMenuButton(navLinks.classList.contains("open"));
  });
}

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
