function showMessage() {
    document.getElementById('message').style.display = 'block';
    
}

function openBearGift(bearNumber) {
    const messages = {
        1: "Chúc Vy mãi xinh đẹp!",
        2: "Chúc Vy luôn vui vẻ!",
        3: "Chúc Vy thành công trong mọi việc!",
        4: "Chúc Vy luôn khỏe mạnh!",
        5: "Chúc Vy luôn hạnh phúc!", 
    };

    const messageElement = document.getElementById(`message${bearNumber}`);
    messageElement.innerText = messages[bearNumber];
    messageElement.style.display = 'block';
}

