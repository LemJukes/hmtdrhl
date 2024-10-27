// Main countdown function
function countdown(endDate, displayIds) {
    const now = new Date().getTime();
    const distance = endDate - now;

    let days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0;

    if (distance >= 0) {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        milliseconds = distance % 1000;
        microseconds = Math.floor(Math.random() * 10000); // Simulating microseconds

        document.getElementById(displayIds.days).innerText = days;
        document.getElementById(displayIds.hours).innerText = hours;
        document.getElementById(displayIds.minutes).innerText = minutes;
        document.getElementById(displayIds.seconds).innerText = seconds;
        document.getElementById(displayIds.milliseconds)?.innerText = milliseconds;
        document.getElementById(displayIds.microseconds)?.innerText = microseconds;
    } else {
        document.getElementById(displayIds.container).innerText = "Countdown finished";
    }
}

// Show specific page section
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}

// Initial countdown date
const countDownDate = new Date("Aug 12, 2024 08:00:00").getTime(); // Primary countdown
const secretCountdownDate = new Date("Aug 31, 2025 23:59:59").getTime(); // Secret countdown

// Update the countdown every 1 millisecond for main and every second for secret countdown
setInterval(() => countdown(countDownDate, {
    container: 'countdown',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    milliseconds: 'milliseconds',
    microseconds: 'microseconds'
}), 1);

setInterval(() => countdown(secretCountdownDate, {
    container: 'secret-countdown',
    days: 'secret-days',
    hours: 'secret-hours',
    minutes: 'secret-minutes',
    seconds: 'secret-seconds'
}), 1000);

// Default page load
document.addEventListener("DOMContentLoaded", () => {
    showPage('home');
    // Reveal button functionality
    const revealBtn = document.getElementById('reveal-btn');
    const revealAnswer = document.getElementById('reveal-answer');

    revealBtn.addEventListener('click', function() {
        revealAnswer.style.display = revealAnswer.style.display === 'none' || revealAnswer.style.display === '' ? 'block' : 'none';
        revealAnswer.style.opacity = revealAnswer.style.display === 'block' ? 1 : 0;
    });
});
