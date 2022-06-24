'use strict';

//VARIABLEN

const elCollection = [
    [
        'Der Müll an den Stränden besteht zu 73% aus Plastik. Daher kann man bei einer Säuberung haufenweise finden:', 1
    ], [
        'Die Plastikproduktion ist von den 1950ern an enorm gestiegen. Genauer gesagt waren es bis 2015 fast', 2
    ], [
        'In Europa produziert ein Bürger durchschnittlich 502 Kilogramm Müll im Jahr. Wie schneiden wir verglichen mit unseren Nachbarländern ab? Liegt Deutschland', 1
    ], [
        'Da es für Kunststoff bisher keine Möglichkeit gibt, ihn rückstandslos aus der Welt zu schaffen, ist das Re-cycling umso wichtiger. Wie viel Plastikmüll, glaubst du, schafft es zurück in den Kreislauf?', 0
    ], [
        'Hauptsachlich über Flüsse gelangt Müll ins Meer, wo Tiere ihn hernach fressen. Aber warum?', 0
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
    ], [
        'Plastiktüten ähneln optisch Quallen. Dadurch verwechseln sie Tiere mit ihrer natürlichen Nahrung.',
        'Meerestiere sehen derart schlecht, dass sie bei der Futtersuche nach Gefühl vorgehen.',
        'Der Geruch von Plastik lockt Seevögel an, die den Abfall für ihre Jungen sammeln.'
    ]
    
];

let index = 0, min = 0, max = elCollection.length;

const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const elCongrats = ['Super!', 'Gut gemacht!', 'Weiter so!', 'Ich bin beeindruckt!'];
const elMotivations = ['Vielleicht klappts mit der nächsten Frage besser!', 'Leider nein.', 'Bist du sicher?', 'Nächstes Mal weißt dus besser.'];

let count = 0;
const elResolution = document.querySelector('.resolution');

//FUNKTIONEN

const showResult = () => {
    const elWrapper = document.querySelector('.wrapper');
    const elResult = document.createElement('p');
    elWrapper.append(elResult);
    elResult.className = 'result';

    //Zurück-Button

    if (count == max) {
        elResult.innerHTML = 'Spitzenmäßig! Du scheinst bereits ein Insider zu sein. Und darfst dich am Ausbau der App beteiligen. Wenn du also weitere Spots kennst, die für andere interessant sein könnten.. trag sie im Editor ein. Und hilf, den Planeten ein bisschen sauberer zu machen.';

    }
    else if (count > 1 && count < 5) {
        elResult.innerHTML = 'Nicht schlecht, Herr Specht. Trotzdem könntest du an der ein oder anderen Stellschraube wahrscheinlich noch drehen. Möchtest du genauer wissen WO empfehle ich dir den ' + '<a href="https://uba.co2-rechner.de/de_DE/" target="_blank">Rechner</a> des Umweltbundesamtes. Für das WIE ist der WWF eine gute Anlaufstelle.'
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

    const elBtnNext = document.createElement('button');
    elBtnNext.className = 'next';
    elBtnNext.innerHTML = 'Next';
    elResolution.append(elBtnNext);
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

    if (index == 5) {
        showResult();
    }

    let ident;
    ident = 'q' + index;
    showQuestion(ident);
}

takeChallenge();



