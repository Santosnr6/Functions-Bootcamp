/** Övning 3 */

/**
 * Skriv en funktion som tar tre parametrar. 
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
 * Utför beräkningen och returnera summan och skriv ut. 
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) 
 * och varje operation ska vara sin egen funktion. 
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operations som ska göras (addition, subtraktion etc)
 * 4. Gör uträkning och returnera summan
 * 5. Skriv ut summan
 */

function add(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function calculate(firstNumber, secondNumber, operation) {
    if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        console.log('BajjaAjja');
    } else {
        if(operation === '+') {
            let answer = add(firstNumber, secondNumber);
            console.log(answer);
        } else if(operation === '-') {
            let answer = subtract(firstNumber, secondNumber);
            console.log(answer);
        } else if(operation === '/') {
            let answer = divide(firstNumber, secondNumber);
            console.log(answer);
        } else if (operation === '*') {
            let answer = multiply(firstNumber, secondNumber);
            console.log(answer);
        } else {
            console.log('Felaktig input');
        }
    }
}

calculate(5, 10, '+');
calculate(5, 10, '-');
calculate(5, 10, '/');
calculate(5, 10, '*');
calculate('hej', 10);
calculate(10, 'Hej');

// getInput();
// function getInput() {
//     let one = parseInt(window.prompt('Ange ett tal'));
//     let two = parseInt(window.prompt('Ange ett tal till'));
//     let operation = window.prompt('Ange ett räknesätt');

//     console.log(one);
//     console.log(two);
//     console.log(operation);
//     calculate(one, two, operation);
// }