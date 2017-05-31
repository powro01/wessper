const slider = new Siema({
    loop: true
});

var navigation = $('#navigation');
var menuTrigger = $('#menuTrigger');
var prevSlide = $('#prevSlide');
var nextSlide = $('#nextSlide');
var collapse = $('#collapse');
var collapseList = $('.collapse');

menuTrigger.on('click', function(e) {
    e.preventDefault();
    navigation.toggleClass('open');
});

prevSlide.on('click', function() {
    slider.prev();
});

nextSlide.on('click', function() {
    slider.next();
});

collapse.on('click', function(e) {
    e.preventDefault();
    collapseList.slideToggle();
})

setInterval(function() {
    slider.next();
}, 7000);

$('a').on('click', function(e) {
    e.preventDefault();
})