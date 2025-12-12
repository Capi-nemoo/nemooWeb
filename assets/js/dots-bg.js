/**
 * Animated dots background - tilde.town style
 * Each dot represents a "user" with varying brightness based on "activity"
 */

(function() {
    const canvas = document.getElementById('dots-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let dots = [];
    const DOT_COUNT = 150;
    const DOT_SIZE = 2;
    
    // Resize canvas to fill window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initDots();
    }
    
    // Initialize dots with random positions and brightness
    function initDots() {
        dots = [];
        for (let i = 0; i < DOT_COUNT; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                brightness: Math.random(),
                targetBrightness: Math.random(),
                speed: 0.005 + Math.random() * 0.01
            });
        }
    }
    
    // Update dot brightness (simulate activity changes)
    function updateDots() {
        dots.forEach(dot => {
            // Slowly transition to target brightness
            if (Math.abs(dot.brightness - dot.targetBrightness) < 0.01) {
                dot.targetBrightness = Math.random();
            }
            
            if (dot.brightness < dot.targetBrightness) {
                dot.brightness += dot.speed;
            } else {
                dot.brightness -= dot.speed;
            }
            
            // Clamp brightness
            dot.brightness = Math.max(0.1, Math.min(1, dot.brightness));
        });
    }
    
    // Draw all dots
    function drawDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        dots.forEach(dot => {
            // Color varies from dim gray to bright white/yellow
            const alpha = 0.2 + (dot.brightness * 0.8);
            const hue = 45 + (dot.brightness * 15); // Slight yellow tint for brighter dots
            const lightness = 30 + (dot.brightness * 70);
            
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${hue}, 20%, ${lightness}%, ${alpha})`;
            ctx.fill();
            
            // Add glow for very bright dots
            if (dot.brightness > 0.8) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, DOT_SIZE * 3, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, 30%, ${lightness}%, ${(dot.brightness - 0.8) * 0.3})`;
                ctx.fill();
            }
        });
    }
    
    // Animation loop
    function animate() {
        updateDots();
        drawDots();
        requestAnimationFrame(animate);
    }
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    // Add slight parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        dots.forEach((dot, i) => {
            const depth = (i % 3 + 1) * 0.5;
            dot.x += mouseX * depth * 0.1;
            dot.y += mouseY * depth * 0.1;
            
            // Wrap around screen
            if (dot.x < 0) dot.x = canvas.width;
            if (dot.x > canvas.width) dot.x = 0;
            if (dot.y < 0) dot.y = canvas.height;
            if (dot.y > canvas.height) dot.y = 0;
        });
    });
})();
