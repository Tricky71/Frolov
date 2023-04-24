$(function() {
  
  // Navigation & menu icon
	let navToggle = document.querySelector('.menu-toggle');
	let navig = document.querySelector('.navigation');

	navToggle.onclick = function() {
		navToggle.classList.toggle('menu-toggle--active');
		navig.classList.toggle('navigation--active');
	};

  // Slick slider
	$(".about__slider").slick({
   autoplay: true,
	 arrows: false,
	 dots: true
	});

});
