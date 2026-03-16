document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generator-btn');
    const numbersContainer = document.getElementById('numbers-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Switch to Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    generateBtn.addEventListener('click', () => {
        generateLottoNumbers();
    });

    function generateLottoNumbers() {
        numbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.textContent = number;
            numbersContainer.appendChild(circle);
        });
    }
});