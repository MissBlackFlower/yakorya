$(document).ready(function() {

	var popup = $(".js-popup"),
			popupWrap = $(".js-popup-in"),
			btnClose = $(".js-close"),
			btnCall = $(".js-popup-call"),
			popupCall = $(".js-call"),
			btnOffer = $(".js-popup-offer"),
			popupOffer = $(".js-offer"),
			btnDone = $(".js-popup-done"),
			popupDone = $(".js-done"),
			btnCam = $(".js-popup-cam"),
			popupCam = $(".js-cam");

	var initPopup = function (btn, content) {
		btn.on('click', function(e) {
			if (content.length) {
				$("body").append('<div class="popup js-popup">'
													+'<div class="popup__in">'
													+'<div class="popup__content js-popup-in">'
													+'<button class="popup__close js-close" type="button" name="close"></button>'
													+'</div></div></div>');
				content.clone().appendTo($(".js-popup-in"));
			}
		});
	};

	initPopup(btnCall, popupCall);
	initPopup(btnOffer, popupOffer);
	initPopup(btnDone, popupDone);
	initPopup(btnCam, popupCam);

	var gallery = $(".js-gallery"),
			photo = $(".js-photo");
	var initGallery = function (wrap, img) {
			if (img.attr("href")) {
					$("body").append('<div class="popup-gallery"><div class="popup-wrap"><img src="'+img.attr("href")+'" class="popup-img"/></div></div>')
			}
	};

	photo.click( function(e) {
			e.preventDefault();
			initGallery( gallery, $(this) );
	});
	$(document).on('click', function(e) {
		if ($(e.target).closest('.popup-gallery').length > 0 && $(e.target).closest('.popup-img').length == 0) {
			$('.popup-gallery').detach();
		}
	});

	var tab = $('.js-tab-btn'),
			tabBl = $('.js-tab-content'),
			tabLink = $('.js-tab-link');

	HideShow(tabBl, tabBl.first(), tab, tab.first() );

	tab.on('click', function() {
		var blActive = tabBl.filter('[data-tab="' + $(this).data("tab") + '"]');
		if (blActive.length) {
			HideShow(tabBl, blActive, tab, $(this) );
		}
	});

	tabLink.on('click', function(e) {
		var blActive = tabBl.filter('[data-tab="' + $(this).data("tab") + '"]');
		var tabActive = tab.filter('[data-tab="' + $(this).data("tab") + '"]');
		if (blActive.length) {
			HideShow(tabBl, blActive, tab, tabActive );
		}
		e.preventDefault();
	});

	function HideShow(allBl, blActive, allTab, tabActive) {
			allTab.removeClass('is-active');
			allBl.hide();
			tabActive.addClass('is-active');
			blActive.fadeIn();
	};

	var menu = $('.js-menu'),
			btnMenu = $('.js-btn-menu');

	btnMenu.on('click', function(e) {
		menu.toggleClass('is-visible');
		e.preventDefault();
	});



	// init controller

	var controller = new ScrollMagic.Controller();



		// build scenes

		new ScrollMagic.Scene({triggerElement: "#advantages"}).setClassToggle("#link1", "is-active").addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#gallery"}).setClassToggle("#link2", "is-active").addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#plan"}).setClassToggle("#link3", "is-active").addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#map"}).setClassToggle("#link4", "is-active").addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#about"}).setClassToggle("#link5", "is-active").addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#footer"}).setClassToggle("#link6", "is-active").addTo(controller);





		$("#link1").on('click', { id: '#advantages' }, scroller);

		$("#link2").on('click', { id: '#gallery' }, scroller);

		$("#link3").on('click', { id: '#plan' }, scroller);

		$("#link4").on('click', { id: '#map' }, scroller);

		$("#link5").on('click', { id: '#about' }, scroller);

		$("#link6").on('click', { id: '#footer' }, scroller);



		function scroller(event){

			var scrollYPos = $(event.data.id).offset().top;

			event.preventDefault();

			TweenLite.to(window, 2, {scrollTo:{y:scrollYPos-120, x:0}, ease:Power4.easeOut})

		};



		var bunner = TweenLite.from($(".banner__txt"), 2, {opacity:0, top:"-500px"});

		var facts = TweenMax.staggerFrom($(".animate-info"), 1, {opacity:0, left:"500px"}, 0.2);

		var about = TweenMax.staggerFrom($(".animate-about"), 1, {opacity:0, left:"500px"}, 0.2);



		new ScrollMagic.Scene({triggerElement: ".info", offset: -200})

				.setTween(facts)

				.addTo(controller);

		new ScrollMagic.Scene({triggerElement: ".about", duration: 0, offset: 0})

				.setTween(about)

				.addTo(controller);



	initMap();
});
