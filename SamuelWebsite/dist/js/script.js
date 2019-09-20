/* var myNav = document.getElementById("navbar");
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
}; */


function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    function animation(currentTime){
        if(startTime === null) {
            startTime === currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run) //0 first because that is x axis.
            if(timeElapsed < duration) requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) { //you can copy and paste this acceleration from gizma ease
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation); //Loops through our animation function at 60fps

};

/*
var home = document.querySelector('#target-home');
var about = document.querySelector('#target-about');
var contact = document.querySelector('#target-contact');

home.addEventListener('click', function(){
    smoothScroll('.home', 100);
}) 
about.addEventListener('click', function(){
    smoothScroll('.about', 100);
}) 
contact.addEventListener('click', function(){
    smoothScroll('.contact', 100);
}) 
*/
