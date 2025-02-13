const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Thiết lập kích thước canvas
canvas.width = 800;
canvas.height = 600;

// Định nghĩa tàu vũ trụ
const spaceship = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    speed: 5
};

// Điều khiển tàu vũ trụ
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') leftPressed = true;
    if (event.key === 'ArrowRight') rightPressed = true;
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowLeft') leftPressed = false;
    if (event.key === 'ArrowRight') rightPressed = false;
});

// Hàm vẽ tàu vũ trụ
function drawSpaceship() {
    ctx.fillStyle = 'white';
    ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

// Hàm cập nhật game
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Di chuyển tàu vũ trụ
    if (leftPressed && spaceship.x > 0) spaceship.x -= spaceship.speed;
    if (rightPressed && spaceship.x < canvas.width - spaceship.width) spaceship.x += spaceship.speed;

    drawSpaceship();

    requestAnimationFrame(update);
}

update();
