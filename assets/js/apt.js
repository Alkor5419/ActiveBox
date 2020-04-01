$(function(){


// Fixed Header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav= $("#nav");
let navToggle=$("#navToggle");

	checkScroll(scrollPos,introH);

	$(window).on("scroll resize", function(){
		let introH = intro.innerHeight();
		scrollPos=$(this).scrollTop();

		checkScroll(scrollPos,introH);
		
			
	});
function checkScroll(scrollPos,introH){
	if (scrollPos > introH){
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	};


// Smooth scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		nav.removeClass("show");

		$("html, body").animate({
			scrollTop:elementOffset - 50
		}, 700);
	});


// NAV TOGGLE

navToggle.on("click",function(event){
	event.preventDefault();
	nav.toggleClass("show");
});


// Reviews slick js
	let slider = $("#reviewsSlider");

	slider.slick({
  infinite: true, //бесконечность прокрутки
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true, //скрытие слайда
  arrows:false, //стрелки есть или нет
  dots:true //точки
});

});