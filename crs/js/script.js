$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 1500,
    });
});


let popupBg = document.querySelector( '.popup_bg');
let popup = document.querySelector( '.popup');
let openPopupButtons = document.querySelectorAll(  '.open-popup');
let closePopupButton = document.querySelector( '.close-popup');
openPopupButtons.forEach((button  ) => {
    button.addEventListener('click',  (e  ) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener( 'click', () => {
    popupBg.classList.remove( 'active');
    popup.classList.remove( 'active');
});
document.addEventListener( 'click',  ( e ) => {
    console.log(e.target);
    if(e.target === popupBg) {
        popupBg.classList.remove(  'active');
        popup.classList.remove(  'active');
    }
});

