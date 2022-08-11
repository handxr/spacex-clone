const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('body-overflow');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    }
    if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach(counter => {
        counter.innerText = 0;
        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute('data-target');
            // Get current counter value
            const c = +counter.innerText;
            // Create an increment
            const increment = target / 100;
            // Check if target is reached
            if (c < target) {
                // Add increment to current counter value
                counter.innerText = Math.ceil(c + increment);
                // Call function every 750ms
                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    })
}

function reset() {
    counters.forEach(counter => {
        counter.innerText = 0;
    })
}