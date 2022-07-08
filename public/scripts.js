'use strict';

const elUser = document.querySelector('#account');
elUser.addEventListener('click', (evt) => {
    window.location.href = 'account.html';
})

const map = L.map('map').setView([49.033197550739196, 12.100968191670919], 13);

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

//Gelben Sack & Karte verlinken
const containerIcon = new elIcon({ iconUrl: 'img/icons8-wardrobe-50.png' });
const marker = L.marker([49.00147479248424, 12.177882840587241], { icon: containerIcon }).addTo(map).bindPopup("Ikea<br>Entsorgung von Batterien, Glühbirnen & Elektrokleingeräten").openPopup();
L.marker([48.99444944929387, 12.113555611094968], { icon: containerIcon }).addTo(map).bindPopup("MediaMarkt<br>Entsorgung von Batterien, Glühbirnen & Elektrokleingeräten").openPopup();
L.marker([49.024965360139056, 12.115214670621942], { icon: containerIcon }).addTo(map).bindPopup("Saturn<br>Entsorgung von Batterien, Glühbirnen & Elektrokleingeräten").openPopup();
L.marker([48.998179308520626, 12.12292192524405], { icon: containerIcon }).addTo(map).bindPopup("Städtischer Recyclinghof<br>Sammelstelle für leere Druckerpatronen..").openPopup();
L.marker([49.01618751305779, 12.125506723980473], { icon: containerIcon }).addTo(map).bindPopup("Werkhof Regensburg<br>Sozialkaufhaus").openPopup();
L.marker([49.016538115431594, 12.12637407573886], { icon: containerIcon }).addTo(map).bindPopup("Gebrauchtwarenhalle<br>Bei Haushaltsauflösungen..").openPopup();

const secondHandIcon = new elIcon({ iconUrl: 'img/icons8-books-50.png' });
L.marker([49.023940, 12.100377], { icon: secondHandIcon }).addTo(map).bindPopup("Bücherschrank<br>am Andreasstadel").openPopup();
L.marker([49.009768626209, 12.118920385838], { icon: secondHandIcon }).addTo(map).bindPopup("Bücherschrank<br>Walderdorffstraße 13b").openPopup();
L.marker([49.009008584541, 12.045063078403], { icon: secondHandIcon }).addTo(map).bindPopup("Bücherschrank<br>an der Montessori-Schule").openPopup();
L.marker([49.0040152, 12.0945364], { icon: secondHandIcon }).addTo(map).bindPopup("Bücherschrank<br>in der Hochschulbibliothek").openPopup();
L.marker([48.997796479829, 12.095913582062], { icon: secondHandIcon }).addTo(map).bindPopup("Bücherschrank<br>in der Universitätsbibliothek").openPopup();
L.marker([49.02381848745744, 12.077652455731466], { icon: secondHandIcon }).addTo(map).bindPopup("Verschenkschrank<br>beim Schlössl Stüberl").openPopup();
L.marker([49.01674022621957, 12.095264987138652], { icon: secondHandIcon }).addTo(map).bindPopup("Verschenkschrank<br>in der Grünen Oase").openPopup();

const shoppingIcon = new elIcon({ iconUrl: 'img/icons8-ingredients-50.png' });
L.marker([49.01692595208391, 12.094638654079278], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=https://fuellgutregensburg.de>Füllgut</a><br>Unverpacktladen").openPopup();
L.marker([49.02091245654967, 12.096900898260301], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=http://www.donaustern.de/>Donaustern</a><br>Handgemachtes aus der Region").openPopup();
L.marker([49.01907095469979, 12.091340086411837], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=http://www.naturmarkt-glockengasse.de/>Naturmarkt Glockengasse</a><br>Bioprodukte mitten in der Altstadt").openPopup();
L.marker([49.02528097726181, 12.09773880903794], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=http://www.bioinsel-stadtamhof.de/>BIO INSEL Stadtamhof</a><br>Bioladen mit umfangreichen Sortiment").openPopup();
L.marker([49.02887558698018, 12.115878305061885], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=http://www.biomarkt-neuhoff.de/>Biomarkt Neuhoff</a><br>Laen & Bistro im DEZ").openPopup();
L.marker([49.026772173176326, 12.115759184836183], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=https://www.vita-nova.de/standorte/reformhaus-vilsmeier/startseite/>Reformhaus Vilsmeier</a><br>In der 2ten Etage des DEZ").openPopup();
L.marker([49.019757822001004, 12.098368844420467], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=http://www.reformhaus-david.de/>Reformhaus DAVID</a><br>Biomarkt im Zentrum").openPopup();
L.marker([49.021784136366804, 12.088069161690221], { icon: shoppingIcon }).addTo(map).bindPopup("<a href=http://www.reformhaus-am-stadttheater.de/>Reformhaus am Stadttheater</a><br>Am Bismarckplatz stehen samstags auch Markstände").openPopup();


const shirtIcon = new elIcon({ iconUrl: 'img/icons8-sandals-50.png' });
L.marker([49.01944030665109, 12.098605104226085], { icon: shirtIcon }).addTo(map).bindPopup("Radl Madln<br>Secondhand für Fahrräder").openPopup();
L.marker([49.0196903282547, 12.083115408271828], { icon: shirtIcon }).addTo(map).bindPopup("<a href=https://wanderlich.com/>Wanderlich Onlineshop</a><br>Secondhand für Outdoorkleidung").openPopup();
L.marker([49.071488614445336, 12.046054517790951], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.dreamondresses.de>DreamOnDresses</a><br>Secondhand für Brautmode").openPopup();
L.marker([49.03047215321499, 12.105519805031953], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.secondhand-am-ostentor.de/>Second Hand am Ostentor</a><br>Secondhand für Markenkleidung").openPopup();
L.marker([49.033197550739196, 12.100968191670919], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.peacehaendchen.de/>peacehändchen</a><br>Secondhand für Kinderkleidung").openPopup();
L.marker([49.02914576897426, 12.092728445486726], { icon: shirtIcon }).addTo(map).bindPopup("BALU<br>Secondhand für Kinderkleidung").openPopup();
L.marker([49.03047215321499, 12.09706379272317], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.peacehand.de/>Peacehand</a><br>Secondhand und mehr").openPopup();
L.marker([449.032178046479906, 12.094461942782004], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.resales.de/>ReSales</a><br>Secondhand im großen Stil").openPopup();
L.marker([49.0309466016077, 12.093415091002074], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.vintagekilosale.de/>VintageKiloSale</a><br>Kauf nach Kilogramm").openPopup();
L.marker([49.03139679958154, 12.087921926879277], { icon: shirtIcon }).addTo(map).bindPopup("<a href=http://www.bablok.de/>Klamotte</a><br>Secondhand & Vierteltreff").openPopup();
L.marker([49.02599415502292, 12.096848318578823], { icon: shirtIcon }).addTo(map).bindPopup("<a href=https://shops.oxfam.de/regensburg?utm_source=gmaps&utm_medium=verzeichnis&utm_campaign=ueberregional&utm_term=Allgemein>Oxfam</a><br>Erlöse zugunsten der Entwicklungshilfe").openPopup();



//Umbauen
const elShops = document.querySelector('#besorgen');

const showShops = () => {
    elShops.className = 'show';
    elTrashs.className = 'hide';
}

const elBtnTrash = document.querySelector('#ent');
elBtnTrash.addEventListener('click', showTrashs);






