const ratingNumbervalue = document.querySelectorAll('.rating_number');
const selectButton = document.querySelector('.submit_button');
const cardCss = document.querySelector('.page1');
const thank_card = document.querySelector('.thank_section')
const valueChange = document.getElementById('selected_value')

let selectedValue = null;
let inputValue

ratingNumbervalue.forEach(function (value) {
    value.addEventListener('click', function () {
        if (selectedValue === value) {
            value.style.background = ''; // Reset the background
            value.style.opacity = ''; // Reset the opacity
            selectedValue = null;
            inputValue = null;
        } else {
            if (selectedValue) {
                // Deselect the previously selected rating
                selectedValue.style.background = ''; // Reset the background
                selectedValue.style.opacity = ''; // Reset the opacity
            }
            // Select the clicked rating
            value.style.background = "hsl(216, 12%, 54%)";
            value.style.opacity = 1;
            selectedValue = value;
            inputValue = value.textContent;
        }
        console.log(inputValue);
    });
});

 buttonClicked = false;

selectButton.addEventListener('click',function(){
    buttonClicked = true;
    if(buttonClicked && inputValue){
        cardCss.style.display="none"
        thank_card.style.display="block"
        valueChange.innerHTML = inputValue
        console.log(valueChange);
    }
})