Phần A

Câu A1 — var / let / const

Đoạn 1
console.log(x);
var x = 5;
Kết quả:
undefined
Giải thích:
var được hoisting.
Biến tồn tại nhưng chưa có giá trị.
Đoạn 2
console.log(y);
let y = 10;
Kết quả:
ReferenceError
Giải thích:
let có TDZ (Temporal Dead Zone).
Không được truy cập trước khai báo.
Đoạn 3
const z = 15;
z = 20;
console.log(z);
Kết quả:
TypeError
Giải thích:
const không cho gán lại giá trị.
Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Kết quả:
[1, 2, 3, 4]
Giải thích:
const không đổi tham chiếu.
Nhưng vẫn sửa được nội dung array/object.
Đoạn 5
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
Kết quả:
Trong block: 2
Ngoài block: 1
Giải thích:
let có block scope.

Câu A2 

console.log(typeof null);        

→ "object"

console.log(typeof undefined);

→ "undefined"

console.log(typeof NaN);

→ "number"

console.log("5" + 3);

→ "53"

console.log("5" - 3);

→ 2

console.log("5" * "3");

→ 15

console.log(true + true);

→ 2

console.log([] + []);

→ ""

console.log([] + {});

→ "[object Object]"

console.log({} + []);

→ 0 (trong console/browser thường vậy)

Vì sao "5" + 3 khác "5" - 3?
"5" + 3
+ ưu tiên nối chuỗi nếu có string.
Kết quả:
"53"
"5" - 3
- chỉ dùng cho toán học.
JavaScript ép "5" → 5

Kết quả:

2

Câu A3 

console.log(5 == "5");

→ true

console.log(5 === "5");

→ false

console.log(null == undefined);

→ true

console.log(null === undefined);

→ false

console.log(NaN == NaN);

→ false

console.log(0 == false);

→ true

console.log(0 === false);

→ false

console.log("" == false);

→ true

Nên dùng == hay ===?
Nên dùng:
===
Vì:
So sánh cả:
giá trị
kiểu dữ liệu
Tránh lỗi ép kiểu ngầm.

Câu A4 — Truthy & Falsy

TẤT CẢ giá trị Falsy trong JavaScript
false
0
-0
0n
""
null
undefined
NaN
Dự đoán kết quả
if ("0") console.log("A");

→ In "A"

if ("") console.log("B");

→ Không in

if ([]) console.log("C");

→ In "C"

if ({}) console.log("D");

→ In "D"

if (null) console.log("E");

→ Không in

if (0) console.log("F");

→ Không in

if (-1) console.log("G");

→ In "G"

if (" ") console.log("H");

→ In "H"

(chuỗi chứa dấu cách vẫn là truthy)


Câu A5 — Template Literals
Cách 1
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
Cách 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
Cách 3
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
Phần c 

Câu c1

1. Thiếu dấu ;
Code lỗi
return "Phần trăm giảm không hợp lệ"
Sửa
return "Phần trăm giảm không hợp lệ";
Giải thích
JavaScript có ASI (Automatic Semicolon Insertion)
Nhưng nên luôn thêm ; để tránh lỗi khó phát hiện.
2. So sánh sai bằng toán tử =
Code lỗi
if (giaSauGiam = 0)
Sửa
if (giaSauGiam === 0)
Giải thích
= là phép gán.
=== mới là so sánh nghiêm ngặt.

Code cũ thực tế:

giaSauGiam = 0

=> luôn gán thành 0.

3. giaBan là string thay vì number
Code lỗi
const gia = tinhGiaGiamGia("100000", 20)
Sửa
const gia = tinhGiaGiamGia(100000, 20);
Giải thích
"100000" là string.
JavaScript có ép kiểu ngầm nhưng không nên phụ thuộc vào điều đó.
4. Không kiểm tra kiểu dữ liệu đầu vào
Thiếu xử lý

Nếu:

tinhGiaGiamGia("abc", 20)

=> sẽ ra NaN.

Sửa
if (
    typeof giaBan !== "number" ||
    typeof phanTramGiam !== "number"
) {
    return "Dữ liệu không hợp lệ";
}
Giải thích
Nên validate dữ liệu đầu vào.
5. Không kiểm tra giá bán âm
Thiếu xử lý
tinhGiaGiamGia(-10000, 20)

=> vô lý.

Sửa
if (giaBan < 0) {
    return "Giá bán không hợp lệ";
}
6. Lỗi var trong vòng lặp + setTimeout
Code lỗi
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
Kết quả thực tế
Item 5
Item 5
Item 5
Item 5
Item 5
Vì sao?
var có function scope

Khi callback chạy sau 1 giây:

vòng lặp đã kết thúc
i = 5

Nên tất cả callback đều dùng cùng biến i.

Sửa bằng let
for (let i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log("Item " + i);

    }, 1000);
}
Kết quả đúng
Item 0
Item 1
Item 2
Item 3
Item 4
7. Nên dùng const thay cho var
Code cũ
var giamGia = giaBan * phanTramGiam / 100
Sửa
const giamGia = giaBan * phanTramGiam / 100;
Giải thích
Biến không thay đổi nên dùng const.