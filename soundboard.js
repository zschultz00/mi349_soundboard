var buttonAhem = document.getElementById('ahem')
var buttonAir = document.getElementById('air')
var buttonAirplane = document.getElementById('airplane')

var audioAhem = new Audio('ahem_x.wav');
var audioAir = new Audio('air_raid.wav');
var audioAirplane = new Audio('airplane_chime_x.wav');

buttonAhem.addEventListener('click', function () {
    audioAhem.play();
  })

  buttonAir.addEventListener('click', function () {
    audioAir.play();
  })

  buttonAirplane.addEventListener('click', function () {
    audioAirplane.play();
  })