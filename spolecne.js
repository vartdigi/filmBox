const tlacitko = document.querySelector('#menu-tlacitko');
const menu = document.querySelector('#menu-polozky');

let menuVisible = false;

const klikniMenu = tlacitko.addEventListener('click', () => {
  let icon = document.querySelector('#menu-tlacitko i');
  if (menuVisible) {
    menuVisible = false;
    menu.classList.add('show');
    icon.classList.add('fa-xmark');
    icon.classList.remove('fa-bars');
  } else {
    menuVisible = true;
    menu.classList.remove('show');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  }
});
