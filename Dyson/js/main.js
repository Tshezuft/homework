"use strict";

(function(){
// add to cart
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityDisplay = document.getElementById('quantity');

let quantity = parseInt(quantityDisplay.textContent);

increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

decreaseBtn.addEventListener('click', () => {
    if (quantity >1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

// -------swiper-catalogue------------

// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.offers__catalogue-img img');
//     let imagesLoaded = 0;
    
//     images.forEach((img) => {
//         img.addEventListener('load', () => {
//         imagesLoaded++;
//         if (imagesLoaded === images.length) {
// // _________________________________________
// const swiper = new Swiper('.offers__catalogue', {

//     spaceBetween: 10,
//     slidesPerView: 2,
//     slidesPerGroup: 2,
//     grid: {
//         rows: 2,
//         fill: 'row',
//     },
//     autoHeight: true,

//     pagination: {
//         el: '.offers__page-pagination',
//         type: 'fraction',
//         renderFraction: function (currentClass, totalClass) {
//             return '<span class="' + currentClass + '"></span>' +
//                     ' из ' +
//                     '<span class="' + totalClass + '"></span>';
//         },
//     },

//     navigation: {
//         nextEl: '.offers__page-next',
//         prevEl: '.offers__page-prev',
//     },

//     breakpoints: {

//         701: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             spaceBetween: 20,

        
//         },
//     }
// });
// }
// });
// });
// });
    

// ---------------------------second chanse_------------------------
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.offers__catalogue-img img');
    let imagesLoaded = 0;

    const checkAndInitSwiper = () => {
        if (imagesLoaded === images.length) {
            // Все изображения загружены — инициализируем Swiper
            new Swiper('.offers__catalogue', {
                spaceBetween: 10,
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: { rows: 2, fill: 'row' },
                autoHeight: true,
                pagination: {
                    el: '.offers__page-pagination',
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' +
                                ' из ' +
                                '<span class="' + totalClass + '"></span>';
                    },
                },
                navigation: {
                    nextEl: '.offers__page-next',
                    prevEl: '.offers__page-prev',
                },
                breakpoints: {
                    701: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                    },
                }
            });
        }
    };

    images.forEach((img) => {
        const onImageLoadOrError = () => {
            imagesLoaded++;
            checkAndInitSwiper();
        };
        img.addEventListener('load', onImageLoadOrError);
        img.addEventListener('error', onImageLoadOrError);
    });
});

// -------swiper-equip------------

const swiperEquip = new Swiper('.equipment__slider', {

    spaceBetween: 20,
    slidesPerView: 4,
    

    navigation: {
        nextEl: '.equipment__next',
        prevEl: '.equipment__prev',
    },

    // breakpoints: {
    //     600: {
    //         slidesPerView: 3,
    //     },
    //     801: {
    //         spaceBetween: 32,
    //     },
    //     1101: {
    //         slidesPerView: 4,
    //     },
    // }
});


// accordion
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el =>{

    el.addEventListener('click', (e)=>{
        
        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-content');

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if(accordionOpenedItem && accordionOpenedItem != accordionItem){
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;

        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else{
            accordionContent.style.maxHeight = null;
        }

    });
});



})();
