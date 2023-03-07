const sliderParameters = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
};

const swiper = new Swiper('#features-slider', sliderParameters);

// event - 
// event.target

// { target } === event.target

// $('#swiper-next-btn').on('click', function ({target}) {
//     swiper.slideNext();
// });

// $('#swiper-prev-btn').on('click', function ({target}) {
//     swiper.slidePrev();
// });

const clickHandler = function (event) {
    console.log(event)

    if (event.target.id === 'swiper-next-btn') { // event.target.id == 5
        swiper.slideNext();
    }

    // console.log(test);
   

    if (event.target.id === 'swiper-prev-btn') {
        // var test = 123;
        
        // console.log(test);

        swiper.slidePrev();
    }

    // console.log(test);

    // switch (target.id) {
    //     case 'swiper-next-btn':
    //         swiper.slideNext();
    //         break;
    //     case 'swiper-prev-btn':
    //         swiper.slidePrev();
    //         break;    
    // }
}

const elem = $('.swiper-controls');

elem.on('click', clickHandler);