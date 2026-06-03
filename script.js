const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const updateActiveNav = () => {
  const current = sections
    .map((section) => ({
      id: section.id,
      top: section.getBoundingClientRect().top,
    }))
    .filter((item) => item.top < 160)
    .pop();

  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
  });
};

window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveNav();
});

updateHeader();
updateActiveNav();
