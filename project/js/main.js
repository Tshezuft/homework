"use strict";
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


(function(){
    document.addEventListener('click', modalInit);
    function modalInit(e){
        e.preventDefault()
        const modalBtn = e.target.closest('.about__img-btn');
        const closeModal = e.target.closest('.modal__cancel');
        const modal = e.target.closest('.modal__window');
        if (document.body.classList.contains('body--opened-modal')){
            if (closeModal || !modal){
                document.body.classList.remove('body--opened-modal')
            }
        }else{
            if (modalBtn)
                document.body.classList.toggle('body--opened-modal')
        }
    }
})()


