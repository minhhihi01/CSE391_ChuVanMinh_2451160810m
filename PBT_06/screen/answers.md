Phần A
Câu A1
Bảng bố cục
Kích thước màn hình	< 768px	768px - 991px	≥ 992px
Số cột mỗi box	12 cột	6 cột	3 cột
Số box trên 1 hàng	1 box	2 box	4 box
Bố cục	Xếp dọc	2 hàng, mỗi hàng 2 box	1 hàng 4 box
Minh họa bố cục
1. Mobile (< 768px)
[ Box 1 ]
[ Box 2 ]
[ Box 3 ]
[ Box 4 ]
2. Tablet (768px - 991px)
[ Box 1 ] [ Box 2 ]
[ Box 3 ] [ Box 4 ]
3. Desktop (≥ 992px)
[ Box 1 ] [ Box 2 ] [ Box 3 ] [ Box 4 ]
Câu hỏi thêm
col-md-6 nghĩa là gì?
md = breakpoint medium (≥ 768px)
6 = chiếm 6/12 cột của Bootstrap Grid

=> Mỗi box chiếm 1 nửa hàng ở màn hình tablet trở lên.

Tại sao không cần viết col-sm-12?

Vì:

col-12

đã áp dụng cho mọi kích thước màn hình từ nhỏ trở lên.

Nó tương đương:

mobile: 12 cột
sm: 12 cột
md: bị ghi đè bởi col-md-6
lg: bị ghi đè bởi col-lg-3

Nên không cần viết thêm:

col-sm-12


Câu A2 — Utilities & Components
1. d-none d-md-block nghĩa là gì?
Phân tích:
d-none → ẩn phần tử
d-md-block → từ màn hình md (≥768px) thì hiển thị dạng block
Kết quả:
Kích thước	Hiển thị?
< 768px	Ẩn
≥ 768px	Hiện
2. 5 utility spacing và giải thích
Class	Ý nghĩa
mt-3	margin-top: thêm khoảng cách phía trên
mb-4	margin-bottom phía dưới
ms-2	margin-left (start)
px-4	padding trái + phải
py-5	padding trên + dưới
mx-auto	căn giữa ngang
p-3	padding tất cả các phía
3. Khác nhau giữa .container, .container-fluid, .container-md
Class	Đặc điểm
.container	Có chiều rộng cố định theo từng breakpoint, nằm giữa màn hình
.container-fluid	Chiếm toàn bộ chiều rộng màn hình 100%
.container-md	100% ở màn hình nhỏ, từ md trở lên mới có width cố định

Phần C

Câu 1

1. Đổi màu $primary từ mặc định sang #E63946
Quy trình thực hiện

Bootstrap dùng SASS/SCSS variables để quản lý màu sắc.

Muốn đổi màu $primary, cần:

Công cụ cần có
Node.js
npm
Bootstrap source SCSS
Trình biên dịch SASS (sass)
Các bước
Bước 1 — Cài Bootstrap
npm install bootstrap
Bước 2 — Tạo file SCSS

Ví dụ: custom.scss

// Ghi đè biến trước khi import Bootstrap
$primary: #E63946;

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
Bước 3 — Compile SCSS → CSS
sass custom.scss custom.css

Sau đó dùng:

<link rel="stylesheet" href="custom.css">
Kết quả

Toàn bộ thành phần dùng màu primary sẽ đổi:

.btn-primary
.bg-primary
.text-primary
navbar
alert
badge
link
focus states
2. Tại sao KHÔNG nên:
.btn-primary{
    background:red;
}
Vì cách này chỉ sửa 1 class riêng lẻ

Nhưng Bootstrap còn:

hover
active
disabled
border-color
focus shadow
text contrast

=> giao diện dễ bị lỗi hoặc không đồng bộ.

Ưu điểm dùng biến SASS
Đồng bộ toàn hệ thống

Khi sửa:

$primary: #E63946;

Bootstrap tự cập nhật:

nút
card
alert
form
badge
navbar
Dễ bảo trì
chỉ sửa 1 nơi
không cần ghi đè nhiều class
Tối ưu hơn

Không tạo CSS dư thừa và tránh conflict.


Câu C2 — So sánh CSS thuần và Bootstrap
1. CSS tĩnh (thuần) tạo navbar + card
HTML
<nav class="navbar">
    <h2>Shop</h2>

    <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
    </ul>
</nav>

<div class="card">
    <img src="product.jpg">

    <div class="content">
        <h3>Sản phẩm</h3>
        <p>Mô tả sản phẩm</p>
        <button>Mua ngay</button>
    </div>
</div>
CSS
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#333;
    color:white;
    padding:15px 30px;
}

.navbar ul{
    display:flex;
    gap:20px;
    list-style:none;
}

.card{
    width:300px;
    border:1px solid #ddd;
    border-radius:10px;
    overflow:hidden;
    margin:30px auto;
}

.card img{
    width:100%;
}

.content{
    padding:20px;
}

button{
    background:#0d6efd;
    color:white;
    border:none;
    padding:10px 15px;
    border-radius:5px;
}
2. Phiên bản Bootstrap
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <a class="navbar-brand" href="#">Shop</a>
</nav>

<div class="card" style="width:300px;">
    <img src="product.jpg" class="card-img-top">

    <div class="card-body">
        <h5 class="card-title">Sản phẩm</h5>

        <p class="card-text">
            Mô tả sản phẩm
        </p>

        <button class="btn btn-primary">
            Mua ngay
        </button>
    </div>
</div>
3. So sánh
Tiêu chí	CSS thuần	Bootstrap
Số dòng CSS	Nhiều	Ít
Thời gian phát triển	Chậm hơn	Nhanh
Responsive	Tự code media query	Có sẵn grid
Tùy biến	Rất cao	Bị giới hạn theo framework
Dễ học	Khó hơn	Dễ dùng nhanh
Kích thước file	Nhẹ	Nặng hơn
Tính đồng bộ	Phải tự quản lý	Có sẵn hệ thống UI
4. Khi nào NÊN dùng Bootstrap?
Nên dùng khi:
Làm nhanh prototype
Landing page
Dashboard admin
Dự án deadline ngắn
Team frontend nhỏ
Cần responsive nhanh
5. Khi nào KHÔNG nên dùng Bootstrap?
Không nên dùng khi:
Website cần thiết kế độc quyền
UI quá đặc biệt
Tối ưu hiệu năng cực cao
Muốn kiểm soát CSS hoàn toàn
Dự án lớn có design system riêng
