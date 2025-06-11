let count=0;

function increase() {
    count++;
    document.getElementById("counter").textContent = count;

}

function decrease() {
    count--;
    document.getElementById("counter").textContent = count;

}

function reset() {
    count = 0;
    document.getElementById("counter").textContent = count;

}