//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-hello__body')) {
  let helloSlider = new Swiper('.slider-hello__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    autoHeight: false,  
    parallax: true,
    loop: true,
    pagination: {
    	el: '.slider-hello__dotts',
    	clickable: true,
    },
    autoplay: {
      delay: 2500, 
      stopOnLastSlide: false, 
      disableOnInteraction: false 
    },
    speed: 1500,
    direction: 'vertical',
  });
}

if (document.querySelector('.slider-team__body')) {
  let teamSlider = new Swiper('.slider-team__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    autoHeight: false,  
    parallax: true,
    loop: true,
    pagination: {
    	el: '.slider-team__dotts',
    	clickable: true,
    },
    navigation: {
			nextEl: '.slider-team .slider-arrow_next',
			prevEl: '.slider-team .slider-arrow_prev',
		},
    autoplay: {
      delay: 2500, 
      stopOnLastSlide: false, 
      disableOnInteraction: false 
    },
    speed: 1500,
    breakpoints: {
			320: {
				slidesPerView: 1,
        slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 2,
        slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 3,
        slidesPerGroup: 3,
			}
		}
  });
}

if (document.querySelector('.slider-related__body')) {
  let relatedSlider = new Swiper('.slider-related__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    autoHeight: false,  
    parallax: true,
    loop: true,
    pagination: {
    	el: '.slider-related__dotts',
    	clickable: true,
    },
    /*autoplay: {
      delay: 2500, 
      stopOnLastSlide: false, 
      disableOnInteraction: false 
    },*/
    speed: 1500,
    breakpoints: {
			320: {
				slidesPerView: 1,
        slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 2,
        slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 3,
        slidesPerGroup: 3,
			}
		}
  });
}

if (document.querySelector('.slider-reviews__body')) {
  let reviewsSlider = new Swiper('.slider-reviews__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    autoHeight: true,  
    parallax: true,
    spaceBetween: 108,
    loop: true,
    pagination: {
    	el: '.slider-reviews__dotts',
    	clickable: true,
    },
    autoplay: {
      delay: 2500, 
      stopOnLastSlide: false, 
      disableOnInteraction: false 
    },
    speed: 1500,
  });
}
