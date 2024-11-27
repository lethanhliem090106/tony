(function() {
    const snowflakes = [];
    const mainContainer = document.querySelector('.main-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄️';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * 10 + 20}px`;

        mainContainer.appendChild(snowflake);
        snowflakes.push(snowflake);

        setTimeout(() => {
            snowflake.remove();
            snowflakes.shift();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
})();

