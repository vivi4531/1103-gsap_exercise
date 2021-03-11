"use strict";
/* //EXERCISE 1
gsap.to(".ball", {x:400, duration: 2});
gsap.to(".ball", {rotate:200, duration: 2});
gsap.to(".ball", {scale:0, y:25, duration: 2, delay: 2}); */

//EXERCISE 3
const timeline = gsap.timeline();

timeline.to(".ball", {duration: 5, rotation: 360, x:400});
timeline.to(".ball", {duration: 4, x:"100vw", y:"-100vh"});
timeline.to(".ball", {duration: 8, x:0, y:0});