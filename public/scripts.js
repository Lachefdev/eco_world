/* 
<img src="https://img.icons8.com/small/50/undefined/crowd.png"/>
<img src="https://img.icons8.com/ios/50/undefined/flour-of-rye.png"/>
*/


'use strict';

const marker = L.marker([49.023940, 12.100377]).addTo(map);

/*var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);*/

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();