// JavaScript for "Guess the Pastry" game modal
$(document).ready(function(){
    $("#checkButton").click(function(){
        var guess = $("#guessInput").val().toLowerCase();
        if (guess === "croissant") {
            $("#errorMessage").hide();
            $("#bakeryModal").modal("hide");
            alert("Congratulations! You guessed it right!");
        } else {
            $("#errorMessage").show();
        }
    });
});
