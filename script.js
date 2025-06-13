let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function() {
  menu.classList.toggle("hidden")
})


// var swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   grabCursor: true,
// });

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('span:last-child');
  const isOpen = !content.classList.contains('hidden');

  document.querySelectorAll('#accordion div.mt-2').forEach(div => div.classList.add('hidden'));
  document.querySelectorAll('#accordion button span:last-child').forEach(span => span.textContent = '＋');

  if (!isOpen) {
    content.classList.remove('hidden');
    icon.textContent = '−';
  }
}

var swiper = new Swiper(".myBrand", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
