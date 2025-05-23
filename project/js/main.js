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
    

} )()



