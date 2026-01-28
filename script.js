const button = document.getElementById('the-button');
const message = document.getElementById('message');
const countSpan = document.getElementById('count');
const grid = document.getElementById('game-grid');

let clickCount = 0;

const messages = [
    "Why.",
    "Stop.",
    "Seriously?",
    "No.",
    "Come on.",
    "Really.",
    "Still?",
    "Wow.",
    "Okay then.",
    "Sure.",
    "Great.",
    "Amazing.",
    "Fantastic.",
    "Cool cool cool.",
    "Yep.",
    "Makes sense.",
    "This is fine.",
    "Whatever.",
    "Alright.",
    "I give up.",
    "You win.",
    "Happy now?"
];

function moveButton() {
    const gridWidth = grid.offsetWidth;
    const gridHeight = grid.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    const maxX = gridWidth - buttonWidth;
    const maxY = gridHeight - buttonHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function updateMessage() {
    if (clickCount < messages.length) {
        message.textContent = messages[clickCount];
    } else {
        const extras = [
            "Click " + (clickCount + 1) + ".",
            "Still going.",
            "Why though.",
            "Okay."
        ];
        message.textContent = extras[Math.floor(Math.random() * extras.length)];
    }
}

button.addEventListener('click', function() {
    clickCount++;
    countSpan.textContent = clickCount;
    updateMessage();
    moveButton();
});

moveButton();
