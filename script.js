let menu = document.querySelector('#menu-bar');
let navigetion = document.querySelector('.nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navigetion.classList.toggle('active');
}


document.querySelector('#search-bar').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');

}



var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});