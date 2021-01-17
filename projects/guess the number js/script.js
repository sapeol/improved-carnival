const msg = document.getElementById('msg');
const button = document.getElementById('start');

const number = getrandom();
console.log(number);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition;

//start recognition
function start(){
    recognition.start();
    recognition.addEventListener('result',onSpeak);
}
// recognition.start();

//user recognition
function onSpeak(e){
    console.log(e.results[0][0].transcript);
    const guesses = e.results[0][0].transcript;
    if (guesses == number){
        console.log("yes")
    }
}

//fuction for random 
function getrandom(){
    return Math.floor(Math.random()*1000);
}

//result

button.addEventListener('click',start)