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

//=include animations.js

	initMap();
});
