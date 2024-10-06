const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 500;

let score = 0;
let gameSpeed = 2;
let timeLimit = 30;
let gameInterval;
let timeInterval;

const bucket = {
    x: canvas.width / 2 - 20,
    y: canvas.height - 40,
    width: 40,
    height: 20,
    color: 'blue'
};

const raindrops = [];
const trash = [];

// Function to draw the bucket
function drawBucket() {
    ctx.fillStyle = bucket.color;
    ctx.fillRect(bucket.x, bucket.y, bucket.width, bucket.height);
}

// Function to spawn raindrops
function spawnRaindrop() {
    raindrops.push({
        x: Math.random() * canvas.width,
        y: 0,
        speed: gameSpeed,
        size: 10
    });
}

// Function to spawn trash
function spawnTrash() {
    trash.push({
        x: Math.random() * canvas.width,
        y: 0,
        speed: gameSpeed,
        size: 10
    });
}

// Function to update raindrops
function updateRaindrops() {
    for (let i = 0; i < raindrops.length; i++) {
        const drop = raindrops[i];
        drop.y += drop.speed;

        // Check if raindrop is caught by the bucket
        if (
            drop.y + drop.size > bucket.y &&
            drop.x + drop.size > bucket.x &&
            drop.x < bucket.x + bucket.width
        ) {
            score += 1;
            raindrops.splice(i, 1); // Remove the raindrop
        }

        // Draw raindrop
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove raindrop if it goes off screen
        if (drop.y > canvas.height) {
            raindrops.splice(i, 1);
        }
    }
}

// Function to update trash
function updateTrash() {
    for (let i = 0; i < trash.length; i++) {
        const t = trash[i];
        t.y += t.speed;

        // If trash hits the bucket, deduct score
        if (
            t.y + t.size > bucket.y &&
            t.x + t.size > bucket.x &&
            t.x < bucket.x + bucket.width
        ) {
            score -= 2; // Deduct points for catching trash
            trash.splice(i, 1);
        }

        // Draw trash
        ctx.fillStyle = 'brown';
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove trash if it goes off screen
        if (t.y > canvas.height) {
            trash.splice(i, 1);
        }
    }
}

// Function to move the bucket with arrow keys
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' && bucket.x > 0) {
        bucket.x -= 30;
    } else if (e.key === 'ArrowRight' && bucket.x + bucket.width < canvas.width) {
        bucket.x += 30;
    }
});

// Function to update the timer
function updateTimer() {
    timeLimit--;
    document.getElementById('timer').textContent = 'Time Left: ' + timeLimit;

    if (timeLimit <= 0) {
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        document.getElementById('finalScore').textContent = score;
        document.getElementById('gameOver').style.display = 'block';
    }
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBucket();
    updateRaindrops();
    updateTrash();

    document.getElementById('score').textContent = 'Score: ' + score;

    // Increase difficulty as the game progresses
    if (score % 10 === 0 && gameSpeed < 10) {
        gameSpeed += 0.01;
    }

    requestAnimationFrame(gameLoop);
}

// Spawn raindrops and trash at intervals
gameInterval = setInterval(() => {
    spawnRaindrop();
    spawnTrash();
}, 1000);

// Start the timer
timeInterval = setInterval(updateTimer, 1000);

// Start the game
gameLoop();

// Create animated clouds in the background
function createClouds() {
    const cloudCount = 5;
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.width = Math.random() * 60 + 80 + 'px'; // Random width
        cloud.style.height = Math.random() * 30 + 20 + 'px'; // Random height
        cloud.style.top = Math.random() * 200 + 'px'; // Random height
        cloud.style.left = Math.random() * 100 + 'px'; // Random start position
        document.body.appendChild(cloud);
    }
}

// Create clouds when the game starts
createClouds();
