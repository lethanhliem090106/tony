(function() {
    const snowflakes = [];
    const mainContainer = document.querySelector('.main-container');
    let lastSnowflakeTime = 0;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄️';
        snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
        snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Thời gian rơi ngẫu nhiên
        snowflake.style.opacity = Math.random(); // Độ mờ ngẫu nhiên
        snowflake.style.fontSize = `${Math.random() * 10 + 30}px`; // Kích thước ngẫu nhiên

        mainContainer.appendChild(snowflake);
        snowflakes.push(snowflake);

        // Xóa bông tuyết sau khi nó rơi xuống
        setTimeout(() => {
            snowflake.remove();
            snowflakes.shift();
        }, (parseFloat(snowflake.style.animationDuration) * 1000)); // Xóa sau khi rơi xong
    }

    function animateSnowflakes(timestamp) {
        if (timestamp - lastSnowflakeTime > 200) { // Tạo bông tuyết mới mỗi 200ms
            createSnowflake();
            lastSnowflakeTime = timestamp;
        }

        snowflakes.forEach(snowflake => {
            const top = parseFloat(getComputedStyle(snowflake).top);
            if (top > window.innerHeight) {
                snowflake.remove();
                snowflakes.shift();
            }
        });

        requestAnimationFrame(animateSnowflakes);
    }

    // Khởi động animation
    requestAnimationFrame(animateSnowflakes);
})();
