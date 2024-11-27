(function() {
    const snowflakes = [];
    const mainContainer = document.querySelector('.main-container');

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

    // Tạo bông tuyết mới mỗi 200ms
    setInterval(createSnowflake, 200);
})();