var targetNumber = Math.floor(Math.random() * 101 + 19);
var emerald = Math.floor(Math.random() * 12 + 1);
var diamond = Math.floor(Math.random() * 12 + 1);
var sapphire = Math.floor(Math.random() * 12 + 1);
var ruby = Math.floor(Math.random() * 12 + 1);
var total = 0;
var wins = 0;
var losses = 0;

console.log(emerald, diamond, sapphire, ruby, targetNumber);

function reset() {
     targetNumber = Math.floor(Math.random() * 101 + 19);
     emerald = Math.floor(Math.random() * 12 + 1);
     diamond = Math.floor(Math.random() * 12 + 1);
     sapphire = Math.floor(Math.random() * 12 + 1);
     ruby = Math.floor(Math.random() * 12 + 1);
     total = 0;
    $("#total").html(total);
    $("#target").html(targetNumber);
    console.log(emerald, diamond, sapphire, ruby, targetNumber);

    $("#wins").html(wins);
    $("#losses").html(losses);
}

function init() {

    $("#target").append(targetNumber);
    $("#total").html(total);
    $("#wins").html(wins);
    $("#losses").html(losses);


    $("body").on("click", "#emerald", function () {
        if (total < targetNumber) {
            total += emerald;
            $("#total").html(total);
        }
        else if (total === targetNumber) {
            $("#total").html("You win!");
        } else if (total > targetNumber) {
            $("#total").html("You are over the limit!");
        }
    });

    $("body").on("click", "#diamond", function () {
        if (total < targetNumber) {
            total += diamond;
            $("#total").html(total);
        }
        else if (total === targetNumber) {
            $("#total").html("You win!");
        } else if (total > targetNumber) {
            $("#total").html("You are over the limit!");
        }
    });

    $("body").on("click", "#sapphire", function () {
        if (total < targetNumber) {
            total += sapphire;
            $("#total").html(total);
        } else if (total === targetNumber) {
            $("#total").html("You win!");
        } else if (total > targetNumber) {
            $("#total").html("You are over the limit!");
        }
    });

    $("body").on("click", "#ruby", function () {
        if (total < targetNumber) {
            total += ruby;
            $("#total").html(total);
        }
        else if (total === targetNumber) {
            $("#total").html("You win!");
        } else if (total > targetNumber) {
            $("#total").html("You are over the limit!");
        }
    });

    $("body").on("click", "#reset", function (){
        if (total === targetNumber) {
           $("#total").html("You win!");
           wins++;
        } else if (total > targetNumber) {
           $("#total").html("You are over the limit!");
           losses++;
       }
        reset();
    });
};

init();
