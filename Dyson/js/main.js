"use strict";

(function(){
// add to cart
document.addEventListener('click', function(e) {
    if (e.target.matches('.increase')) {
        const card = e.target.closest('.offers__catalogue-buttons');
        const quantityDisplay = card.querySelector('.quantity');
        let quantity = parseInt(quantityDisplay.textContent);
        quantity++;
        quantityDisplay.textContent = quantity;
    }

    if (e.target.matches('.decrease')) {
        const card = e.target.closest('.offers__catalogue-buttons');
        const quantityDisplay = card.querySelector('.quantity');
        let quantity = parseInt(quantityDisplay.textContent);
        if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
    }
});


// -------swiper-catalogue------------


// ---------------------------second chanse_------------------------
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.offers__catalogue-img img');
    let imagesLoaded = 0;

            // Все изображения загружены — инициализируем Swiper
            new Swiper('.offers__catalogue', {
                spaceBetween: 10,
                slidesPerView: 2,
                slidesPerGroup: 2,

                grid: { columns: 3, rows: 2, fill: 'row' },
                allowTouchMove: false,
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
});

// -------swiper-equip------------

const swiperEquip = new Swiper('.equipment__slider', {

    spaceBetween: 20,
    slidesPerView: 1,
    grid: { rows: 1, fill: 'row' },
    autoHeight:true,

    navigation: {
        nextEl: '.equipment__next',
        prevEl: '.equipment__prev',
    },

    breakpoints: {
    //     600: {
    //         slidesPerView: 3,
    //     },
        701: {
            slidesPerView: 3,
        },
        1301: {
            slidesPerView: 4,
        },
    }
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

// burger
(function(){
    const body = document.body;
    document.addEventListener('click', burgerInit)
    function burgerInit(e){
        const burgerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.header__link')
        if (!burgerIcon && !navLink) {return} 
        else{
            body.classList.toggle('body--opened-menu');
        }
        }
    

} )();



})();
