const dropdown = function (buttonClass, dropDownClass) {
  const button = document.querySelector(`.${buttonClass}`);
  const dropdownDiv = document.querySelector(`.${dropDownClass}`);
  button.addEventListener('click', () => {
    dropdownDiv.classList.toggle('hide');
  });
};
export { dropdown };
