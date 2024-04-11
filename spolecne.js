const tlacitko = document.querySelector('#menu-tlacitko');
const menu = document.querySelector('#menu-polozky');

let menuVisible = false;

tlacitko.addEventListener('click', () => {
  if (!menuVisible) {
    menu.classList.add('show');
    menuVisible = true;
  } else {
    menu.classList.remove('show');
    menuVisible = false;
  }
});
