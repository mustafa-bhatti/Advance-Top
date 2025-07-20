export const dropdownHover = function (buttonClass, dropDownClass) {
  const button = document.querySelector(`.${buttonClass}`);
  const dropdownDiv = document.querySelector(`.${dropDownClass}`);
  button.addEventListener('mouseover', () => {
    dropdownDiv.classList.toggle('hide');
  });
};
