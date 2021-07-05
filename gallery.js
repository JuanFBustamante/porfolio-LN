// esta funcion se la vinculé al boton con el atributo onClick, en el html.
// onclick="showGallery()" Al vincularle una function, hay que invocarla de esa forma con los parentesis cerrados

function showGallery() {
	// con la variable 'galeria' levanto el elemento con el que quiero interactuar (la galeria) gracias al id.
	var galeria = document.getElementById("galeria");

	// hago una condicion donde si, el display de galeria es igual a 'block', lo modifique y lo ponga en none
	// sino (else), que el display sea block.

	if (galeria.style.display === "block") {
		galeria.style.display = "none";
	} else {
		galeria.style.display = "block";
	}
}

$(function () {
	if ($(".gallery-wrapper").length) {
		var galleryThumbs = new Swiper(
			".gallery-wrapper .content .gallery.thumb .swiper-container",
			{
				speed: 900,
				effect: "slide",
				slidesPerView: "auto",
				spaceBetween: 12,
				grabCursor: false,
				simulateTouch: true,
				loop: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				navigation: {
					nextEl:
						".gallery-wrapper .content .gallery.thumb .swiper-next-button",
					prevEl:
						".gallery-wrapper .content .gallery.thumb .swiper-prev-button",
				},
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					414: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 7,
						spaceBetween: 10,
					},
				},
			}
		);

		var galleryFull = new Swiper(
			".gallery-wrapper .content .gallery.full .swiper-container",
			{
				speed: 900,
				effect: "slide",
				slidesPerView: 3,
				spaceBetween: 0,
				centeredSlides: true,
				autoplay: {
					delay: 7000,
					disableOnInteraction: false,
					stopOnLastSlide: false,
				},
				keyboard: {
					enabled: true,
				},
				grabCursor: false,
				simulateTouch: false,
				loop: true,
				navigation: {
					nextEl: ".gallery-wrapper .content .gallery.full .swiper-next-button",
					prevEl: ".gallery-wrapper .content .gallery.full .swiper-prev-button",
				},
				thumbs: {
					swiper: galleryThumbs,
				},
				on: {
					slideChangeTransitionStart: function () {
						$(
							".gallery-wrapper .content .gallery.full .swiper-slide .overlay"
						).removeClass("show");
					},
					slideChangeTransitionEnd: function () {
						$(
							".gallery-wrapper .content .gallery.full .swiper-slide-active .overlay"
						).addClass("show");
					},
				},
			}
		);
	}
});

$(window).on("load", function () {
	setTimeout(function () {
		$(".loader").fadeOut();
	}, 1000);
});
