const CLASSNAMES = {
  SLIDER_CONTAINER: '.locations-slider__swiper',
  PAGINATION: '.locations-slider__pagination',
  NEXT: '.locations-slider__next',
  PREV: '.locations-slider__prev',
};

class LocationsSlider {
  constructor(app, container) {
    this.app = app;
    this.container = container;

    // Slider container
    this.sliderContainer = container.querySelector(CLASSNAMES.SLIDER_CONTAINER);
    this.paginationContainer = container.querySelector(CLASSNAMES.PAGINATION);
    this.nextButton = container.querySelector(CLASSNAMES.NEXT);
    this.prevButton = container.querySelector(CLASSNAMES.PREV);

    window.addEventListener('appLoaded', this.initCarousel.bind(this));
  }

  initCarousel() {
    // Initialize Embla Carousel
    this.swiper = new window.$APP.Swiper(this.sliderContainer, {
      modules: [
        window.$APP.Swiper.EffectCoverflow,
        window.$APP.Swiper.Pagination,
        window.$APP.Swiper.Navigation,
      ],
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: this.paginationContainer,
        clickable: true,
      },
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.prevButton,
      },
    });
  }
}

export default LocationsSlider;
