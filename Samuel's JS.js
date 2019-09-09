var myNav = document.getElementById("navbar");
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-big");
        myNav.classList.remove("nav-small");
    } 
    else {
        myNav.classList.add("nav-small");
        myNav.classList.remove("nav-big");
    }
};