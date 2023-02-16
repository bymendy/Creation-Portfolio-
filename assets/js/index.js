const scroll = new LocomotiveScroll({
    
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {smooth: true},
    smartphone: {smooth:true},
});

// Body color
scroll.on("scroll", () => {
    if (document.querySelector("#color.is-inview")) {
        document.body.style.background = "#E4B344";
        document.body.style.color = "#fefeff";
    } else {
        document.body.style.background = "#fefeff";
        document.body.style.color = "#E4B344";
    }
});