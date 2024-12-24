// Matnlarni yuklash funksiyasi
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
  
  // Foydalanuvchi tanlagan tilni saqlash
  function saveLanguage(lang) {
    localStorage.setItem('language', lang);
    loadLanguage(lang);
  }
  
  // Sahifa yuklanganda tilni yuklash
  document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('language') || 'en';
    loadLanguage(lang);
  });
  
  // Til tanlash tugmalari uchun hodisa
  document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      saveLanguage(lang);
    });
  });
  