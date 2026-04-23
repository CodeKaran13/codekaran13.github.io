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

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function updateActiveNav()
{
  let current = "";

  sections.forEach(section =>
  {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    )
    {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link =>
  {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`)
    {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

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
