gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 10, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});



// LETTER-CIPHER
(function () {
  "use strict";

  const links = document.querySelectorAll("h2.cipher, h1.cipher");
  const solveMilliseconds = 80;
  const charactersSelectionMilliseconds = 400;
  const delayMilliseconds = 20;
  const characters = [..."!@#$%^&*"];

  const randomArrayElement = (arr) => {
    return arr[(arr.length * Math.random()) | 0];
  };

  links.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      const element = e.target;
      scrambleText(element);
      e.preventDefault();
    });
  });

  function scrambleText(element) {
    if (element.classList.contains("active") == false) {
      let delay = 10;
      const elementText = element.innerText;
      const elementCharacters = [...elementText];
      const lockMilliseconds =
        delayMilliseconds * elementCharacters.length + solveMilliseconds;

      element.classList.add("active");

      setTimeout(() => {
        element.classList.remove("active");
      }, lockMilliseconds);

      elementCharacters.forEach((charcter, index) => {
        setTimeout(
          () => {
            let interValid = setInterval(() => {
              const randomCharacter = randomArrayElement(characters);
              element.innerText = replaceCharcter(
                element.innerText,
                index,
                randomCharacter
              );

              setTimeout(() => {
                clearInterval(interValid);
                element.innerText = replaceCharcter(
                  element.innerText,
                  index,
                  elementCharacters[index]
                );
              }, solveMilliseconds);
            }, charactersSelectionMilliseconds);
          },
          delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
        );
      });
    }
  }

  function replaceCharcter(str, index, chr) {
    return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  }
})();

// Text-Scramble-Effect
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
      // Add a default value for char
      const char = this.randomChar();
      this.queue.push({ from, to, start, end, char });
    }
    cancelAnimationFrame(this.frameRequest);
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

const phrases = ["CREATIVE DEVELOPER ;) ", "WEB-DESIGNER ;)", "3D-DESIGNER ;)", "VIDEO-EDITOR ;)"];

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

// Case Study 1
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
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

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
  }
});



