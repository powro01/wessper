new Siema();

var navigation = $('#navigation');
var menuTrigger = $('#menuTrigger');

menuTrigger.on('click', function(e) {
    e.preventDefault();
    navigation.toggleClass('open');
});