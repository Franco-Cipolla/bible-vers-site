
const versContainer = document.getElementById('verses');
const versButton = document.getElementById('randomVerseButton');
const menuBtn = document.querySelector("#menuBtn");
const mobileNav = document.querySelector("#mobileNav")
const menuIcon = document.querySelector("#menuIcon")
const container = document.querySelector("#verses")
const resetBtn = document.querySelector("#reset")

let isOpen = false;
const imgSrces = ["img/BG-Card.jpg","img/BG-Card-2.jpg","img/BG-Card-3.jpg","img/BG-Card-4.jpg"];

const randomImg = () => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  if (randNum <= 2) {
    return imgSrces[0];
  } else if (randNum <= 5) {
    return imgSrces[1];
  } else if (randNum <= 7) {
    return imgSrces[2];
  } else {
    return imgSrces[3];
  }
}


menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
  mobileNav.classList.remove("hidden", "animate-slide-out-right");
  mobileNav.classList.add("animate-slide-in-right");
  menuIcon.classList.replace("fa-bars", "fa-xmark");
} else {
  mobileNav.classList.remove("animate-slide-in-right");
  mobileNav.classList.add("animate-slide-out-right");

  setTimeout(() => {
    mobileNav.classList.add("hidden");
  }, 400);

  menuIcon.classList.replace("fa-xmark", "fa-bars");
}

})

const getRandomBibleVerse = async () => {
  try {
    const response = await axios.get('https://bolls.life/get-random-verse/YLT/', {


    });
    const verse = response.data.text ;
    const book = response.data.book ;
    const chapter = response.data.chapter

    const newDiv = document.createElement("div");
    const textGroup = document.createElement("div")
    const newImg = document.createElement("img");
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    newImg.src = randomImg();
    newImg.alt = "Img";
    newP.textContent = verse;
    newH2.textContent = `Chapter ${chapter} of book ${book}`;
    newDiv.classList.add("flex", "flex-col", "gap-2", "rounded-lg", "shadow-2xl", "bg-white", "overflow-hidden","dark:bg-gray-800", "md:max-w-3xl", "h-full");
    newImg.classList.add("object-cover","w-full","max-h-52")
    textGroup.classList.add("px-5", "py-2.5", "flex", "flex-col", "gap-2");
    newH2.classList.add("text-xl","font-bold");
    newP.classList.add("font-semibold");
    textGroup.append(newH2,newP);
    newDiv.append(newImg,textGroup);
    container.append(newDiv)
  } catch (error) {
    console.error('Fehler beim Abrufen des Verses:', error);
  }
};


versButton.addEventListener('click', () => {
    getRandomBibleVerse();

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

const reset = () => {
  container.innerHTML = "";

}
resetBtn.addEventListener("click", () => {
    reset();
})

