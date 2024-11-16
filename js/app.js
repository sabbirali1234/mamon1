




var splide = new Splide( '.splide', {
  perPage: 3,
  gap    : '2rem',
  breakpoints: {
    991: {
      perPage: 2,
      gap    : '.7rem',
      height : '420px',
    },
    767: {
      perPage: 1,
      gap    : '.7rem',
      height : '520px',
    },
  },
} );

splide.mount();

