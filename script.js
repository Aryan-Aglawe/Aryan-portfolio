const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const links = document.querySelectorAll('.nav-link');
menuButton.addEventListener('click', () => { const isOpen = header.classList.toggle('open'); menuButton.setAttribute('aria-expanded', isOpen); menuButton.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`; });
links.forEach((link) => link.addEventListener('click', () => { header.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; }));
document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') document.body.classList.add('light-theme');

function updateThemeButton() {
  const isLight = document.body.classList.contains('light-theme');
  themeToggle.setAttribute('aria-pressed', isLight);
  themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
  themeToggle.innerHTML = `<i class="fa-solid fa-${isLight ? 'moon' : 'sun'}"></i><span>${isLight ? 'Dark' : 'Light'}</span>`;
}

updateThemeButton();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeButton();
});

const pcProjectNote = document.querySelector('.project-note');
if (pcProjectNote) {
  pcProjectNote.outerHTML = '<div class="project-links"><a href="https://github.com/Aryan-Aglawe/ecommerce" target="_blank" rel="noreferrer">View source <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a href="https://github.com/Aryan-Aglawe/ecommerce" target="_blank" rel="noreferrer" aria-label="PC Component Store source code"><i class="fa-brands fa-github"></i></a></div>';
}
