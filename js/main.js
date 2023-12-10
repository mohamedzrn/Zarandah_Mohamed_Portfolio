// nav-menu
(function () {
  "use strict";

  console.log("fired");

  let button = document.querySelector("#hamburger");
  let burgerCon = document.querySelector("#burger-con");

  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  }

  button.addEventListener("click", hamburgerMenu, false);
})();

// LETTER-CIPHER
(function () {
  "use strict";

  const links = document.querySelectorAll("p.cipher, a.cipher");
  const solveMilliseconds = 80;
  const charactersSelectionMilliseconds = 400;
  const delayMilliseconds = 25;
  const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXUZ1234567890*#@/*!%&^"];

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

//PARTICLE-ANIMATOR

let canvas = document.querySelector(".background-animation");
let ctx = canvas.getContext("2d");

function radian(deg) {
  return (deg * Math.PI) / 180;
}

function makeCanvasFullscreen() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

makeCanvasFullscreen();

window.addEventListener("resize", () => {
  makeCanvasFullscreen();
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let maxPnChange = 20;

class Circle {
  constructor(r, thickness) {
    this.r = r;
    this.thickness = thickness;
    this.points = [];
    this.makePoints();
  }

  makePoints() {
    this.points = [];

    for (let i = 0; i < 360; i += 0.5) {
      let deg = radian(i);
      let xChange = Math.sin(deg) * this.r;
      let yChange = Math.cos(deg) * this.r;

      this.points.push({
        deg: deg,
        r: this.r,
        xChange: xChange,
        yChange: yChange,
        xPn: 0,
        yPn: 0,
        mouse: {
          x: 0,
          y: 0,
        },
      });
    }

    return this.points;
  }

  updatePoints(rotate = 0.06) {
    this.points.forEach((point, index) => {
      point.deg += rotate;

      point.xChange = Math.sin(point.deg) * point.r;
      point.yChange = Math.cos(point.deg) * point.r;

      point.xPn += Math.random() * 2 - 1;
      point.yPn += Math.random() * 2 - 1;

      point.xPn = Math.max(Math.min(point.xPn, maxPnChange), -maxPnChange);
      point.yPn = Math.max(Math.min(point.yPn, maxPnChange), -maxPnChange);

      this.points[index] = point;
    });
  }

  draw(color = "#885a5a") {
    clearCanvas();

    this.points.forEach((point) => {
      ctx.beginPath();
      ctx.fillStyle = color;
      let x = point.mouse.x + point.xChange + point.xPn;
      let y = point.mouse.y + point.yChange + point.yPn;
      ctx.arc(x, y, this.thickness, 2 * Math.PI, false);
      ctx.fill();
      ctx.closePath();
    });
  }
}

shape = new Circle(80, 1.4);

document.body.onmousemove = (e) => {
  let mouse = {
    x: e.clientX,
    y: e.clientY,
  };

  shape.points.forEach((point, index) => {
    setTimeout(() => {
      shape.points[index].mouse = mouse;
    }, (point.yPn + point.xPn + maxPnChange * 2) * 15);
  });
};

setInterval(() => {
  shape.draw();
  shape.updatePoints();
}, 20);

//Text-Scramble-Effect
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
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
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

const phrases = ["FUTURE TO BE,", "CREATIVE DEVELOPER ;)"];

const el = document.querySelector(".text");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();
