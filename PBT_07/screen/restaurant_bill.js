// restaurant_bill.js

// =========================
// DỮ LIỆU MÓN ĂN
// =========================

const orders = [

    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },

    {
        name: "Trà đá",
        price: 5000,
        quantity: 3
    },

    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }

];


// =========================
// CÀI ĐẶT
// =========================

// Có tip hay không
const hasTip = true;

// Ngày hiện tại
const currentDay = "Wednesday";


// =========================
// HÀM FORMAT TIỀN
// =========================

function formatMoney(number) {

    return number.toLocaleString("vi-VN") + "đ";
}


// =========================
// TÍNH TIỀN
// =========================

let subtotal = 0;

console.log("╔══════════════════════════════════════════════╗");
console.log("║            HÓA ĐƠN NHÀ HÀNG                 ║");
console.log("╠══════════════════════════════════════════════╣");


// In danh sách món
for (let i = 0; i < orders.length; i++) {

    let item = orders[i];

    let itemTotal = item.price * item.quantity;

    subtotal += itemTotal;

    console.log(
        `║ ${i + 1}. ${item.name.padEnd(12)} x${item.quantity} ` +
        `@${Math.floor(item.price / 1000)}k ` +
        `= ${Math.floor(itemTotal / 1000)}k`.padEnd(16) +
        "║"
    );
}


// =========================
// GIẢM GIÁ
// =========================

let discountPercent = 0;

// Giảm theo tổng hóa đơn
if (subtotal > 1000000) {

    discountPercent = 15;
}
else if (subtotal > 500000) {

    discountPercent = 10;
}

// Giảm thêm thứ 4
if (currentDay === "Wednesday") {

    discountPercent += 5;
}

let discountAmount =
    subtotal * discountPercent / 100;


// Sau giảm giá
let afterDiscount =
    subtotal - discountAmount;


// =========================
// VAT
// =========================

let vat = afterDiscount * 0.08;


// =========================
// TIP
// =========================

let tip = 0;

if (hasTip) {

    tip = afterDiscount * 0.05;
}


// =========================
// TỔNG THANH TOÁN
// =========================

let finalTotal =
    afterDiscount + vat + tip;


// =========================
// IN HÓA ĐƠN
// =========================

console.log("╠══════════════════════════════════════════════╣");

console.log(
    `║ Tổng cộng:        ${formatMoney(subtotal).padStart(18)} ║`
);

console.log(
    `║ Giảm giá (${discountPercent}%): ${formatMoney(discountAmount).padStart(16)} ║`
);

console.log(
    `║ VAT (8%):         ${formatMoney(vat).padStart(18)} ║`
);

console.log(
    `║ Tip (5%):         ${formatMoney(tip).padStart(18)} ║`
);

console.log("╠══════════════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN:       ${formatMoney(finalTotal).padStart(18)} ║`
);

console.log("╚══════════════════════════════════════════════╝");
