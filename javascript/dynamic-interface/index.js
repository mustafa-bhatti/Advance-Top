const dropdown = function(buttonClass,dropDownClass){
    const button = document.querySelector(`.${buttonClass}`)
    const dropdownDiv = document.querySelector(`.${dropDownClass}`)
    dropdownDiv.classList.toggle("hide")
    button.addEventListener("click",()=>{
        dropdownDiv.classList.toggle("hide")
    })
}
dropdown("drop-btn","dropdown-menu")