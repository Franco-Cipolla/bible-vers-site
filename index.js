
const versContainer = document.getElementById('verses');
const versButton = document.getElementById('randomVerseButton');


const apiKey = "780c1be1b02c848df4783a69b5329593";

const getRandomBibleVerse = async () => {
  try {
    const response = await axios.get('https://bolls.life/get-random-verse/YLT/', {


    });
    console.log(response)
    console.log(response.data.text, response.data.book,response.data.chapter)
  } catch (error) {
    console.error('Fehler beim Abrufen des Verses:', error);
  }
};



versButton.addEventListener('click', () => {
    getRandomBibleVerse()

})

document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('darkModeToggle');
      const icon = document.getElementById('darkModeIcon');
      const html = document.documentElement;

      // Lade Darkmode-Status aus localStorage
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
