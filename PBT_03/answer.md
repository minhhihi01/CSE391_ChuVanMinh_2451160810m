1. CSS Nội Tuyến (Inline CSS)
Cách dùng:

Viết trực tiếp trong thẻ HTML bằng thuộc tính style.

<p style="color:red; font-size:20px;">Xin chào</p>
Ưu điểm:
Nhanh, đơn giản.
Sửa trực tiếp 1 phần tử.
Nhược điểm:
Code rối nếu dùng nhiều.
Khó quản lý.
Không tái sử dụng.
Khi nào nên dùng:
Test nhanh giao diện.
Chỉnh riêng 1 phần tử.
2. CSS Nội Bộ (Internal CSS)
Cách dùng:

Viết trong thẻ <style> đặt trong <head>.

<!DOCTYPE html>
<html>
<head>
<style>
p{
   color:blue;
   font-size:18px;
}
</style>
</head>
<body>

<p>Xin chào</p>

</body>
</html>
Ưu điểm:
Gọn hơn inline.
Dùng cho nhiều phần tử trong 1 trang.
Nhược điểm:
Chỉ áp dụng cho 1 file HTML.
Nhiều trang sẽ phải viết lại.
Khi nào nên dùng:
Website nhỏ.
Trang đơn lẻ.
3. CSS Bên Ngoài (External CSS)
Cách dùng:

Tạo file .css riêng.

index.html
<link rel="stylesheet" href="style.css">
<p>Xin chào</p>
style.css
p{
   color:green;
   font-size:22px;
}
Ưu điểm:
Quản lý tốt.
Tái sử dụng nhiều trang.
Chuyên nghiệp.
Website tải nhanh hơn nhờ cache.
Nhược điểm:
Cần tạo thêm file.
Nếu link sai sẽ không chạy.
Khi nào nên dùng:
Website lớn.
Dự án chuyên nghiệp.
Nhiều trang web dùng chung giao diện.
