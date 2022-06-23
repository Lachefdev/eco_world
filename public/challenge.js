'use strict';

//VARIABLEN
let count = 0;
const elResolution = document.querySelector('.resolution');

//Fragen, einschl. Auflösung, einfügen
const elCollection = [
    [
        'Der Müll an den Stränden besteht zu 73% aus Plastik. Daher kann man bei einer Säuberung haufenweise finden:', 1
    ], [
        'Die Plastikproduktion ist von den 1950ern an enorm gestiegen. Genauer gesagt waren es bis 2015 fast', 2
    ], [
        'In Europa produziert ein Bürger durchschnittlich 502 Kilogramm Müll im Jahr. Wie, glaubst du, schneidet unsereins im Vergleich ab? Liegt Deutschland', 1
    ], [
        'Da es für Kunststoff bisher keine Möglichkeit gibt, ihn sauber zu entsorgen, ist das Re-cycling umso wichtiger. Wie viel Plastikmüll schafft es tatsächlich zurück in den Kreislauf?', 0
    ], [
        ''
    ]];

const elAnswers = [
    [
        'alte Schuhe, Flaschen und Tüten',
        'Zigarettenfilter, Styropor und Verpackungen',
        'Wattestäbchen, Einweggeschirr und Überreste von Fischernetzen'
    ], [
        '65 Mio. Tonnen', '127 Mio. Tonnen', '404 Mio. Tonnen'
    ], [
        'darunter', 'darüber', 'im Schnitt'
    ], [
        'etwa die Hälfte',
        'ein Viertel',
        'drei Viertel'
    ],
    
];

let index = 0, min = 0, max = elCollection.length;

const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const elCongrats = ['Super!', 'Gut gemacht!', 'Weiter so!', 'Ich bin beeindruckt!'];
const elMotivations = ['Vielleicht klappts mit der nächsten Frage besser!', 'Leider nein.', 'Bist du sicher?', 'Nächstes Mal weißt dus besser.'];

//FUNKTIONEN

const showResult = () => {
    const elWrapper = document.querySelector('.wrapper');
    const elResult = document.createElement('p');
    elWrapper.append(elResult);
    elResult.className = 'result';

    if (index == max) {
        elResult.innerHTML = 'Spitzenmäßig! Du scheinst bereits ein Insider zu sein. Und darfst dich am Ausbau der App beteiligen. Wenn du also weitere Spots kennst, die für andere interessant sein könnten.. trag sie im Editor ein. Und hilf, den Planeten ein bisschen sauberer zu machen.';

    }
    else if (count > 1 && count < 5) {
        elResult.innerHTML = 'Nicht schlecht, Herr Specht. Trotzdem könntest du an der ein oder anderen Stellschraube wahrscheinlich noch drehen. Möchtest du genauer wissen WO empfehle ich dir den' + '<a href="https://uba.co2-rechner.de/de_DE/" target="_blank">Rechner</a> des Umweltbundesamtes. Für das WIE ist der WWF eine gute Anlaufstelle.'
    }
    else if (count <= 1) {
        elResult.innerHTML = 'Da ist noch Luft nach oben, oder? Schau gerne mal in unser Lexikon. Dort haben wir all die Tipps & Tricks gesammelt, die wir im Laufe der Jahre erprobt und für alltagstauglich empfunden haben. Es ist eigentlich gar nicht soo schwer, macht Spaß und hinterlässt ein richtig gutes Gewissen.'
    }

}

const handleAnswer = () => {
    
    const elExplanation = document.createElement('span');
    elResolution.append(elExplanation);
    elResolution.className = '';
    elResolution.className += 'highlight';
    
    let elChosen = elCollection[index][1];
    let elRbs = [...document.querySelectorAll('input[name="choice"]')];
    let elSelected = elRbs.filter(el => el.checked);
    
    index++;

    if (elSelected[0].id == elChosen) {
        elExplanation.innerHTML = elCongrats[createNumber()];
        count++;
    } 
    if (elSelected[0].id != elChosen) {
        elExplanation.innerHTML = elMotivations[createNumber()];
    }

    if (index == 5) {
        showResult();
    }

    const elBtnNext = document.createElement('button');
    elBtnNext.className = 'next';
    elBtnNext.innerHTML = 'Next';
    elResolution.append(elBtnNext);
    //Slider
    elBtnNext.addEventListener('click', () => takeChallenge());
}

const showQuestion = id => {
    let elQuiz = document.getElementById(id);
    elQuiz.className = 'card';
    elQuiz.dataset.visibility = 'visible';

    const elQuestion = document.createElement('h2');
    elQuestion.innerHTML = elCollection[index][0];
    elQuiz.append(elQuestion);

    for (let i = 0; i < elAnswers[index].length; i++) {

        const elContainer = document.createElement('div');
        elContainer.className = 'container';
        elQuiz.append(elContainer);

        const elPossibilities = document.createElement('input');
        elPossibilities.setAttribute('type', 'radio');
        elPossibilities.setAttribute('name', 'choice');
        elPossibilities.setAttribute('id', i);
        elPossibilities.addEventListener('click', () => handleAnswer());
        elContainer.append(elPossibilities);

        const elLabel = document.createElement('label');
        elLabel.innerHTML = elAnswers[index][i];
        elContainer.append(elLabel);
    }
}

const takeChallenge = () => {

    const elRecent = document.querySelector('div[data-visibility = "visible"]');
    elRecent.dataset.visibility = 'hidden';
    elRecent.className = '';
    elRecent.innerHTML = '';
    elResolution.innerHTML = '';
    elResolution.className = '';

    let ident;
    ident = 'q' + index;
    showQuestion(ident);

    /*if (count === 0) {
        let elRepl = count++;
        //console.log(elRepl);
        ident = 'q' + elRepl;
    } else {
        let elRepl = count;
        ident = 'q' + elRepl;
    }
    //console.log(ident);*/
}

takeChallenge();



