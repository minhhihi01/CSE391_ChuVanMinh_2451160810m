Câu A1. CSS Nội Tuyến (Inline CSS)
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

Câu A2
1. .h1 → Chọn: ShopTLU
2. .giá → Chọn: 25.990.000đ, 45.990.000đ
3. #app header → Chọn: ShopTLU, Trang chủ, Sản phẩm, Giới thiệu
4. nav a:first-child → Chọn: Trang chủ
5. .product.featured h2 → Chọn: MacBook Pro
6. bài viết > p → Chọn: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm...
7. a[href="/"] → Chọn: Trang chủ
8. .top-bar.dark h1 → Chọn: ShopTLU

Câu A3
1. content-box
- Chiều rộng hiển thị = 450px
- Không gian chiếm trên trang = 470px

2. border-box
- Chiều rộng hiển thị = 400px
- Content thực tế = 350px
- Không gian chiếm trên trang = 420px

3. Margin collapse
- Khoảng cách giữa box-a và box-b = 40px
- Vì margin dọc không cộng mà lấy giá trị lớn hơn.

Nâng cao:
-10px và 40px => khoảng cách = 30px
Câu A4
Rule A: p                = (0,0,0,1)
Rule B: .price           = (0,0,1,0)
Rule C: #main-price      = (0,1,0,0)
Rule D: p.price          = (0,0,1,1)

Màu ban đầu: red
Vì Rule C có ID nên ưu tiên cao nhất.

Nếu có style="color: orange;"
→ màu orange

Nếu Rule A có !important
→ màu black

Vì !important mạnh hơn các rule thường.

Câu C1
1
Thanh bên = 300 + 40 + 2 = 342px
nội dung = 660 + 60 + 2 = 722px
2
Layout bị hỏng Sidebar + content = 342 + 722 = 1064px > 960px không đủ chỗ để đặt sidebar và nội dung trên cùng 1 hàng.
3
2 cách sửa
Cách 1 — Sử dụng border-box
Cách 2 — Không sử dụng hộp viền: giảm chiều rộng

Câu C2
1. Sản phẩm A:
font-size = 20px
color = green

2. Mô tả sản phẩm:
color = blue

3. Sản phẩm B:
font-size = 20px
color = blue

4. Mô tả sản phẩm B:
color = green