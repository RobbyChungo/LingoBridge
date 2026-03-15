
// ELEMENT REFERENCES
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const translateBtn = document.getElementById("translateBtn");

const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

const swapBtn = document.getElementById("swapBtn");

const loading = document.getElementById("loading");

const charCount = document.getElementById("charCount");

const copyInput = document.getElementById("copyInput");
const copyOutput = document.getElementById("copyOutput");

const listenInput = document.getElementById("listenInput");
const listenOutput = document.getElementById("listenOutput");


// CHARACTER COUNTER
inputText.addEventListener("input", () => {
    charCount.textContent = `${inputText.value.length}/500`;
});


// TRANSLATION FUNCTION
async function translateText() {

    const text = inputText.value.trim();

    if (!text) return;

    loading.style.display = "block";

    try {

        const url =
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang.value}|${targetLang.value}`;

        const response = await fetch(url);

        const data = await response.json();

        outputText.value = data.responseData.translatedText;

    } catch (error) {

        outputText.value = "Translation failed";

    }

    loading.style.display = "none";
}


// TRANSLATE BUTTON
translateBtn.addEventListener("click", translateText);


// DEFAULT TRANSLATION WHEN PAGE LOADS
window.onload = translateText;


// SWAP LANGUAGES
swapBtn.addEventListener("click", () => {

    const tempLang = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = tempLang;

    const tempText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = tempText;

});


// COPY FUNCTIONS
copyInput.onclick = () => {
    navigator.clipboard.writeText(inputText.value);
};

copyOutput.onclick = () => {
    navigator.clipboard.writeText(outputText.value);
};




/* CLEARER TEXT TO SPEECH */

let voices = [];

function loadVoices() {
voices = speechSynthesis.getVoices();
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;


function speak(text, lang) {

if (!text) return;

const speech = new SpeechSynthesisUtterance(text);

/* match language */
speech.lang = lang;

/* find best voice for the language */
let bestVoice = voices.find(v =>
v.lang.toLowerCase().startsWith(lang)
);

/* fallback to english if none found */
if(!bestVoice){
bestVoice = voices.find(v => v.lang.includes("en"));
}

if(bestVoice){
speech.voice = bestVoice;
}

/* clarity tuning */
speech.rate = 0.75;   // slower = clearer
speech.pitch = 1;
speech.volume = 1;

speechSynthesis.cancel();
speechSynthesis.speak(speech);

}


/* LISTEN BUTTONS */

listenInput.onclick = () => {
speak(inputText.value, sourceLang.value);
};

listenOutput.onclick = () => {
speak(outputText.value, targetLang.value);
};

/* DARK MODE BUTTON */ darkModeBtn.onclick=()=>{ document.body.classList.toggle("dark-mode") }