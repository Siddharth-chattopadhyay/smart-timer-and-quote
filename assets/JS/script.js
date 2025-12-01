let paused = false;

const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success consists of going from failure to failure without loss of enthusiasm.",
    "The journey of a thousand miles begins with one step.",
    "Opportunities don't happen, you create them.",
    "Your time is limited, don't waste it living someone else's life."
];

setTimeout(() => {
    const form = document.getElementById("inpform");
    form.style.display = "flex";
    console.log("Working?");
}, 1000 * 3);

const dayh = document.getElementById("day");
const hourh = document.getElementById("hour");
const minh = document.getElementById("minute");
const sech = document.getElementById("second");

function onStart(){
    const date = document.getElementById("date").value;
    let rem = (new Date(date).getTime()) - (new Date().getTime());
    const handle = setInterval(() => {
        if (paused) return;
        rem-= 1000;
        const title = document.getElementById("title").value;
        const popup = document.getElementById("popup");
        const alert = document.getElementById("alert");
        const form = document.getElementById("inpform");
        form.style.display = "none";
        console.log(rem);
        if (rem <= 0){
            alert.innerHTML = "Times Up! " + title;
            popup.style.display = "flex";
            clearInterval(handle);
        }
        else {
            sech.innerHTML = Math.floor((rem / 1000) % 60);
            minh.innerHTML = Math.floor(((rem / 1000) / 60) % 60);
            hourh.innerHTML = Math.floor((((rem / 1000) / 60) / 60) % 60);
            dayh.innerHTML = Math.floor(((((rem / 1000) / 60) / 60) / 60));
        }
    }, 1000 * 1);
}

function closeAlert(){
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function togglePause(){
    paused = !paused;
    document.getElementById("pause").innerHTML = paused? "Play" : "Pause";
}

let index = 0;
document.getElementById("quote").innerHTML = quotes[index++ % quotes.length];
setInterval(() => {
    document.getElementById("quote").innerHTML = quotes[index++ % quotes.length];
}, 1000 * 5);

function prev(){
    document.getElementById("quote").innerHTML = quotes[(--index - 1) % quotes.length];
}

function next(){
    document.getElementById("quote").innerHTML = quotes[index++ % quotes.length];
}