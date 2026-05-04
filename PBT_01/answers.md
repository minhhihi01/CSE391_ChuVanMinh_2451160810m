Câu A1 
1. Khi nhập https://shopee.vn vào trình duyệt và nhấn Enter, thứ tự đúng ít nhất 5 bước xảy ra:
-Trình duyệt kiểm tra cache DNS nội bộ để xem đã có IP của shopee.vn chưa.
-Nếu chưa có, gửi yêu cầu tra cứu DNS tới DNS Server để lấy địa chỉ IP của website.
-Sau khi nhận IP, trình duyệt thiết lập kết nối TCP với máy chủ Shopee.
-Vì là HTTPS nên tiếp tục bắt tay SSL/TLS để mã hóa kết nối an toàn.
-Trình duyệt gửi HTTP Request (GET /) đến máy chủ Shopee.
-Máy chủ trả về HTTP Response gồm HTML, CSS, JS, hình ảnh...
-Trình duyệt đọc HTML, tạo DOM Tree.
-Tải tiếp CSS, JS, ảnh và tạo Render Tree.
-Kết xuất (Render) giao diện Shopee ra màn hình cho người dùng.
2. Tab Network trong Chrome DevTools cho thấy thông tin gì?

-Tab Network dùng để theo dõi toàn bộ dữ liệu mạng của trang web
Câu A2
Lỗi ngữ nghĩa trong đoạn HTML:

-<div class="header">nên sử dụng thẻ <header>để xác định phần đầu trang.
-<div class="menu">chứa các điều hướng liên kết, nên sử dụng thẻ <nav>.
-<div class="main">nên sử dụng thẻ <main>để bọc nội dung chính.
-<div class="product">nên sử dụng thẻ <article>cho một thẻ sản phẩm độc lập.
-<div class="title">nên sử dụng thẻ tiêu đề như <h2>hoặc <h3>.
-<div class="footer">nên dùng tháng <footer>
Câu A3
Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3
Câu A4
1.Khác nhau: thead: Tiêu đề cột tbody: Dữ liệu chính: Tổng kết Nguồn tham khảo: 05_tables_hyperlinks.md phần Table — Bảng dữ liệu Không nên sử dụng bảng để bố trí vì: -Khó bảo trì -Kém linh hoạt -Sai mục tiêu (bảng chỉ dùng cho hàng cột)
Câu B3
1. Nội dung tập tin `debug.html` sau khi sửa

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang web</title>
</head>
<body>

    <h1>Welcome to ShopTLU</h1>

    <header>
        <nav>
            <a href="home">Trang chủ</a>
            <a href="products">Sản phẩm</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>Sản phẩm hot</h2>
            <img src="iphone.jpg" alt="iPhone 16 Pro">
            <p>iPhone 16 Pro</p>
            <p>Giá: <b>25.990.000đ</b></p>
        </section>

        <section>
            <h2>Thông tin</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>iPhone</td>
                        <td>25tr</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>

    <aside>
        <p>Sidebar content</p>
    </aside>

    <footer>
        <p>Copyright 2026</p>
    </footer>

