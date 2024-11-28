function showMessage() {
    const messageElement = document.getElementById('message');
    
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