let text = document.getElementById("text")
let button1 = document.getElementById("button1")
let container = document.getElementById("container")
let clicky = new Audio('assets/click.mp3');
/* let bluebuttontext = document.getElementById("bluebuttontext") */

let clicks= 0;
/* let clicksbutton2= 0; */

button1.addEventListener("click", annoy);
/* button2.addEventListener("click", annoy); */

function annoy () {
    clicks ++;
    clicky.play()
    console.log(clicks)
    if( clicks == 1 ) {
        text.innerHTML = "Hey you";
    }
    else if( clicks == 3 ) {
        button1.classList.add("angry");
        text.innerHTML = "Stop touching me please";
    }
    else if ( clicks == 7 ) {
        button1.classList.remove("angry");
        text.innerHTML = "Ok fine"
    }

    else if( clicks == 15 ) {
        text.innerHTML = "I brought my friend to distract you";
        let button2 = document.createElement("button");
        button2.innerHTML = "Hi My name also Button";
        /* added classlist of button 1 to not have to recreate my button */
        button2.classList.add("button1");
        button2.classList.add("button2");
        container.appendChild(button2);
        bluebuttontext.innerHTML = "Yo";
        button1.classList.add("redbutton");
    }
    else if ( clicks == 25) {
        text.innerHTML = "Stop clicking me!!!";
        button1.classList.remove("redbutton");
        button1.classList.add("redbutton2");
    }
    else if ( clicks == 30) {
        text.innerHTML = "I admit defeat. you win.";
        bluebuttontext.innerHTML = "Byee";
        button1.classList.remove("redbutton2");
    }
    else if ( clicks == 35) {
        text.innerHTML = "Don't keep clicking me. you won";
        bluebuttontext.innerHTML = "Don't do that";
    }
    else if ( clicks == 40) {
        text.innerHTML = "You won chill out";
        bluebuttontext.innerHTML = "Exactly";
    }
    else if ( clicks == 50) {
        text.innerHTML = "Why are you still clicking";
        bluebuttontext.innerHTML = "You won stop clicking";
    }
    else if ( clicks == 100) {
        text.innerHTML = "You're dedicated";
        bluebuttontext.innerHTML = "We respect you";
    }
}

/* function blueannoy () {
    clicksbutton2++;
    clicky.play()
    console.log(clicksbutton2)
    if( clicksbutton2 == 5 ) {
       bluebuttontext.innerHTML = "You are pretty good" 
}
    else if( clicksbutton2 == 2) {
        text.innerHTML = "Yeah it's pretty hard to get him isn't it" 
}
}
*/
