'use strict';

$( document ).ready(function() {
    


//Variables

let random_result = "";
let lost = "";
let win = "";



//Reset Func




//creating first randomnumber and displaying on page
$('#button').click(function() {
    let randomFirstNumber = Math.floor(Math.random() * 100) + 19;
    console.log(randomFirstNumber);
    $('#first-number').text(randomFirstNumber);

//creating 4 random numbers and assigning value to crystal ids
for (let i = 0; i < 4; i++) {
    let randomNumbers = Math.floor(Math.random() * 12) + 1;
    console.log(randomNumbers);

        let crystalValues = $("#crystal");
        crystalValues.attr({"value" : randomNumbers});
            $(".crystals").append(crystalValues);
}

})
    
});

