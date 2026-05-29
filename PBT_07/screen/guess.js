// Random số từ 1 - 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Giới hạn lượt đoán
const maxAttempts = 7;

let attempts = 0;

// Lưu các số đã đoán
let guessedNumbers = [];

alert("🎮 Chào mừng đến với game đoán số!");
alert("Bạn có 7 lượt để đoán số từ 1 đến 100.");


// Vòng lặp game
while (attempts < maxAttempts) {

    // Nhập dữ liệu
    let input = prompt(
        `Lượt ${attempts + 1}/${maxAttempts}\nNhập số từ 1 - 100:`
    );

    // Người dùng bấm Cancel
    if (input === null) {
        alert("Game đã thoát!");
        break;
    }

    // Chuyển sang số
    let guess = Number(input);

    // Kiểm tra hợp lệ
    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("❌ Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    // Kiểm tra đoán trùng
    if (guessedNumbers.includes(guess)) {
        alert("⚠️ Bạn đã đoán số này rồi!");
        continue;
    }

    // Lưu số đã đoán
    guessedNumbers.push(guess);

    // Tăng số lần đoán
    attempts++;

    // Kiểm tra kết quả
    if (guess === secretNumber) {

        alert(
            `🎉 Đúng rồi!\nBạn đã đoán đúng sau ${attempts} lần!`
        );

        break;
    }
    else if (guess < secretNumber) {

        alert(
            `📈 Cao hơn!\nBạn đoán sai sau ${attempts} lần!`
        );
    }
    else {

        alert(
            `📉 Thấp hơn!\nBạn đoán sai sau ${attempts} lần!`
        );
    }

    // Hết lượt
    if (attempts === maxAttempts) {

        alert(
            `💀 Bạn đã hết lượt!\nĐáp án là: ${secretNumber}`
        );
    }
}