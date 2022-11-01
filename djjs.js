/*The square's color will change as follows:

- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).
    
    You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`
    event listener window 

Attempt these requirements. If you become discouraged, included are things to consider.

Take a minute to think through how you would implement all of these event listeners.

You will need a different event for each event. Keyboard events are triggered by any key.

`.addEventListener` will be called on your square 6 times. */ 

/* window.addEventListener("keydown" function(){
    box.style.backgroundColor = "blue"
} )*/
let box = document.getElementById("square");
console.log(box);

box.addEventListener("mouseover", mouseOver);
box.addEventListener("mousedown", mouseDown);
box.addEventListener("mouseup", mouseUp);
box.addEventListener("dblclick", dblclick);
box.addEventListener("scroll", scroll);
box.addEventListener("keydown", keydown);


function mouseOver (){
    console.log("box",box);
    box.style.backgroundColor ="blue";
}

function mouseDown (){
    console.log("box",box);
    box.style.backgroundColor = "red";
}
function mouseUp (){
    console.log("box",box);
    box.style.backgroundColor = "yellow";
}
function dblclick (){
    console.log("box",box);
    box.style.backgroundColor ="green";
} 
/* (this was the initail attempt at the color, but it doesn't trigger at least with trackpad )
function scroll (){
    console.log("box",box);
    box.style.backgroundColor = "orange";
} */ 

//using window as the scroll the event listener picks up trackpad
window.onscroll = function (event) {
    box.style.backgroundColor = "orange"
}

window.addEventListener("keydown", keydown)

function keydown (e){
    console.log("box",box);
    box.style.backgroundColor = "black";

   if(e.keyCode === 66) {
    box.style.backgroundColor ="blue";
   }else if(e.keyCode === 82) {
    box.style.backgroundColor = "red";
   }else if(e.keyCode === 89) {
    box.style.backgroundColor = "yellow";
   }else if(e.keyCode === 71)
   box.style.backgroundColor ="green";
}


//keycodes http://gcctech.org/csc/javascript/javascript_keycodes.htm
//https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
   //if  keyc0de equals === 23, return the backgroundColor