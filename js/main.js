// nav-menu
(function(){
    "use strict";

    console.log("fired");

    let button = document.querySelector("#hamburger");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burgerCon.classList.toggle("slide-toggle");
        button.classList.toggle("expanded");
    };

    button.addEventListener("click", hamburgerMenu, false);

})();

window.onload = function() {
    const links = document.querySelectorAll("h1.cipher");
    const solveMilliseconds = 800;
    const charactersSelectionMilliseconds = 140;
    const delayMilliseconds = 250;
    const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXUZ1234567890*#@/*!%&^"]

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
            let delay = 0;
            const elementText = element.innerText;
            const elementCharacters = [...elementText];
            const lockMilliseconds = delayMilliseconds * elementCharacters.length + solveMilliseconds;

            element.classList.add("active");

            setTimeout(() => {
                element.classList.remove("active");
            }, lockMilliseconds);

            elementCharacters.forEach((charcter, index) => {
                setTimeout(() => {
                    let interValid = setInterval(() => {
                        const randomCharacter = randomArrayElement(characters);
                        element.innerText = replaceCharcter(
                            element.innerText,
                            index,
                            randomCharacter
                        );

                        setTimeout (() => {
                            clearInterval(interValid);
                            element.innerText = replaceCharcter(
                                element.innerText,
                                index,
                                elementCharacters[index]
                            );
                        }, solveMilliseconds);
                    }, charactersSelectionMilliseconds);
            }, delay === 0 ? (delay += 1) : (delay += delayMilliseconds))
        });
    }
}

function replaceCharcter(str, index, chr) {
    return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
}
};