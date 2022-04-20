const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".return-notes");

var notesAvailable = ["2000", "500", "100", "20", "10", "5", "1"];

checkButton.addEventListener("click", function checkAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {

        } else {
            showErrorMessage("DO YOU WAN TO WASH PLATES??? 😡")
        }

    } else {
        showErrorMessage("The amount must be greater than ZERO");
    }

});


function showErrorMessage(msg) {

    message.style.display = "block";
    message.innerText = msg;
};




// // function calulateAmount(returnAmount) {
// //     for (let i = 0; i < notesAvailable.lenghth; i++) {
// //         const numberOfNotes = Math.trunc(returnAmount / notesAvailable[i]);
// //         returnAmount %= notesAvailable[i];
// //         noOfNotes[i].innerText = numberOfNotes;
// //     };