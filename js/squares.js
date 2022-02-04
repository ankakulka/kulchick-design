//reload page on button click
// #reload button id
$('#reload').click(function() {
    location.reload();
});


var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

// RANDOM COLOR function
function randomColor() {
var red = Math.floor(Math.random() * 200);
var green = Math.floor(Math.random() * 200);
var blue = Math.floor(Math.random() * 200);
return 'rgba('+ red + ","+ green + "," + blue + "," + "0.2" +')'; 
}

for (var i = 0; i < 250; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var z = Math.random() * 80;

c.fillStyle = randomColor();
c.fillRect(x, y, z, z);
   }
