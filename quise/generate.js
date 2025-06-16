import cities from'cities.json';

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