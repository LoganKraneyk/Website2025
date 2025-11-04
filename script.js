/* Main JS entry */
(() => {
    const currentYearSpan = document.getElementById('year');
    if (currentYearSpan) {
        currentYearSpan.textContent = String(new Date().getFullYear());
    }
})();


