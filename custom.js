var tl = new TimelineMax({});

// Section One
tl.to('.img-wrapper', 1.5, { ease: Circ.easeOut, y: 0 });
tl.to('.hero-title-one', 1.5, { ease: Circ.easeOut, y: 0 }, "-=1");
tl.to('.hero-title-two', 1.5, { ease: Circ.easeOut, x: 0 }, "-=.5");
tl.to('#slide2', .5, { scale: 1, opacity: 1, ease: Power4.easeIn, x: 0 }, "-=.5");

document.getElementById('slide2').addEventListener('click', function(){
    tl.to('.img-wrapper', 2, { opacity: 0, ease: Circ.easeOut, x: -2000 });
    tl.to('.hero-title-one', 1.5, { opacity: 0,ease: Circ.easeOut, y: -1000 }, "-=1.5");
    tl.to('.hero-title-two', 1.5, { opacity: 0, ease: Circ.easeOut, x: -1000 }, "-=1");
    tl.to('#slide2', .5, { scale: 0, opacity: 0, ease: Power4.easeIn, x: 0 }, "-=1.5");
    tl.set("#one", {opacity: 0, display:"none"});
});
 