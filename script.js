let displayValue = '';
let orderline1 = 1;
let orderline3 = 3;
var r = document.querySelector('.numbers');

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
    document.getElementById('icon_copy').style.visibility = 'visible';
    document.getElementById('icon_check').style.visibility = 'hidden';
    document.getElementById('copytext').style.cursor = 'pointer';
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
    document.getElementById('icon_copy').style.visibility = 'visible';
    document.getElementById('icon_check').style.visibility = 'hidden';
    document.getElementById('copytext').style.cursor = 'pointer';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);  // Lösche das letzte Zeichen
    document.getElementById('display').value = displayValue;
    document.getElementById('icon_copy').style.visibility = 'visible';
    document.getElementById('icon_check').style.visibility = 'hidden';
    document.getElementById('copytext').style.cursor = 'pointer';
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
    document.getElementById('icon_copy').style.visibility = 'visible';
    document.getElementById('icon_check').style.visibility = 'hidden';
    document.getElementById('copytext').style.cursor = 'pointer';
}

function toggleOrder() {
    if (orderline1 == 1) {
        orderline1 = 3;
        orderline3 = 1;
    } else {
        orderline1 = 1;
        orderline3 = 3;
    }
    r.style.setProperty('--orderline1', orderline1);
    r.style.setProperty('--orderline3', orderline3);
}

function copyValue() {
    if (document.getElementById('icon_copy').style.visibility == 'visible') {
        navigator.clipboard.writeText(displayValue)/*.then(() => {alert("Text erfolgreich kopiert");}).catch(() => {alert("Text kopieren nicht möglich");});*/
        document.getElementById('icon_copy').style.visibility = 'hidden';
        document.getElementById('icon_check').style.visibility = 'visible';
        document.getElementById('copytext').style.cursor = 'default';
        /*document.getElementById(icon_copy).value = 'check'*/
    }
}
