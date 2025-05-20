
const menuBtn = document.querySelector("#menuBtn");
const mobileNav = document.querySelector("#mobileNav")
const menuIcon = document.querySelector("#menuIcon")

 let isOpen = false;



menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
  mobileNav.classList.remove("hidden", "animate-slide-out-right");
  mobileNav.classList.add("animate-slide-in-right");
  menuIcon.classList.replace("fa-bars", "fa-xmark");
} else {
  mobileNav.classList.remove("animate-slide-in-right");
  mobileNav.classList.add("animate-slide-out-right");

  // Verzögertes Ausblenden nach Animation
  setTimeout(() => {
    mobileNav.classList.add("hidden");
  }, 400);

  menuIcon.classList.replace("fa-xmark", "fa-bars");
}

})

document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('darkModeToggle');
      const icon = document.getElementById('darkModeIcon');
      const html = document.documentElement;

      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        icon.textContent = '☀️';
      }

      toggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        icon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    });
