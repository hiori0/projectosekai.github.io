const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

function showPopup(img) {
    var popup = document.querySelector('.popup-container');
    var popupImage = document.getElementById('popup-image');

    popupImage.src = img.src;
    popup.style.display = 'flex';
  }

  function closePopup(event) {
    var popup = document.querySelector('.popup-container');
    var popupImage = document.getElementById('popup-image');

    if (event.target === popup || event.target.classList.contains('close-button')) {
      popup.style.display = 'none';
      popupImage.src = '';
    }
  }