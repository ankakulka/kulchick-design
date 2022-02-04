// hide instruction when mouse over canvas
$(document).ready(function(){
  $("#tree").on("mousemove", function(){
$("#instruct").fadeOut(3000, function() {
  // remove();

});
 });  

});






// get canvas from html + set full width/height
var canvas = document.querySelector('#tree');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// c var for 2d canvas
var c = canvas.getContext('2d');


// RANDOM COLOR
function randomColor() {
var red = 150 + Math.floor(Math.random() * 250);
var green = Math.floor(Math.random() * 250);
var blue = Math.floor(Math.random() * 20);
return 'rgba('+ red + ","+ green + "," + blue + "," + "0.6" +')'; 
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

// Create constructor function to ref later
function Circle(x, y, dx, dy, radius) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                
                this.draw = function() {

                            c.beginPath();
                            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                            c.fillStyle = randomColor();
                            c.fill();                      
                                }

                //   update func 
                            this.update = function() {
                            
        
                                    this.y += this.dy;
    
//   INTERACTIVITY: get 
   if (mouse.x - this.x < 2)  {
          this.y += 15;
          this.x += 5;
   }    

   
                               this.draw();
                             } 
 
}

var circleArray = [];

// use for loop to create 100 circles
for (var i = 0; i < 150; i++) {
  // create random positions at x, y
var x = 250 + Math.random() * 200;
var y = 150 + Math.random() * 200;
// create random velocity with dx and dy
var dx = (Math.random() * 0.5) * 10 ;
var dy = (Math.random() * 0.5) * 10;
var radius = Math.random() * 15;

circleArray.push(new Circle(x,y, dx, dy, radius));  

}


var circle = new Circle(x,y, dx, dy, radius);

// console.log(circleArray);

function animate() {
  
requestAnimationFrame(animate); 
c.clearRect(0, 0, innerWidth, innerHeight);  
circle.update();

//   // random size circles, random constraint color range
for (var i = 0; i < circleArray.length; i++) {
circleArray[i].update();
   
 }
  
  
// c.beginPath();
// c.arc(x, y, radius, 0, Math.PI * 2, false);
// c.fillStyle = "white";
// c.fill();
// y += dy;
 
 

// // LINES: tree

c.beginPath();
c.moveTo(350, 200);
c.lineTo(350, 900);
c.strokeStyle = "#f7f7f7";
c.lineWidth= 5;
c.stroke();

// //  branches : line at an angle

c.beginPath();
c.moveTo(350, 360);
c.lineTo(300, 200);
c.strokeStyle = "#f7f7f7";
c.lineWidth= 2.5;
c.stroke();

c.beginPath();
c.moveTo(400, 260);
c.lineTo(350, 500);
c.strokeStyle = "#f7f7f7";
c.lineWidth= 2.5;
c.stroke();

   
}

animate();




