function calculateFactorial() {
    var numberInput = document.getElementById("number");
    var resultParagraph = document.getElementById("result");
    var number = parseInt(numberInput.value);
    if (isNaN(number) || number < 0) {
        resultParagraph.textContent = "Please enter a non-negative number.";
    } else {
        var factorial = factorialLoop(number);
        resultParagraph.textContent = `Factorial of ${number} is ${factorial}.`;
    }
}

function factorialLoop(number) {
    var result = 1;
    for (var i = 2; i <= number; i++) {
        result = result * i;
    }
    return result;
}