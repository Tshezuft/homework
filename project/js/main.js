"use strict";
// burger
(function(){
    const body = document.body;
    document.addEventListener('click', burgerInit)
    function burgerInit(e){
        const burgerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.nav__link')
        if(document.documentElement.clientWidth > 900) return
        if (!burgerIcon && !navLink) {return} 
        else{
            body.classList.toggle('body--opened-menu');
        }
        }
    

} )();

// modal menu
(function(){
    document.addEventListener('click', modalInit);
    function modalInit(e){
        const modalBtn = e.target.closest('.about__img-btn');
        const closeModal = e.target.closest('.modal__cancel');
        const modal = e.target.closest('.modal__window');
        if (document.body.classList.contains('body--opened-modal')){
            if (closeModal || !modal){
                document.body.classList.remove('body--opened-modal')
                e.preventDefault()
            }
        }else{
            if (modalBtn){
                document.body.classList.toggle('body--opened-modal')
                e.preventDefault()
                }
        }
    }

    // tabs

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e){

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab-controls__link--active');
        const activeContent = document.querySelector('.tab-content--show');

        if (activeControl){
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent){
            activeContent.classList.remove('tab-content--show')
        }
        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

// accordion
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el =>{

        el.addEventListener('click', (e)=>{
            
            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
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


})()



