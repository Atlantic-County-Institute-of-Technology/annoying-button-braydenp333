let text = document.getElementById("text")
let button1 = document.getElementById("button1")
let container = document.getElementById("container")


/* let yay= new Audio('yay.mp3'); */

let clicks= 0;

button1.addEventListener("clicks", annoy);

function annoy () {
    clicks++;
    alert(clicks)
    console.log(clicks)
    if( clicks == 1 ) {
        text.innerHTML = "Hey you";
    }
    else if( clicks == 2 ) {
        button1.classList.add("angry");
        text.innerHTML = "Stop touching me";
    }
    else if ( clicks == 5 ) {
    button1.classList.remove("angry");
    text.innerHTML = "I take a chill pill"
    }

    else if( clicks == 20 ) {
        text.innerHTML = "Breh";
        const button2 = document.createElement("button");
        button2.innerHTML = "Hi My name is Button";
        button2.classList.add("button1");
        button2.classList.add("button2");
        container.appendChild("button2");
        /* yay.play() */
    }
}