function scrollTray(direction) {
    const tray = document.querySelector('.tray');
    const scrollAmount = 200; // Adjust as needed for scroll distance
    tray.scrollLeft += direction * scrollAmount;
}
// Scroll amount for each click
const scrollAmount = 100;

function scrollUp() {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({
        top: -scrollAmount,
        behavior: 'smooth'
    });
}

function scrollDown() {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
    });
}
function scrollTray3(direction) {
    const tray3 = document.querySelector('.tray3');
    const scrollAmount = 200; // Adjust as needed for scroll distance
    tray3.scrollLeft += direction * scrollAmount;
}
function scrollTray4(direction) {
    const tray4 = document.querySelector('.tray4');
    const scrollAmount = 200; // Adjust as needed for scroll distance
    tray4.scrollLeft += direction * scrollAmount;
}
