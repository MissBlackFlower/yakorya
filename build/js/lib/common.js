$(document).ready(function() {
	initMap();

	var gallery = $(".js-gallery"),
			photo = $(".js-photo");

	photo.on('click', function(e) {
		initGallery( gallery, $(this) );
		e.stopPropagation();
	});

	var initGallery = function (wrap, img) {
			if (img.attr("href")) {
					wrap.after($('<div></div>')
					.addClass('popup-gallery')
					.html('<img src="'+img.attr("href")+'" />')
					);

			}
	};
});
