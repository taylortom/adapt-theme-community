define(function(require) {

	// toggle nav styling on scroll
	$(document).scroll(function(event) {
		var triggerAmount = $('.navigation').height()*1.5;
		if($(event.currentTarget).scrollTop() > triggerAmount) {
			$('.navigation').addClass('white');
		} else {
			$('.navigation').removeClass('white');
		}
	});
});
