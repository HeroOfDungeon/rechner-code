let displayValue = '';
let orderline1 = 1;
let orderline2 = 2;
let orderline3 = 3;
var r = document.querySelector('.numbers');

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);  // Lösche das letzte Zeichen
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        if (displayValue.includes('/0')) {
            window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0?autoplay=1&rel=0"); // Video bei Division durch 0
        } else {
            const result = eval(displayValue);
            document.getElementById('display').value = result;
            displayValue = String(result);
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function toggleOrder() {
    var rs = getComputedStyle(r);
    if (orderline1 == 1) {
        orderline1 = 3;
        orderline3 = 1;
    } else {
        orderline1 = 1;
        orderline3 = 3;
    }
    /*console.log(orderline1)
    console.log(orderline3)*/
    r.style.setProperty('--orderline1', orderline1);
    r.style.setProperty('--orderline3', orderline3);
    /*alert("The value of --orderline1 is: " + rs.getPropertyValue('--orderline1'));
    alert("The value of --orderline3 is: " + rs.getPropertyValue('--orderline3'));*/
}
