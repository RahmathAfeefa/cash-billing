const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".return-notes");

var notesAvailable = ["2000", "500", "100", "20", "10", "5", "1"];

checkButton.addEventListener("click", function checkAmount() {
    message.style.display = "none";
    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const returnAmount = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(returnAmount);
        } else {
            showErrorMessage("DO YOU WANT TO WASH PLATES??? 😡")
        }

    } else {
        showErrorMessage("The amount must be greater than ZERO");
    }

});

function calculateChange(returnAmount) {
    for (let i = 0; i < notesAvailable.length; i++) {
        const numberOfNotes = Math.trunc(returnAmount / notesAvailable[i]);
        returnAmount %= notesAvailable[i];
        noOfNotes[i].innerText = numberOfNotes;


    }
}

function showErrorMessage(msg) {

    message.style.display = "block";
    message.innerText = msg;
};