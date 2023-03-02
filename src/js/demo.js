const demo = () => '1 Webpack Boilerplate v5.15.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

const demo1 = function() {
    return '2 Webpack Boilerplate v5.15.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';
}

const sliderParameters = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
};

const swiper = new Swiper('#features-slider', sliderParameters);

// eslint-disable-next-line no-console
console.log(demo());
console.log(demo1());

let var1 = 10;
let var2 = 20;

let var3;
var3 = var1 + var2;

$(window).on('load', () => {
    console.log('ready!')
    console.log('ready!!')
});

// $('.header-main__info-item').on('click', () => {
//     console.log('click');
// })

$('body').on('click', '.header-main__info-item', () => {
    console.log('click');
})

$(document).ready(function() {
    console.log('ready 1 !')
    console.log('ready 1 !!')
});

console.log(var3);

// const variable1 = 10;

// let variable2 = "test";

// var variable3 = 123;

// variable2 = 6;

// let testObject = {
//     key1: "test",
//     key2: 12,
// }

// testObject.key1 = "test1";

// function testFunction() {
//     const variable1 = 10;
// }