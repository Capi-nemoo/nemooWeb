/* ============================================
   MAIN JAVASCRIPT - RETRO TERMINAL
   Pure JS (No jQuery dependency)
   ============================================ */

// === GLOBAL STATE ===
const RetroTerminal = {
    hitCount: 0,
    konamiCode: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    konamiIndex: 0
};

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
    initHitCounter();
    initKonamiCode();
    initScrollEffects();
    initRetroEffects();
});

// === HIT COUNTER ===
function initHitCounter() {
    const counter = document.querySelector('.hit-counter-value');
    if (!counter) return;
    
    // Get or initialize hit count from localStorage
    let hits = localStorage.getItem('hitCount');
    if (!hits) {
        hits = Math.floor(Math.random() * 10000) + 1337; // Start with a fun number
    } else {
        hits = parseInt(hits) + 1;
    }
    
    localStorage.setItem('hitCount', hits);
    RetroTerminal.hitCount = hits;
    
    // Animate counter
    animateCounter(counter, hits);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toString().padStart(6, '0');
    }, 20);
}

// === EFFECTS ===
function flashScreen() {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0.5;
        z-index: 99999;
        pointer-events: none;
    `;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 100);
}

// === KONAMI CODE ===
function initKonamiCode() {
    document.addEventListener('keydown', function(e) {
        const key = e.key;
        
        if (key === RetroTerminal.konamiCode[RetroTerminal.konamiIndex]) {
            RetroTerminal.konamiIndex++;
            
            if (RetroTerminal.konamiIndex === RetroTerminal.konamiCode.length) {
                activateKonamiCode();
                RetroTerminal.konamiIndex = 0;
            }
        } else {
            RetroTerminal.konamiIndex = 0;
        }
    });
}

function activateKonamiCode() {
    // Flash effect
    for (let i = 0; i < 5; i++) {
        setTimeout(() => flashScreen(), i * 200);
    }
    
    // Redirect to secret page after animation
    setTimeout(() => {
        window.location.href = '/secret/index.html';
    }, 1500);
}

// === SCROLL EFFECTS ===
function initScrollEffects() {
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease-in';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
}

// === RETRO EFFECTS ===
function initRetroEffects() {
    // Add scanline effect
    if (!document.querySelector('.scanline')) {
        const scanline = document.createElement('div');
        scanline.className = 'scanline';
        document.body.appendChild(scanline);
    }
    
    // Random glitch effect
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchEffect();
        }
    }, 3000);
}

function glitchEffect() {
    const body = document.body;
    body.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    setTimeout(() => {
        body.style.transform = 'translate(0, 0)';
    }, 50);
}

// === UTILITY FUNCTIONS ===
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function randomGlitchText(text) {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let result = '';
    
    for (let char of text) {
        if (Math.random() > 0.9) {
            result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
            result += char;
        }
    }
    
    return result;
}

// === EASTER EGGS ===
function initEasterEggs() {
    // Secret click counter on logo
    const logo = document.querySelector('.ascii-logo');
    if (logo) {
        let clicks = 0;
        logo.addEventListener('click', function() {
            clicks++;
            if (clicks === 7) {
                alert('You found a secret! The old web remembers...');
                clicks = 0;
            }
        });
    }
    
    // Console message
    console.log('%c Welcome to the Old Internet ', 'background: #000; color: #0f0; font-size: 20px; padding: 10px;');
    console.log('%c If you can read this, you\'re one of us. ', 'background: #000; color: #0f0; font-size: 12px;');
    console.log('%c Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A ', 'background: #000; color: #ff0; font-size: 12px;');
}

// === ANIMATIONS ===
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize easter eggs
initEasterEggs();

// === EXPORT FOR OTHER SCRIPTS ===
window.RetroTerminal = RetroTerminal;
window.typeWriter = typeWriter;
window.flashScreen = flashScreen;
