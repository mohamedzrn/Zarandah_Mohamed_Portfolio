(function () {
  "use strict";

  const links = document.querySelectorAll("h2.cipher, h1.cipher");
  const solveMilliseconds = 80;
  const charactersSelectionMilliseconds = 400;
  const delayMilliseconds = 20;
  const characters = [..."!@#$%^&*"];

  const randomArrayElement = (arr) => arr[(arr.length * Math.random()) | 0];

  links.forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
          scrambleText(e.target);
          e.preventDefault();
      });
  });

  function scrambleText(element) {
      if (!element.classList.contains("active")) {
          let delay = 10;
          const elementText = element.innerText;
          const elementCharacters = [...elementText];
          const lockMilliseconds = delayMilliseconds * elementCharacters.length + solveMilliseconds;

          element.classList.add("active");

          setTimeout(() => {
              element.classList.remove("active");
          }, lockMilliseconds);

          elementCharacters.forEach((character, index) => {
              setTimeout(() => {
                  let interValid = setInterval(() => {
                      const randomCharacter = randomArrayElement(characters);
                      element.innerText = replaceCharacter(element.innerText, index, randomCharacter);

                      setTimeout(() => {
                          clearInterval(interValid);
                          element.innerText = replaceCharacter(element.innerText, index, elementCharacters[index]);
                      }, solveMilliseconds);
                  }, charactersSelectionMilliseconds);
              }, delay === 0 ? (delay += 1) : (delay += delayMilliseconds));
          });
      }
  }

  function replaceCharacter(str, index, chr) {
      return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  }
})();

class TextScramble {
  constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
  }

  setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 20);
          const end = start + Math.floor(Math.random() * 20);
          const char = this.randomChar();
          this.queue.push({ from, to, start, end, char });
      }
      if (this.frameRequest) {
          cancelAnimationFrame(this.frameRequest);
      }
      this.frame = 0;
      this.update();
      return promise;
  }

  update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
              complete++;
              output += to;
          } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                  char = this.randomChar();
                  this.queue[i].char = char;
              }
              output += `<span class="dud">${char}</span>`;
          } else {
              output += from;
          }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
          this.resolve();
      } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
      }
  }

  randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = ["CREATIVE DEVELOPER ;)", "WEB-DESIGNER ;)", "3D-DESIGNER ;)", "VIDEO-EDITOR ;)"];
const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1222);
  });
  counter = (counter + 1) % phrases.length;
};

next();

const gallery = document.querySelector('.gallery');
if (gallery) {
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    if (nextButton) nextButton.addEventListener('click', nextImage);
    if (prevButton) prevButton.addEventListener('click', prevImage);
}