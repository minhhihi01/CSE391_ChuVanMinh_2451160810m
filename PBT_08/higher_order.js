// =========================
// 1. pipe() - Nối chuỗi functions
// =========================
function pipe(...fns) {
    return function (value) {
        return fns.reduce(
            (result, fn) => fn(result),
            value
        );
    };
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5));
// → Kết quả: 20


// =========================
// 2. memoize() - Cache kết quả
// =========================
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            console.log("Lấy từ cache...");
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));


// =========================
// 3. debounce()
// =========================
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

// Chỉ "JavaScript" được in ra
search("J");
search("Ja");
search("Java");
search("JavaScript");


// =========================
// 4. retry()
// =========================
async function retry(fn, maxAttempts = 3) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        try {
            return await fn();
        } catch (error) {
            attempts++;

            console.log(
                `Lần thử ${attempts} thất bại`
            );

            if (attempts >= maxAttempts) {
                throw error;
            }
        }
    }
}


// =========================
// TEST RETRY
// =========================
let count = 0;

const unstableTask = async () => {
    count++;

    if (count < 3) {
        throw new Error("Server Error");
    }

    return "Thành công!";
};

retry(unstableTask)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));