
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('semoga Mia senyum lagi!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

window.addEventListener('load', () => {
  const music = document.getElementById('bgMusic');
  music.play().catch(() => {
    document.addEventListener('click', () => {
      music.play();
    }, { once: true });
  });
});
