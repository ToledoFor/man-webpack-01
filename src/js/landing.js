const sliderParameters = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
};

const swiper = new Swiper('#features-slider', sliderParameters);

let strVar = 'Test "value" constant';
console.log(strVar);
strVar = "Test 'value' constant";
console.log(strVar);
strVar = "Test \"value\" \\ constant";
console.log(strVar);

const value = 'usage';
const temp = `String template ${value}`;
console.log(temp);

console.log(5 * 'n');
console.log(5 + 2);
console.log('5' * 2);
console.log('5' / '2');

// event - 
// event.target

// { target } === event.target

// $('#swiper-next-btn').on('click', function ({target}) {
//     swiper.slideNext();
// });

// $('#swiper-prev-btn').on('click', function ({target}) {
//     swiper.slidePrev();
// });

// jQuery
const clickHandler = function (event) {
    if (event.target.id === 'swiper-next-btn') { // event.target.id == 5
        swiper.slideNext();
    }

    if (event.target.id === 'swiper-prev-btn') {
        swiper.slidePrev();
    }

    // switch (target.id) {
    //     case 'swiper-next-btn':
    //         swiper.slideNext();
    //         break;
    //     case 'swiper-prev-btn':
    //         swiper.slidePrev();
    //         break;    
    // }
}
// const elem = $('.swiper-controls');
// elem.on('click', clickHandler);

// Vanilla JS
const elemJS = document.querySelector('.swiper-controls');
elemJS && elemJS.addEventListener('click', ({target}) => {
    if (target.id === 'swiper-next-btn') { 
        swiper.slideNext();
    }

    if (target.id === 'swiper-prev-btn') {
        swiper.slidePrev();
    }
});

// Test objects 
let obj1 = {
    test: 1,
}

let obj2 = obj1;

obj1 = {
    test: 2,
}

console.log(obj1);
console.log(obj2);

let var1 = 5;
let var2 = var1;
var1 = 0;

console.log(var1);
console.log(var2);


const testRes = [
    {
        "ccy": "EUR",
        "base_ccy": "UAH",
        "buy": "40.00000",
        "sale": "41.00000"
    },
    {
        "ccy": "USD",
        "base_ccy": "UAH",
        "buy": "38.05000",
        "sale": "38.55000"
    }
];

// function getResponse(response) {
//     return response.json();
// }

// function getCurrency(courseId = 5) {
//     const apiUrl = `https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=${courseId}`;
//     //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

//     //fetch(proxyUrl + apiUrl)    
//     fetch(apiUrl)     
//         //.then(getResponse(response))
//         //.then(function (response) {
//         //   return response.json();
//         //})
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data);

//             const resDiv = document.getElementById('api_response');

//             data.forEach(({ccy, base_ccy, buy, sale}) => {
//                 resDiv.innerHTML += `Currency: ${ccy}, base ccy: ${base_ccy}, buy rate: ${buy}, sale rate: ${sale} <hr>`;
//             })
//         })
// }

// const apiLink = document.getElementById('api_get');
// apiLink.addEventListener('click', (evt) => {
//     evt.preventDefault();

//     getCurrency(4);
// });

// Select2
$(document).ready(function() { 
    $('.subscribe_select').select2({
        minimumResultsForSearch: Infinity
    });
});