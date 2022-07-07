'use strict';

const elUser = document.querySelector('#account');
elUser.addEventListener('click', (evt) => {
    window.location.href = 'account.html';
})

const map = L.map('map').setView([49.01458359618814, 12.094789405394398], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


const elIcon = L.Icon.extend({
    options: {
        iconSize: [16, 16],
        iconAnchor: [16, 16],
        popupAnchor: [-8, -24]
    }
});

L.icon = (options) => {
    return new L.Icon(options);
};

const shirtIcon = new elIcon({ iconUrl: 'img/icons8-t-shirt-50.png' });

const containerIcon = new elIcon({ iconUrl: 'img/icons8-waste-sorting-50.png' });

const batteryIcon = new elIcon({ iconUrl: 'img/icons8-car-battery-50.png' });
const marker = L.marker([49.00147479248424, 12.177882840587241], { icon: batteryIcon }).addTo(map).bindPopup("Ikea<br>Entsorgung von Batterien, Glühbirnen & Elektrokleingeräten").openPopup();
L.marker([48.99444944929387, 12.113555611094968], { icon: batteryIcon }).addTo(map).bindPopup("MediaMarkt<br>Entsorgung von Batterien, Glühbirnen & Elektrokleingeräten").openPopup();
L.marker([49.024965360139056, 12.115214670621942], { icon: batteryIcon }).addTo(map).bindPopup("Saturn<br>Entsorgung von Batterien, Glühbirnen & Elektrokleingeräten").openPopup();
L.marker([48.998179308520626, 12.12292192524405], { icon: batteryIcon }).addTo(map).bindPopup("Städtischer Recyclinghof<br>Sammelstelle für leere Druckerpatronen..").openPopup();



const secondHandIcon = new elIcon({ iconUrl: 'img/icons8-sofa-50.png' });

L.marker([49.01944030665109, 12.098605104226085], { icon: secondHandIcon }).addTo(map).bindPopup("Radl Madln<br>Secondhand für Fahrräder").openPopup();
L.marker([49.071488614445336, 12.046054517790951], { icon: secondHandIcon }).addTo(map).bindPopup("<a href=http://www.dreamondresses.de>DreamOnDresses</a><br>Secondhand für Brautmode").openPopup();
L.marker([49.02381848745744, 12.077652455731466], { icon: secondHandIcon }).addTo(map).bindPopup("Verschenkschrank<br>beim Schlössl Stüberl").openPopup();
L.marker([49.01674022621957, 12.095264987138652], { icon: secondHandIcon }).addTo(map).bindPopup("Verschenkschrank<br>in der Grünen Oase").openPopup();

const shoppingIcon = new elIcon({ iconUrl: 'img/icons8-ingredients-50.png' });
L.marker([49.01692595208391, 12.094638654079278], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=https://fuellgutregensburg.de>Füllgut</a><br>Unverpacktladen").openPopup();

const bookIcon = new elIcon({ iconUrl: 'img/icons8-books-50.png' });
L.marker([49.023940, 12.100377], { icon: bookIcon }).addTo(map).bindPopup("Bücherschrank<br>am Andreasstadel").openPopup();
L.marker([49.010123919227105, 12.118848340587583], { icon: bookIcon }).addTo(map).bindPopup("Bücherschrank<br>Walderdorffstraße 11").openPopup();




const elShops = document.querySelector('#besorgen');
const elTrashs = document.querySelector('#entsorgen');

//Zusammenfassen
const showShops = () => {
    elShops.className = 'show';
    elTrashs.className = 'hide';
}

const showTrashs = () => {
    elShops.className = 'hide';
    elTrashs.className = 'show';
}

const elBtnShop = document.querySelector('#be');
elBtnShop.addEventListener('click', showShops);
const elBtnTrash = document.querySelector('#ent');
elBtnTrash.addEventListener('click', showTrashs);






