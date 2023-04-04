let settings = {
  dots: true,
  slidesToShow: 3,
  draggable: false,
  lazyLoad: true,
  autoplay: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default settings;
