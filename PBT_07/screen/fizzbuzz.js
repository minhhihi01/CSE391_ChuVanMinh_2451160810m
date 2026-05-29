// fizzbuzz.js


// =========================
// Version 1: Classic FizzBuzz
// =========================

console.log("=== CLASSIC FIZZBUZZ ===");

for (let i = 1; i <= 100; i++) {

    // Chia hết cho cả 3 và 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " = FizzBuzz");
    }

    // Chia hết cho 3
    else if (i % 3 === 0) {
        console.log(i + " = Fizz");
    }

    // Chia hết cho 5
    else if (i % 5 === 0) {
        console.log(i + " = Buzz");
    }

    // Không chia hết
    else {
        console.log(i);
    }
}



// =========================
// Version 2: Custom FizzBuzz
// =========================

function customFizzBuzz(n, rules) {

    console.log("\n=== CUSTOM FIZZBUZZ ===");

    // Duyệt từ 1 -> n
    for (let i = 1; i <= n; i++) {

        let result = "";

        // Kiểm tra từng rule
        for (let j = 0; j < rules.length; j++) {

            // Nếu chia hết
            if (i % rules[j].divisor === 0) {

                // Ghép từ
                result += rules[j].word;
            }
        }

        // Nếu có kết quả
        if (result !== "") {
            console.log(i + " = " + result);
        }

        // Nếu không khớp rule nào
        else {
            console.log(i);
        }
    }
}



// =========================
// TEST
// =========================

customFizzBuzz(30, [

    { divisor: 3, word: "Fizz" },

    { divisor: 5, word: "Buzz" },

    { divisor: 7, word: "Jazz" }

]);


// Ví dụ:
// 15  = FizzBuzz
// 21  = FizzJazz
// 35  = BuzzJazz
// 105 = FizzBuzzJazz