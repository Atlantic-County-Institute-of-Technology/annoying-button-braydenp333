let text = document.getElementById("text")
let button1 = document.getElementById("button1")
let container = document.getElementById("container")
let clicky = new Audio('assets/click.mp3');

let clicks= 0;
/*let clicksbutton2= 0;*/

button1.addEventListener("click", annoy); 

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
        text.innerHTML = "Come click my boy over here then";
        const button2 = document.createElement("button");
        button2.innerHTML = "Hi My name also Button";
        button2.classList.add("button1");
        button2.classList.add("button2");
        container.appendChild(button2);
    }
}


