var currentNumber = "";
var numberRepresentedByID = '';

function whichNumber(buttonID) {
    switch (buttonID) {
        case 9:
            numberRepresentedByID = '9'
            break;
        case 8:
            numberRepresentedByID = '8'
            break;
        case 7:
            numberRepresentedByID = '7'
            break;
        case 6:
            numberRepresentedByID = '6'
            break;
        case 5:
            numberRepresentedByID = '5'
            break;
        case 4:
            numberRepresentedByID = '4'
            break;
        case 3:
            numberRepresentedByID = '3'
            break;
        case 2:
            numberRepresentedByID = '2'
            break;
        case 1:
            numberRepresentedByID = '1'
            break;
        case 0:
            numberRepresentedByID = '0'
            break;
        case divide:
            numberRepresentedByID = '/'
            break;
        case multiply:
            numberRepresentedByID = '*'
            break;
        case subtract:
            numberRepresentedByID = '-'
            break;
        case plus:
            numberRepresentedByID = '+'
            break;
        case equals:
            numberRepresentedByID = ''
            break;
    };
};

function assembleString() {
    currentNumber += numberRepresentedByID;
}

function calculate() {
    var answer = eval(currentNumber);
    alert(answer);
}

$(document).ready(function() {


    $("button:not(#equals)").click(function(curNum, numRepped) {
        $(whichNumber("button"));
        $(assembleString);
        alert(currentNumber);
    });


    $("#equals").click(function(currentNumber) {
        $(calculate);
    });

});