const sound = document.getElementById('click-sound');

function showMessage() {
    const messageElement = document.getElementById('message');
    
    // Phát âm thanh khi nhấn
    sound.play();

    // Kiểm tra xem thông điệp đã hiển thị chưa
    if (messageElement.style.display === 'block') {
        messageElement.style.display = 'none'; // Ẩn thông điệp
    } else {
        messageElement.style.display = 'block'; // Hiển thị thông điệp
    }
}

function openBearGift(bearNumber) {
    const messages = {
        1: "Chúc Vy \nmãi xinh đẹp!",
        2: "Chúc Vy \nluôn vui vẻ!",
        3: "Chúc Vy \nhọc tập thật tốt!",
        4: "Chúc Vy \nthi được A+ !",
        5: "Chúc Vy \nluôn hạnh phúc!", 
    };

    const messageElement = document.getElementById(`message${bearNumber}`);
    
    // Kiểm tra xem thông điệp đã hiển thị chưa
    if (messageElement.style.display === 'block') {
        messageElement.style.display = 'none'; // Ẩn thông điệp
    } else {
        messageElement.innerText = messages[bearNumber];
        messageElement.style.display = 'block'; // Hiển thị thông điệp
    }
}

function startCountdown() {
    const countDownDate = new Date("November 30, 2024 00:00:00").getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "SINH NHẬT VUI VẺ";
        }
    }, 1000);
}

// Bắt đầu đếm ngược khi trang tải
window.onload = startCountdown;