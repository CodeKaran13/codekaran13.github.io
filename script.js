// PROJECT LINKS
function openProject(project)
{
  const links = {
    ecorun: "https://codekarangames.dev/projects/ecorun",
    yaaro: "https://codekarangames.dev/projects/yaaro-ki-rasoi",
    bullbash: "https://codekarangames.dev/projects/bullbash",
    tank: "https://codekarangames.dev/projects/tank-shooter"
  };

  window.open(links[project], "_blank");
}

// ACTIVE NAV HIGHLIGHT
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () =>
{
  let current = "";

  sections.forEach(section =>
  {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop)
    {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link =>
  {
    link.style.color = "#e5e7eb";
    if (link.getAttribute("href") === "#" + current)
    {
      link.style.color = "#22c55e";
    }
  });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) =>
{
  entries.forEach(entry =>
  {
    if (entry.isIntersecting)
    {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".fade-in").forEach(section =>
{
  observer.observe(section);
});

document.querySelectorAll(".card").forEach((card, index) =>
{
  setTimeout(() =>
  {
    card.classList.add("visible");
  }, index * 100);
});
