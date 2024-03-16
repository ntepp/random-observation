const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    resizeCanvas();

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawPoint() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Generate random position, size, and color
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.floor(Math.random() * (50 - 30 + 1)) + 30; // Random size between 5 and 20
        const color = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
        const shape = Math.floor(Math.random() * 4); // Random shape: 0 (circle), 1 (rectangle), 2 (triangle), 3 (square)

        // Draw point with random shape
        ctx.beginPath();
        switch (shape) {
            case 0: // Circle
                ctx.arc(x, y, size, 0, Math.PI * 2);
                break;
            case 1: // Rectangle
                ctx.rect(x - size / 2, y - size / 2, size, size * 2);
                break;
            case 2: // Triangle
                ctx.moveTo(x, y - size / 2);
                ctx.lineTo(x + size / 2, y + size / 2);
                ctx.lineTo(x - size / 2, y + size / 2);
                ctx.closePath(); 
                break;
            case 3: // Square
                ctx.rect(x - size / 2, y - size / 2, size, size);
                break;
            default:
                break;
        }
        ctx.fillStyle = color;
        ctx.fill();

        // Schedule next point creation
        setTimeout(drawPoint, 1000); // Change interval as needed
    }

    drawPoint();

    // Update canvas dimensions on window resize
    window.addEventListener('resize', resizeCanvas);