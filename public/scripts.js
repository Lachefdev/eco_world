'use strict';

const elUser = document.querySelector('#account');
elUser.addEventListener('click', (evt) => {
    window.location.href = 'account.html';
})


const map = L.map('map').setView([49.013, 12.101], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


const ShareIcon = L.Icon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
        popupAnchor:  [-8, -24]
    }
});

const GetIcon = L.Icon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
        popupAnchor:  [-8, -24]
    }
});

L.icon = (options) => {
    return new L.Icon(options);
};

const greenIcon = new ShareIcon({iconUrl: 'img/icons8-plastic-bottle-50.png'});
const marker = L.marker([49.023940, 12.100377], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.").openPopup();

