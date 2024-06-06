const ball = document.getElementById('mydiv');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const step = 10; // Amount of pixels the ball moves with each key press

let ballXPosition = window.innerWidth / 2 - ball.offsetWidth / 2;
let ballYPosition = window.innerHeight / 2 - ball.offsetHeight / 2;

function updateBallPosition() {
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

updateBallPosition();

function moveLeft() {
    ballXPosition -= step;
    if (ballXPosition < 0) {
        ballXPosition = 0; // Prevent the ball from going off the left edge
    }
    updateBallPosition();
}

function moveRight() {
    ballXPosition += step;
    if (ballXPosition > window.innerWidth - ball.offsetWidth) {
        ballXPosition = window.innerWidth - ball.offsetWidth; // Prevent the ball from going off the right edge
    }
    updateBallPosition();
}

function moveUp() {
    ballYPosition -= step;
    if (ballYPosition < 0) {
        ballYPosition = 0; // Prevent the ball from going off the top edge
    }
    updateBallPosition();
}

function moveDown() {
    ballYPosition += step;
    if (ballYPosition > window.innerHeight - ball.offsetHeight) {
        ballYPosition = window.innerHeight - ball.offsetHeight; // Prevent the ball from going off the bottom edge
    }
    updateBallPosition();
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveLeft();
    } else if (e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'ArrowUp') {
        moveUp();
    } else if (e.key === 'ArrowDown') {
        moveDown();
    }
});

leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);
upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);