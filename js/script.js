var canvas = document.querySelector('.random');

canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function randomColor() {
var red = Math.floor(Math.random() * 250);
var green = Math.floor(Math.random() * 200);
var blue = Math.floor(Math.random() * 255);
return 'rgba('+ red + ","+ green + "," + blue + "," + "0.2" +')'; 
}


//add event Listener

var mouse = {
  x : undefined,
  y : undefined
}

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});



// ARC or CIRCLE

//JS Object

function Square(x,y, dx, dy, z) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.z = z;
  this.draw = function() {
  c.beginPath(); 
  c.strokeStyle = randomColor();
  c.lineWidth   = 1;
  c.strokeRect(this.x, this.y, this.z, this.z);
 
  }
 
//   update func
  
  
  this.update = function() {
   if (this.x  > innerWidth || this.x  < 0 ) {
    this.dx = -this.dx;
  }
   if (this.y > innerHeight || this.y < 0 ) {
    this.dy = -this.dy;
  }  
  this.x += this.dx;
  this.y += this.dy;
    
//   INTERACTIVITY: get 
   if (mouse.x - this.x < 50)  {
     
     this.z += 1;
   
   }
    
    
    
    
   this.draw();
 }
}


var squareArray = [];


for (var i = 0; i < 20; i++) {
var x = Math.random() * innerWidth;
var dx = (Math.random() * 0.5) * 20 ;
var y =  Math.random() * innerHeight;
var dy =  (Math.random() * 0.5) * 20;
// var radius = (Math.random() * 0.5) * 60;


squareArray.push(new Square(x,y, dx, dy));
// circle.draw(); 
}


console.log(squareArray);


var square = new Square(50, 50, 30, 30,30);
square.draw(); 





function animate() {
 requestAnimationFrame(animate); 
// c.clearRect(0, 0, innerWidth, innerHeight);  

for (var i= 0; i < 20; i++) {
  squareArray[i].update();
}
square.update();
 
}

animate();
































