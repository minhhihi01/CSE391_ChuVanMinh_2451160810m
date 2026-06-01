Cấp 2 — Vòng điều kiện & Vòng (Luồng điều khiển)
Thời gian: 35-45 phút
Yêu cầu: Hoàn thành Cấp 1
Mục tiêu: Sử dụng thành răn if/else, switch, loop loop for/while

📝 Bài 2.1 — Câu điều kiện if/else (10 phút)
Yêu cầu
Phân loại số và điều kiện

Mã mẫu
// ===== IF/ELSE cơ bản =====
let diem = 7.5;

if (diem >= 8) {
    console.log("Giỏi");
} else if (diem >= 6.5) {
    console.log("Khá");
} else if (diem >= 5) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}

// ===== Kiểm tra nhiều điều kiện =====
let tuoi = 20;
let coGPLX = true;

if (tuoi >= 18 && coGPLX) {
    console.log("Được phép lái xe");
} else if (tuoi >= 18 && !coGPLX) {
    console.log("Cần thi lấy bằng");
} else {
    console.log("Chưa đủ tuổi");
}

// ===== Toán tử 3 ngôi (Ternary) =====
let so = 10;
let ketQua = (so % 2 === 0) ? "Số chẵn" : "Số lẻ";
console.log(ketQua);

// ===== Kiểm tra giá trị rỗng =====
let ten = "";

if (!ten) {
    console.log("Chưa nhập tên");
} else {
    console.log("Xin chào", ten);
}
Thử nghiệm
Viết chương trình nhập điểm (0-10), theo loại:

= 9: Xuất x

= 8:i

= 7: Khá

= 5: Trung bình

< 5: Yếu (kiểm tra có >= 0 không)
Kiểm tra năm:

Chia hết cho 4 VÀ (không chia hết cho 100 HOẶC chia hết cho 400)
📝 Bài 2.2 — Hộp chuyển mạch (8 phút)
Yêu cầu
Chuyển đổi số thứ tự trong tuần

Mã mẫu
// ===== SWITCH cơ bản =====
let ngay = 3;

switch (ngay) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    case 4:
        console.log("Thứ Năm");
        break;
    case 5:
        console.log("Thứ Sáu");
        break;
    case 6:
        console.log("Thứ Bảy");
        break;
    case 0:
        console.log("Chủ Nhật");
        break;
    default:
        console.log("Ngày không hợp lệ");
}

// ===== SWITCH với nhóm case =====
let thang = 5;
let soNgay;

switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        soNgay = 31;
        break;
    case 4: case 6: case 9: case 11:
        soNgay = 30;
        break;
    case 2:
        soNgay = 28; // Giả sử không nhuận
        break;
    default:
        soNgay = -1;
}

console.log(`Tháng ${thang} có ${soNgay} ngày`);
Thử nghiệm
Tạo máy tính đơn giản: nhập 2 số và phép tính (+, -, *, /)
Sử dụng switch để thực hiện tính năng tương ứng
📝 Bài 2.3 — Vòng lặp FOR (10 phút)
Yêu cầu
Lặp lại dữ liệu và tính toán

Mã mẫu
// ===== FOR cơ bản =====
// In từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ===== Tính tổng 1 đến 100 =====
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong += i;
}
console.log("Tổng 1+2+...+100 =", tong);

// ===== Lặp qua mảng =====
let monHoc = ["HTML", "CSS", "JavaScript", "React"];

for (let i = 0; i < monHoc.length; i++) {
    console.log(`Môn ${i + 1}: ${monHoc[i]}`);
}

// ===== FOR...OF (cách viết ngắn hơn) =====
for (let mon of monHoc) {
    console.log("Học:", mon);
}

// ===== FOR...IN (cho object) =====
let sinhVien = {
    ten: "Minh",
    tuoi: 20,
    lop: "CNTT-K65"
};

for (let key in sinhVien) {
    console.log(`${key}: ${sinhVien[key]}`);
}

// ===== Vòng lặp lồng nhau =====
// Bảng cửu chương
for (let i = 2; i <= 9; i++) {
    console.log(`\n=== Bảng ${i} ===`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
Thử nghiệm
In tất cả các số chẵn từ 1 đến 50
Tìm kiếm số lượng lớn nhất trong mảng[4, 7, 2, 9, 1, 5]
Đếm có bao nhiêu số chia hết cho 3 trong khoảng 1-100
📝 Bài 2.4 — Vòng lặp WHILE (8 phút)
Yêu cầu
Sử dụng while và do-while

Mã mẫu
// ===== WHILE - kiểm tra điều kiện trước =====
let so = 1;
while (so <= 5) {
    console.log("Số:", so);
    so++;
}

// ===== WHILE - nhập cho đến khi đúng =====
// Giả lập: nhập số cho đến khi > 0
let nhap = -1;
let lanThu = 0;

while (nhap <= 0) {
    lanThu++;
    nhap = Math.floor(Math.random() * 10) - 3; // Random từ -3 đến 6
    console.log(`Lần thử ${lanThu}: ${nhap}`);
}
console.log(`Đã tìm thấy số dương: ${nhap}`);

// ===== DO...WHILE - chạy ít nhất 1 lần =====
let luaChon;
do {
    luaChon = Math.floor(Math.random() * 4) + 1;
    console.log("Lựa chọn:", luaChon);
} while (luaChon !== 3);

console.log("Đã chọn 3!");

// ===== BREAK và CONTINUE =====
// Break - dừng vòng lặp
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i); // In 1, 2, 3, 4
}

// Continue - bỏ qua lần lặp hiện tại
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; // Bỏ qua số chẵn
    console.log(i); // Chỉ in số lẻ
}
Thử nghiệm
Tính giai thừa của n (n!) bằng while
Tìm số Fibonacci đầu tiên lớn hơn 1000
In out all các số nguyên tố từ 2 đến 50
✅ Danh sách kiểm tra hoàn thành
Viết được if/else với nhiều điều kiện
Sử dụng toán tử 3 ngôi (ternary)
Use switch-case thay thế cho nhiều if-else
Viết vòng lặp cho cơ sở dữ liệu
Use for...of và for...in
Viết vòng lặp while và do-while
Hiểu break và tiếp tục
🎯 Tự đánh giá
Câu hỏi	Đúng/Sai
else ifphải đứng sauif	□
switchtự động chạy hết các trường hợp nếu không cóbreak	□
for...ofused for all Array and Object	□
whilecó thể làm dịu 0 lần	□
do...whileluôn chạy ít nhất 1 lần	□
breakdừng toàn bộ chương trình	□
← Quay lại: Cấp 1 — Cơ bản
→ Tiếp theo: Cấp 3 — Chức năng