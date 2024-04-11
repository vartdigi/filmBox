const tlacitko = document.querySelector('#menu-tlacitko');
// const menu = document.querySelector('#menu-polozky');

let menuVisible = false;

const klikniMenu = tlacitko.addEventListener('click', () => {
  const menu = document.querySelector('#menu-polozky');
  if (menuVisible) {
    menuVisible = false;
    menu.classList.add('show');
  } else {
    menuVisible = true;
    menu.classList.remove('show');
  }
});

// const klikniMenu = (evt) = {
//   if (tlacitko) {
//     const menu = document.querySelector('#menu-polozky');
//     evt.target.menu.classList.add('show');
//   } else {
//     const menu = document.querySelector('#menu-polozky');
//     evt.target.menu.classList.remove('show');
//   }
// };

// document.querySelector('#menu-polozky').addEventListener('click', klikniMenu);

// document.querySelector ('#smiley2').addEventListener('click',() => {
//   const btn = document.querySelector('#smiley2')
//   btn.classList.add ('btn-smiley--sected')
//   })
