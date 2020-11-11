"use strict";


// ----------our services tabs----------

const tabs = document.querySelector(".tabs");
const tabNav = document.querySelectorAll(".tabs-title");
const tabText = document.querySelectorAll(".tab");

tabs.addEventListener("click", function(event) {
    tabNav.forEach(item => {
        item.classList.remove("active");
    })
    event.target.classList.add("active");
    tabText.forEach(item => {

        if (event.target.dataset.name === item.dataset.text) {
            item.classList.add("active-tab");
        } else {
            item.classList.remove("active-tab");
        }
    });
});

// ---------filter img----------

let active = '';

function filterImages(image){
    if(active != image){
        $('.visual').filter('.'+image).slideDown("slow");
        $('.visual').filter(':not(.'+image+')').slideUp("slow");
        active = image;
    }
}

$('.f-graphic').click(function() {filterImages('graphic'); });
$('.f-web').click(function() {filterImages('web'); });
$('.f-landing').click(function() {filterImages('landing'); });
$('.f-wordpress').click(function() {filterImages('wordpress'); });


$('.f-all').click(function(){
    $('.visual').slideDown("slow");
    active = 'all';
});

// ----------button load more----------

const loadMore = document.querySelector('.load-more');
const hideImg = document.querySelectorAll('.hide');

loadMore.addEventListener('click', () => {
    hideImg.forEach(item => {
        item.classList.remove('hide');
    });
    loadMore.remove();
});





// const btnContainer = document.getElementById("myBtnContainer");
// const btns = btnContainer.getElementsByClassName("our_tabs-title");
//
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

const ourTabs = document.querySelector(".our_tabs");
const ourTabsTitle = document.querySelectorAll(".our_tabs-title");

ourTabs.addEventListener("click", function(event) {
    ourTabsTitle.forEach(item => {
        item.classList.remove("active");
    })
    event.target.classList.add("active");

});



// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }
//
// /* конфигурация */
// let width = 130; // ширина картинки
// let count = 4; // видимое количество изображений
//
// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');
//
// let position = 0; // положение ленты прокрутки
//
// carousel.querySelector('.prev').onclick = function() {
//     // сдвиг влево
//     position += width * count;
//     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };
//
// carousel.querySelector('.next').onclick = function() {
//     // сдвиг вправо
//     position -= width * count;
//     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };