'use strict';

//VARIABLEN
let count = 0;
const elAnswer = document.querySelector('.answer');
const elExplanation = document.createElement('span');

let index, min = 0, max = elCol.length;

const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const elArrCon = ['Super!', 'Gut gemacht!', 'Weiter so!', 'Ich bin beeindruckt!'];
const elArrPush = [];
const elArrMot = [];
let elCongrat = elArrCon[createNumber()];
let elPush = elArrPush[createNumber()];
let elMotiv = elArrMot[createNumber()];
console.log(elCongrat);

//FUNKTIONEN

const showResult = () => {

}

const renderAnswer = () => {

    index++;
    elExplanation.className = 'explanation';
    elAnswer.append(elExplanation);
  
    const elBtnNext = document.createElement('button');
    elBtnNext.className = 'next';
    elBtnNext.innerHTML = 'Next';
    elBtnNext.addEventListener('click', takeChallenge);
    elAnswer.append(elBtnNext);

    if (index === 5){
        showResult()
    }
}

//Rb fertigstellen
const handleAnswer = event => {

    renderAnswer();

    console.log(event, event.target);
    let elChosen = x;
    if (x === 'first'){
        elExplanation.innerHTML = elCongrat + '<br>' + '';
        count++;
    } 
    if (x === 'second') {
        elExplanation.innerHTML = '';
    }
    if (x === 'third') {
        elExplanation.innerHTML = '';
    }
}

const takeChallenge = () => {
    let ident;
    if (count === 0){
        ident = 'q' + count++;
    } else {
        ident = 'q' + count;
    }
    const elQuestion = document.getElementById(ident);
    elQuestion.dataset.visibility = 'visible';
    const elRemaining = document.getElementById(!ident);
    elRemaining.dataset.visibility = 'hidden';
}

takeChallenge();



