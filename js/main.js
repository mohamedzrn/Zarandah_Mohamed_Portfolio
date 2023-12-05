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