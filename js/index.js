const title = document.querySelector(".title");

// Teks yang ingin ditampilkan
const text = "Halo, a gift 4 u";

// Kosongkan isi title
title.innerHTML = "";

// Pisahkan berdasarkan kata
const words = text.split(" ");

words.forEach((word, wordIndex) => {
  // Container untuk satu kata
  const wordSpan = document.createElement("span");
  wordSpan.classList.add("word");

  // Pecah setiap huruf
  [...word].forEach(letter => {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = letter;

    // Delay animasi random
    letterSpan.style.animationDelay = `${Math.random() * 3}s`;

    wordSpan.appendChild(letterSpan);
  });

  title.appendChild(wordSpan);

  // Tambahkan spasi antar kata (kecuali kata terakhir)
  if (wordIndex !== words.length - 1) {
    title.appendChild(document.createTextNode(" "));
  }
});
