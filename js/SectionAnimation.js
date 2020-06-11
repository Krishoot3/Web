var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.secHomeCont'
})
.setClassToggle('.secHomeCont', 'show')
.addTo(controller);


var scene2 = new ScrollMagic.Scene({
    triggerElement: '.sectionAbout'
})
.setClassToggle('.sectionAbout', 'show')
.addTo(controller);
