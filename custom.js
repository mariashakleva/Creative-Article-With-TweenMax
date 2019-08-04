var tl = new TimelineMax({});

document.addEventListener('DOMContentLoaded', function() {
    /// Section One
    tl.to('.img-wrapper', 1.5, { opacity: 1, ease: Circ.easeOut, x: 0 });
    tl.to('.hero-title-one', 1.5, { ease: Circ.easeOut, y: 0 }, "-=1");
    tl.to('.hero-title-two', 1.5, { ease: Circ.easeOut, x: 0 }, "-=.5");
    tl.to('#slide2', .5, { scale: 1, opacity: 1, ease: Power4.easeIn, x: 0 }, "-=.5");
 }, false);

document.getElementById('slide2').addEventListener('click', function(){
    tl.to('.img-wrapper', 2.2, { opacity: 0, ease: Circ.easeOut, x: -2000 });
    tl.to('.hero-title-one', 1.5, { opacity: 0,ease: Circ.easeOut, y: -1000 }, "-=1.85");
    tl.to('.hero-title-two', 1.5, { opacity: 0, ease: Circ.easeOut, x: -1000 }, "-=1.85");
    document.getElementById("slide2").classList.add('animate-how');
    tl.to('#slide2', .5, { scale: 4, opacity: 1, ease: Power4.easeIn, x: 120},  "-=1.95");
    tl.to('#slide2', .5, { opacity: 0, ease: Power4.easeIn});
    tl.set(".wrap", {opacity: 0, display:"none"});
    tl.set(".img-wrapper", {opacity: 0, display:"none"});
    tl.set(".quote", {opacity: 1, display:"flex"}, "-=1");
    tl.set("#one", {opacity: 0, delay: 8, display:"none"}, "-=1");
});
 