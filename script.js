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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  loop: true,
});