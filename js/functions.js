define(function(require) {
	// toggle nav styling on scroll
	$(document).scroll(function(event) {
		var triggerAmount = $('.navigation').height()*1.5;
		$('.navigation').toggleClass('white', $(event.currentTarget).scrollTop() > triggerAmount);
	});
});
