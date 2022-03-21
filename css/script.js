// check if the rating card is displayed
let ratingCard = document.querySelector('.rating-card');
let thankCard = document.querySelector('.thank-card');
// ratingCard.classList.toggle('hide');
displayCard(ratingCard);
if (window.getComputedStyle(ratingCard).display !== "none") {
    let buttonLists = document.getElementsByClassName("rating-card__form-value");
    let clicked = false;
    let indexClicked = -1;
    for (let i = 0; i < buttonLists.length; i ++) {
        buttonLists[i].addEventListener("click", event => {
            if (clicked && indexClicked !== i) {
                buttonLists[indexClicked].classList.remove('click-change2');
                if (indexClicked > 0)
                    buttonLists[indexClicked - 1].classList.remove('click-change1');
                indexClicked = i;
            }
            else if (clicked) {
                clicked = false;
                indexClicked = -1;
            }
            else {
                clicked = true;
                indexClicked = i;
            }
            buttonLists[i].classList.toggle('click-change2');
            if (i > 0)
                buttonLists[i - 1].classList.toggle('click-change1');
        });
        // no need mouseleave
    }
    
    // document.querySelector(".card__form-submit").click(event => {
    //     console.log("Clicked");
    //     if (indexClicked !== - 1) {
    //         console.log(buttonLists[indexClicked].value);
    //     }
    // });
    document.querySelector(".rating-card__form-submit").addEventListener("click", event => {
        if (indexClicked !== -1) {
            let userRating = buttonLists[indexClicked].value;
            hideCard(ratingCard);
            thankCard.querySelector('.thank-card__choice').innerHTML = `You selected ${userRating} out of 5`;
            displayCard(thankCard);
        }
        else 
            alert("You haven't rated yet");
    });
    
}
else {

}
function displayCard(cardName) {
    cardName.classList.remove('hide');
}
function hideCard(cardName) {
    cardName.classList.add('hide');
}