const images = document.querySelectorAll('.eye');
const popups = document.querySelectorAll('.popup-container');
const goBackButtons = document.querySelectorAll('.go-back-button');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    popups[index].style.display = 'block';
  });

  goBackButtons[index].addEventListener('click', () => {
    popups[index].style.display = 'none';
  });
});