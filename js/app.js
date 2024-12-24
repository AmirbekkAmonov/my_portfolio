
document.querySelector('.dropdown-btn').addEventListener('click', function() {
  const switcher = document.querySelector('.language-switcher');
  switcher.classList.toggle('active'); 
});

document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', (e) => {
    const lang = e.target.getAttribute('data-lang');
    saveLanguage(lang); 
    document.querySelector('.language-switcher').classList.remove('active'); 
  });
});

function saveLanguage(lang) {
  localStorage.setItem('language', lang); 
  loadLanguage(lang); 
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('language') || 'en';
  loadLanguage(lang);
});

function loadLanguage(lang) {
  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });
    });
}
