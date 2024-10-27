//script.js

// Example countdown function
function countdown(endDate) {
    let days, hours, minutes, seconds, milliseconds;
    
    // Calculate the remaining time
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance >= 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        milliseconds = distance % 1000;

        // Simulate microseconds by generating a random number between 0 and 999
        const simulatedMicroseconds = Math.floor(Math.random() * 10000);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        document.getElementById('milliseconds').innerText = milliseconds;
        document.getElementById('microseconds').innerText = simulatedMicroseconds;

    } else {
        // If the countdown is over, write some text 
        document.getElementById('countdown').innerText = "Countdown finished";
    }
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

// Set the date we're counting down to
const countDownDate = new Date("Aug 31, 2025 11:59:59").getTime(); // countdown end date

// Update the countdown every 1 millisecond
setInterval(() => countdown(countDownDate), 1);

// Show the home page by default
document.addEventListener("DOMContentLoaded", () => {
    showPage('home');
});

document.addEventListener('DOMContentLoaded', function() {
    const revealBtn = document.getElementById('reveal-btn');
    const revealAnswer = document.getElementById('reveal-answer');

    revealBtn.addEventListener('click', function() {
        if (revealAnswer.style.display === 'none' || revealAnswer.style.display === '') {
            revealAnswer.style.display = 'block';
            let opacity = 0;
            const fadeIn = setInterval(function() {
                if (opacity < 1) {
                    opacity += 0.05;
                    revealAnswer.style.opacity = opacity;
                } else {
                    clearInterval(fadeIn);
                }
            }, 50);
        } else {
            let opacity = 1;
            const fadeOut = setInterval(function() {
                if (opacity > 0) {
                    opacity -= 0.05;
                    revealAnswer.style.opacity = opacity;
                } else {
                    clearInterval(fadeOut);
                    revealAnswer.style.display = 'none';
                }
            }, 50);
        }
    });
});