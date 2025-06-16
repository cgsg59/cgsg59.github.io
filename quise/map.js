import cities from'cities.json';
const coordinates = document.getElementById('coordinates');
let myVariable = false;
const button = document.getElementById('myButton');
const output = document.getElementById('output');
const checkCoord = {
    p1:0,
    p2:0
};
const distanceContainer = document.getElementById('distance');

const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [0, 0],
    style: 'https://demotiles.maplibre.org/style.json',
    zoom: 1, // starting zoom
    maplibreLogo: true
});

const marker = new maplibregl.Marker({draggable: true})
    .setLngLat([0, 0])
    .addTo(map);

function Check() {
    marker.draggable = false;
}

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    checkCoord.p1 = lngLat.lng;
    checkCoord.p2 = lngLat.lat;
    if (myVariable == 1) {
     Check();
    }
}
marker.on('dragend', onDragEnd);

button.addEventListener('click', function() {
  myVariable = !myVariable;
});

map.addSource('cities', {
    'type': 'geojson',
    "data": cities
});
map.addLayer({
    'id': 'cities',
    'type': 'circle',
    'source': 'cities',
    'paint': {
        'circle-radius': 10,
        'circle-color': '#3887be'
    }
});


function generateRandomSequence(length, min, max) {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    sequence.push(randomNumber);
  }
  return sequence;
}

const randomNumbers = generateRandomSequence(2, 0, 5);
alert(cities.name[randomNumber[0]]);