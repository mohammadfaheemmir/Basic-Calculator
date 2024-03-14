function appendToDisplay(value) {
    let displayElement = document.getElementById("result");
    displayElement.value += value;
}

function clearDisplay() {
    let displayElement = document.getElementById("result");
    displayElement.value = '';
}

function calculate() {
    let displayElement = document.getElementById("result");

    try {
        let expression = displayElement.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        displayElement.value = eval(expression);
    } catch (error) {
        displayElement.value = 'Error';
    }
}