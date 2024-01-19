const wordList = fetch('words.txt')
    .then(response => response.text())
    .then(text => text.split('\n'));

const wordContainer = document.getElementById('word-container');

let currentWordIndex = 0;

function displayNextWord() {
    wordContainer.textContent = wordList[currentWordIndex];
    currentWordIndex++;

    if (currentWordIndex < wordList.length) {
        setTimeout(displayNextWord, 1000); // Adjust delay as needed
    }
}

displayNextWord();
