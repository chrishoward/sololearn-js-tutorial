let box = document.getElementById("box");
let x = 0;

function move() {
    ++x;
    box.style.left = x+"px";
    if ( x == 170 ) {
        clearInterval(t);
    }
}

t = setInterval(move, 50);