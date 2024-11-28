function showMessage() {
    document.getElementById('message').style.display = 'block';
}

function openBearGift(bearNumber) {
    const messages = {
        1: "Chúc Vy \nmãi xinh đẹp!",
        2: "Chúc Vy \nluôn vui vẻ!",
        3: "Chúc Vy \nhọc tập thật tốt!",
        4: "Chúc Vy \ncó người yêu!",
        5: "Chúc Vy \nluôn hạnh phúc!", 
    };

    const messageElement = document.getElementById(`message${bearNumber}`);
    messageElement.innerText = messages[bearNumber];
    messageElement.style.display = 'block'; // Hiển thị thông điệp
}