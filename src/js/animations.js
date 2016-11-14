
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
