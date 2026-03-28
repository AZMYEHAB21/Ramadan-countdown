// Ramadan 2027 Countdown Timer
// رمضان 2027 يبدأ في 8 فبراير 2027
// 1 رمضان 1448 هـ

function updateCountdown() {
    // Target date: Ramadan 2027 starts on February 8, 2027 (1 Ramadan 1448 AH)
    const ramadanDate = new Date('February 8, 2027 00:00:00').getTime();
    
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the difference
    const difference = ramadanDate - now;
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the DOM with the calculated values
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // Check if Ramadan has arrived
    if (difference <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Add celebration effect
        celebrateRamadan();
    }
}

// Celebration animation
function celebrateRamadan() {
    const counterGrid = document.querySelector('.counter-grid');
    counterGrid.style.boxShadow = `
        0 0 80px rgba(212, 105, 29, 0.8),
        0 0 120px rgba(232, 168, 124, 0.6),
        inset 0 0 50px rgba(212, 105, 29, 0.3)
    `;
    
    // Show celebration modal
    showCelebrationModal();
    
    // Create celebration particles
    createConfetti();
    createFallingParticles();
}

// Create confetti effect
function createConfetti() {
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 30 + 20}, 100%, 60%)`;
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 2;
        const randomX = (Math.random() - 0.5) * 300;
        
        confetti.animate([
            { 
                transform: 'translateY(0) translateX(0) rotate(0deg)', 
                opacity: 1 
            },
            { 
                transform: `translateY(${window.innerHeight + 20}px) translateX(${randomX}px) rotate(360deg)`, 
                opacity: 0 
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Add number change animation
function addNumberAnimation(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'numberPulse 0.5s ease';
    }, 10);
}

// Update countdown every second
updateCountdown(); // Initial call
const countdownInterval = setInterval(updateCountdown, 1000);

// Add keyboard support for testing
document.addEventListener('keydown', (e) => {
    // For testing purposes only
    if (e.key === 't' && e.ctrlKey) {
        celebrateRamadan();
    }
});

// Pause animation on tab visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(countdownInterval);
    } else {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

// Falling particles effect
function createFallingParticles() {
    const particleCount = 30;
    const particles = ['🌙', '⭐', '✨', '💫'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'falling-particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-50px';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.zIndex = '999';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, (Math.random() * 3 + 3) * 1000);
    }
}

// Show celebration modal
function showCelebrationModal() {
    const modal = document.getElementById('celebrationModal');
    modal.classList.remove('hidden');
}

// Close celebration modal
function closeCelebration() {
    const modal = document.getElementById('celebrationModal');
    modal.classList.add('hidden');
}

// Share functions
function shareOnFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = window.location.href;
    const text = 'عداد رمضان 2027 - تحضر لشهر الخير والبركة! Ramadan 2027 Countdown - Prepare for the blessed month!';
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareOnWhatsApp() {
    const url = window.location.href;
    const text = 'عداد رمضان 2027 - شارك معي العد التنازلي لشهر الخير والبركة! 🌙';
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}

function shareOnTelegram() {
    const url = window.location.href;
    const text = 'عداد رمضان 2027 - عد تنازلي لشهر الخير والبركة!';
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        // Show success feedback
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="share-icon">✓</span>';
        copyBtn.style.background = 'rgba(37, 211, 102, 0.2)';
        copyBtn.style.borderColor = '#25D366';
        copyBtn.style.color = '#25D366';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
        }, 2000);
    }).catch(() => {
        alert('خطأ في نسخ الرابط');
    });
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('celebrationModal');
    if (e.target === modal) {
        closeCelebration();
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add number pulse animation to CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes numberPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes celebration {
        0% { 
            box-shadow: 0 0 50px rgba(212, 105, 29, 0.4), inset 0 0 30px rgba(212, 105, 29, 0.1);
        }
        50% { 
            box-shadow: 0 0 100px rgba(212, 105, 29, 0.8), inset 0 0 50px rgba(212, 105, 29, 0.3);
        }
        100% { 
            box-shadow: 0 0 50px rgba(212, 105, 29, 0.4), inset 0 0 30px rgba(212, 105, 29, 0.1);
        }
    }
`;
document.head.appendChild(style);