</body>
</html>
Câu C1
<!DOCTYPE html><html lang="vi"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Chi tiết sản phẩm</title></head><body>    <header>        <!-- header dùng cho phần đầu trang -->                <h1>ShopTLU</h1>        <!-- h1 là tiêu đề chính của website -->        <nav>            <!-- nav dùng cho khu vực điều hướng chính -->            <a href="/">Trang chủ</a>            <a href="/dien-thoai">Điện thoại</a>            <a href="/laptop">Laptop</a>        </nav>    </header>    <nav aria-label="breadcrumb">        <!-- nav vì breadcrumb là điều hướng phụ -->        <ol>            <!-- ol vì breadcrumb có thứ tự cấp bậc -->            <li><a href="/">Trang chủ</a></li>            <li><a href="/dien-thoai">Điện thoại</a></li>            <li>iPhone 16</li>        </ol>    </nav>    <main>        <!-- main là nội dung chính của trang -->        <section>            <!-- section nhóm khu vực sản phẩm -->            <h2>Hình ảnh sản phẩm</h2>            <figure>                <!-- figure dùng cho ảnh minh họa -->                <img src="img1.jpg" alt="Ảnh 1">            </figure>            <figure><img src="img2.jpg" alt="Ảnh 2"></figure>            <figure><img src="img3.jpg" alt="Ảnh 3"></figure>            <figure><img src="img4.jpg" alt="Ảnh 4"></figure>            <figure><img src="img5.jpg" alt="Ảnh 5"></figure>        </section>        <section>            <!-- section chứa thông tin sản phẩm -->            <h2>Thông tin sản phẩm</h2>            <article>                <!-- article là nội dung độc lập của 1 sản phẩm -->                <h3>iPhone 16</h3>                <p>Giá: 25.990.000đ</p>                <p>★★★★★ (120 đánh giá)</p>                <p>Mô tả ngắn sản phẩm...</p>            </article>        </section>        <section>            <!-- section chứa bảng thông số -->            <h2>Thông số kỹ thuật</h2>            <table>                <!-- table dùng cho dữ liệu hàng cột -->                <thead>                    <tr>                        <th>Thuộc tính</th>                        <th>Giá trị</th>                    </tr>                </thead>                <tbody>                    <tr>                        <td>Màn hình</td>                        <td>6.1 inch</td>                    </tr>                    <tr>                        <td>RAM</td>                        <td>8GB</td>                    </tr>                </tbody>            </table>        </section>        <section>            <!-- section cho đánh giá bình luận -->            <h2>Đánh giá / Bình luận</h2>            <article>                <!-- mỗi bình luận là nội dung độc lập -->                <h3>Nguyễn Văn A</h3>                <p>Sản phẩm rất tốt.</p>            </article>            <article>                <h3>Trần Văn B</h3>                <p>Giao hàng nhanh.</p>            </article>        </section>        <aside>            <!-- aside dùng cho nội dung phụ -->            <h2>Sản phẩm tương tự</h2>            <ul>                <li><a href="#">iPhone 15</a></li>                <li><a href="#">Samsung S25</a></li>                <li><a href="#">Xiaomi 15</a></li>            </ul>        </aside>    </main>    <footer>        <!-- footer là chân trang -->        <p>© 2026 ShopTLU</p>        <p>Liên hệ | Chính sách | Hỗ trợ</p>    </footer></body></html>
Câu C2
Việc dùng `<div>` cho mọi thứ rồi thêm class có thể giúp lập trình nhanh lúc đầu, nhưng về lâu dài lại gây nhiều bất lợi. HTML ngữ nghĩa không phải “học thêm cho phức tạp”, mà là cách mô tả đúng vai trò của nội dung để trình duyệt, công cụ tìm kiếm và thiết bị hỗ trợ hiểu trang web tốt hơn.

Thứ nhất, về **SEO**, các công cụ tìm kiếm như Google ưu tiên những trang có cấu trúc rõ ràng. Khi dùng các thẻ như `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, bot tìm kiếm dễ xác định đâu là nội dung chính, đâu là menu, đâu là bài viết. Nếu toàn bộ trang chỉ là nhiều `<div>`, Google phải suy đoán cấu trúc nên hiệu quả SEO có thể kém hơn.

Thứ hai, về **Accessibility (khả năng truy cập)**, người dùng sử dụng screen reader sẽ hưởng lợi rất lớn từ HTML ngữ nghĩa. Ví dụ, khi gặp thẻ `<nav>`, phần mềm đọc màn hình có thể báo “navigation region”, giúp người khiếm thị chuyển nhanh tới menu. Nếu chỉ dùng `<div class="menu">`, thiết bị hỗ trợ khó hiểu đây là khu vực điều hướng.

Ví dụ cụ thể: một trang bán hàng có phần sản phẩm chính nên đặt trong `<main>` và từng sản phẩm dùng `<article>`. Khi đó công cụ hỗ trợ, trình duyệt và bot tìm kiếm đều hiểu rõ đây là nội dung trọng tâm của trang.

Tuy nhiên, `<div>` vẫn rất phù hợp trong các trường hợp **không mang ý nghĩa nội dung**, chẳng hạn dùng để chia cột layout, nhóm các block để áp dụng CSS Grid/Flexbox, hoặc tạo container bao nhiều phần tử. Nói cách khác, `<div>` nên dùng cho bố cục, còn thẻ ngữ nghĩa nên dùng cho nội dung có vai trò rõ ràng.