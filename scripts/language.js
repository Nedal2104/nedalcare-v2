
document.getElementById("language-selector").addEventListener("change", function() {
  const lang = this.value;
  const translations = {
    en: {
      title: "Welcome to NedalCare v2",
      hero: "Your trusted medical platform – Version 2",
      assistant: "Hi, I’m your assistant in version 2."
    },
    he: {
      title: "ברוכים הבאים ל־NedalCare גרסה 2",
      hero: "הפלטפורמה הרפואית המהימנה שלך – גרסה 2",
      assistant: "שלום, אני כאן כדי לעזור – גרסה 2"
    }
  };
  document.getElementById("site-title").innerText = translations[lang].title;
  document.getElementById("hero-text").innerText = translations[lang].hero;
  document.getElementById("assistant-text").innerText = translations[lang].assistant;
});
