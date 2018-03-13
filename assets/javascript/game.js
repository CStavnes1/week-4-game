'use strict';

$( document ).ready(function() {
    


//Variables

let random_result = "";
let lost = 0;
let win = 0;
let guess= 0;



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




//creating function for adding cystals together once clicked
$('.col-sm-2').on('click', function () {
    let crystalNumber = parseInt($(this).attr('value'));

    let add = guess += crystalNumber

    //displaying users score on page
    $('.total-score').text(`Your total score: ${add}`);

    if (add > randomFirstNumber) {
        $('.score-update').text('You Lost!');
        
        let LossUpdate = lost--;
        $('#lost').text(`Loss: ${lost}`); 

       
        
    } else if (add === randomFirstNumber) 
    $('.score-update').text('You Win!')
        let winUpdate = win++;
        $('#win').text(`Win: ${win}`); 

});


const clear = function() {
    
    $('.btn-info').on('click').clear(randomFirstNumber);

   
}

})
    



});

