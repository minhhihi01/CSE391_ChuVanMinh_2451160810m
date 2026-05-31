Câu A1 — Function Declaration vs Function Expression vs Arrow Function
1. Function Declaration
function tinhThueBaoHiem(luong) {

    const thue =
        luong > 11000000
            ? luong * 0.1
            : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
2. Function Expression
const tinhThueBaoHiem2 = function(luong) {

    const thue =
        luong > 11000000
            ? luong * 0.1
            : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
3. Arrow Function
const tinhThueBaoHiem3 = (luong) => {

    const thue =
        luong > 11000000
            ? luong * 0.1
            : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
Khác nhau về Hoisting
Function Declaration
Có hoisting đầy đủ
hello();

function hello() {
    console.log("Xin chào");
}
Kết quả:
Xin chào
Function Expression
hello();

const hello = function() {
    console.log("Xin chào");
};
Kết quả:
ReferenceError
Arrow Function
hello();

const hello = () => {
    console.log("Xin chào");
};
Kết quả:
ReferenceError
Giải thích
Loại hàm	Hoisting
Function Declaration	Có
Function Expression	Không
Arrow Function	Không
Function declaration được đưa toàn bộ hàm lên đầu.
Function expression và arrow function chỉ hoisting biến (const/let) nhưng chưa khởi tạo.
Câu A2 — Scope & Closure
Đoạn 1
function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());
Kết quả
1
2
3
2
2
Giải thích

Biến count được lưu trong closure.

Diễn biến:

increment → 1
increment → 2
increment → 3
decrement → 2
getCount → 2
Đoạn 2
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
Output

Sau ~100ms:

var: 3
var: 3
var: 3

Sau ~200ms:

let: 0
let: 1
let: 2
Vì sao var và let khác nhau?
var
var có function scope.
Chỉ tồn tại 1 biến i.

Khi callback chạy:

i === 3

nên tất cả đều in 3.

let
let có block scope.
Mỗi vòng lặp tạo biến riêng.

Tương đương:

{
   let j = 0;
}

{
   let j = 1;
}

{
   let j = 2;
}

nên callback nhớ đúng giá trị.

Câu A3 — Array Methods
const nums = [1,2,3,4,5,6,7,8,9,10];
1. Lấy số chẵn
nums.filter(n => n % 2 === 0);
2. Nhân mỗi số với 3
nums.map(n => n * 3);
3. Tính tổng
nums.reduce((sum, n) => sum + n, 0);
4. Tìm số đầu tiên > 7
nums.find(n => n > 7);
5. Có số > 10 không
nums.some(n => n > 10);
6. Tất cả > 0 không
nums.every(n => n > 0);
7. Tạo chuỗi chẵn/lẻ
nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
8. Đảo ngược không mutate
[...nums].reverse();
Câu A4 — Destructuring & Spread
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};
Destructuring
const {
    name,
    price,
    specs: { ram, color }
} = product;

console.log(name, price, ram, color);
Kết quả
iPhone 16 25990000 8 Titan
console.log(specs);
Kết quả
ReferenceError
Vì sao?

Ta chỉ destructure:

ram, color

không tạo biến specs.

Spread
const updated = {
    ...product,
    price: 23990000,
    sale: true
};
console.log(updated.price);

→ 23990000

console.log(updated.sale);

→ true

console.log(product.price);

→ 25990000

Gốc có đổi không?

Không.

Spread tạo object mới.

Spread Gotcha
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
Kết quả
16
Vì sao?

Spread chỉ copy nông (shallow copy).

copy.specs

và

product.specs

vẫn cùng tham chiếu object.

Muốn deep copy
const deepCopy = structuredClone(product);

hoặc:

const deepCopy =
    JSON.parse(JSON.stringify(product));


Câu C1 — Refactor Code
Code refactor sử dụng:
filter()
map()
sort()
destructuring
arrow function
const processOrders = (orders) => {

    return orders

        .filter(
            ({ status, total }) =>
                status === "completed" &&
                total > 100000
        )

        .map(({ id, customer, total }) => {

            const discount = total * 0.1;

            return {
                id,
                customer,
                total,
                discount,
                finalTotal: total - discount
            };
        })

        .sort(
            (a, b) =>
                b.finalTotal - a.finalTotal
        );
};
Ưu điểm sau refactor
Code cũ	Code mới
Dùng nhiều vòng lặp	Dùng array methods
Code dài	Ngắn gọn
Khó đọc	Dễ đọc
Dùng var	Dùng const
Sort thủ công	.sort() có sẵn
Tạo object dài dòng	Destructuring + shorthand
Câu C2 — miniArray Library
const miniArray = {

    // =====================
    // MAP
    // =====================
    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            result.push(
                fn(arr[i], i, arr)
            );
        }

        return result;
    },


    // =====================
    // FILTER
    // =====================
    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (fn(arr[i], i, arr)) {

                result.push(arr[i]);
            }
        }

        return result;
    },


    // =====================
    // REDUCE
    // =====================
    reduce(arr, fn, initialValue) {

        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {

            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );
        }

        return accumulator;
    }
};



// =====================
// TEST
// =====================

console.log(
    miniArray.map(
        [1, 2, 3],
        x => x * 2
    )
);
// → [2,4,6]


console.log(
    miniArray.filter(
        [1,2,3,4],
        x => x > 2
    )
);
// → [3,4]


console.log(
    miniArray.reduce(
        [1,2,3,4],
        (a,b) => a + b,
        0
    )
);
// → 10