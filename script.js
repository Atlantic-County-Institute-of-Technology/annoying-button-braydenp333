const text = document.getElementById("text");
const button1 = document.getElementById("button1")
const container = document.getElementById("container");

let clicks = 0;

button1.addEventListener("event". annoy);

function annoy() {
    clicks++;
    alert(clicks)
    console.log(clicks)
    if( clicks == 1 ) {
        text.innerHTML = "Clicky clicky";
    }
    else if( clicks == 5 ) {
        button1.classList.add("angry");
        text.innerHTML = "Im gon get u";
    }
    else if ( clicks == 15 ) {
    button1.classList.remove("angry");
    }

    else if( clicks == 20 ) {
        text.innerHTML = "Breh";
        const button2 = document.createElement("button");
        button2.innerHTML = "Hi My name is Button";
        button2.classList.add("button1");
        button2.classList.add("button2");
        container.appendChild(button2);
    }
}