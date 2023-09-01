"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResults = add(num1, num2);
    console.log(result);
    numResults.push(result);
    textResults.push(stringResults);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("it worked");
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split('w'));
});
