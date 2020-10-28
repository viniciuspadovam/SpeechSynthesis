const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const inputRange = document.querySelector('#range');

const utterance = new SpeechSynthesisUtterance();
utterance.volume = 1;

document.querySelector('#text').addEventListener('input', () => { setText(event) });

speakButton.addEventListener('click', () => {
    setLanguage();
    setSpeed();
    speechSynthesis.speak(utterance);
})

stopButton.addEventListener('click', () => {
    speechSynthesis.cancel();
})




function setText(event) {
    utterance.text = event.target.innerText;
}

function setSpeed() {
    if(inputRange.value == 1) {
        utterance.rate = 1;
    } else if(inputRange.value == 2) {
        utterance.rate = 1.5;
    } else if(inputRange.value == 3) {
        utterance.rate = 2;
    }
}

function setLanguage() {
    if(document.querySelector('#ptBR').checked) {
        utterance.lang = 'pt-BR';
    } else if(document.querySelector('#enUS').checked) {
        utterance.lang = 'en-US';
    }
}