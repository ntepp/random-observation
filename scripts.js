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
        const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Random size between 5 and 20
        const color = '#' + (Math.random().toString(16) + '000000').substring(2, 8);

        // Draw point with random size
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Schedule next point creation
        setTimeout(drawPoint, 1000); // Change interval as needed
    }

    drawPoint();

    // Update canvas dimensions on window resize
    window.addEventListener('resize', resizeCanvas);