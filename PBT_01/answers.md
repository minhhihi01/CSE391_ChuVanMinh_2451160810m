Câu A1

Các bước truy cập https://shopee.vn :
B1. Trình duyệt gửi yêu cầu từ máy khách
B2.Request đi qua router → nhà mạng → Internet
B3.Server nhận yêu cầu tại trung tâm dữ liệu
B4.Server xử lý yêu cầu
B5.Máy chủ trả lời
B6. Trình duyệt nhận dữ liệu
B7.Render giao diện trên màn hình – Nguồn: 01_introduction_html_universe.md phần "Cuộc hành trình 0,3 giây"
Tab Network được hiển thị:
Danh sách các yêu cầu
Mã trạng thái
tài nguyên
Thời gian và
Kích tệp
Ảnh trong ảnh chụp màn hình
Nguồn: 01_introduction_html_universe.md phần 4.3. Developer Tools (F12) — "Kính hiển vi" cho website
Câu A2

Lỗi:
Sử dụng div thay vì header, nav, main, footer
Không có sản phẩm nào
Không có tiêu đề h1
Ảnh không có alt
Nguồn: 04_visible_part_html.md phần Semantic HTML5 — "Thẻ có ý nghĩa”
kem:
<header>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>
<main>
    <article>
        <h1>iPhone 16 Pro</h1>
        <p>25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>
<footer>
    © 2026 ShopTLU
</footer>
Câu A3

Kết quả hiển thị:
Đề 1

Văn bản A Văn bản B

Hò 2

Văn bản C Văn bản D

Hò 3

Giải thích:
div is block-Scan cả dòng
span và strong là inline-Chỉ sử dụng nội dung
Nguồn: 04_visible_part_html.md phần Block vs Inline — Cơ bản hai loại phần tử
Câu A4

Khác nhau:
chủ đề: Tiêu đề cột
tbody:thảo luận tài liệu chính
tfoot: Tổng kết
Nguồn: 05_tables_hyperlinks.md phần Table — Dữ liệu bảng
Không nên sử dụng bảng để bố trí:
Khó bảo
Kem linh hoạt
Sai mục tiêu (bảng dùng chỉ cho cột hàng)
Câu B3

Lỗi 1: Dòng 1 — Thiếu !DOCTYPE html — Chỉnh sửa !DOCTYPE thành !DOCTYPE html
Lỗi 2: Dòng 4 — Không đóng thẻ tiêu đề — Thêm /title
Lỗi 3: Dòng 5 — Sai charset utf8 — Edit thành UTF-8
Lỗi 4: Dòng 8 — Tag h1 không đóng — Edit thành /h1
Lỗi 5: Dòng 12 — Thẻ a không đóng — Thêm /a
Lỗi 6: Dòng 20 — Ảnh thiếu dấu ngoặc kép và thiếu alt — Thêm src="..." và alt
Lỗi 7: Dòng 22 — Sai thứ tự b — Chỉnh sửa vị trí đúng mạnh
Lỗi 8: Dòng 31 — Bảng không có thead — Thêm thead
Lỗi 9: Dòng 29,30 — Table dùng td cho header — Edit thành th
Lỗi 10: Dòng 40 — Dùng 2 thẻ chính — Thay cái thứ 2 sang một bên
Lỗi 11: Dòng 45 — Tag p trong footer không đóng — Thêm /p
Lỗi 12: Thiếu ngôn ngữ trong html — Thêm lang="vi"
Câu B4

ngữ nghĩa:
header: Use for headers menu, logo, search search
phần: Sử dụng cho phần nội dung sản phẩm bao gồm hình ảnh, thông số, đánh giá
footer: Use for phần cuối trang bao gồm thông tin liên hệ, thông tin khác
bàn:
Trang sử dụng ul, li thay vì table để hiển thị danh mục sản phẩm
Không dùng thead, tbody
hình thức:
hành động: /tim-kiem
phương thức: không được khai báo mặc định của GET
các loại đầu vào: input id="skw" type="text"
Câu C1

<!-- header: phần đầu trang -->
<header>
    <!-- nav: menu điều hướng -->
    <nav>
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
    </nav>
</header>

<main> <!-- main: nội dung chính -->

    <!-- breadcrumb: điều hướng đường dẫn -->
    <nav aria-label="breadcrumb"> <!-- nav vì là điều hướng -->
        <ol> <!-- ol vì có thứ tự -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <!-- khu vực ảnh sản phẩm -->
    <section>
        <h2>Ảnh sản phẩm</h2>

        <div> <!-- div: nhóm nhiều ảnh -->
            <img src="https://placehold.co/200" alt="ảnh 1">
            <img src="https://placehold.co/200" alt="ảnh 2">
            <img src="https://placehold.co/200" alt="ảnh 3">
            <img src="https://placehold.co/200" alt="ảnh 4">
            <img src="https://placehold.co/200" alt="ảnh 5">
        </div>
    </section>

    <!-- thông tin sản phẩm -->
    <section>
        <h1>iPhone 16</h1> <!-- h1: tên sản phẩm chính -->
        <p>Giá: 25.990.000đ</p>
        <p>Đánh giá: ⭐⭐⭐⭐☆</p>
        <p>Mô tả sản phẩm...</p>
    </section>

    <!-- bảng thông số -->
    <section>
        <h2>Thông số kỹ thuật</h2>

        <table border="1"> <!-- table: dữ liệu dạng bảng -->
            <tr>
                <th>Thông số</th>
                <th>Chi tiết</th>
            </tr>
            <tr>
                <td>Màn hình</td>
                <td>6.7 inch</td>
            </tr>
            <tr>
                <td>Camera</td>
                <td>48MP</td>
            </tr>
        </table>
    </section>

    <!-- đánh giá / bình luận -->
    <section>
        <h2>Đánh giá</h2>

        <article> <!-- article: 1 bình luận -->
            <p>Người dùng A: Sản phẩm tốt</p>
        </article>

        <article>
            <p>Người dùng B: Đáng mua</p>
        </article>
    </section>

</main>

<!-- sidebar -->
<aside> <!-- aside: nội dung phụ -->
    <h2>Sản phẩm tương tự</h2>

    <article>
        <p>iPhone 15</p>
    </article>

    <article>
        <p>Samsung S24</p>
    </article>
</aside>

<!-- footer -->
<footer>
    <p>© 2026 Shop</p>
</footer>
Câu C2

Sử dụng div cho mọi thứ có thể giúp viết nhanh lúc đầu, nhưng về lâu dài là một lựa chọn giá trị về kỹ thuật. Về SEO, các công cụ tìm kiếm như Google dựa vào HTML ngữ nghĩa để hiểu cấu trúc trang. Nếu chỉ dùng div, Google khó phân biệt đâu là nội dung chính, đâu là menu hay footer,dẫn đến việc lập chỉ mục hiệu quả hơn. Về Khả năng truy cập, ngữ nghĩa HTML trợ giúp trang web có cấu trúc rõ ràng, dễ điều hướng và thân thiện hơn với người dùng, đặc biệt là khi truy cập trên nhiều thiết bị khác nhau. Một ví dụ cụ thể: khi xây dựng trang sản phẩm, nếu sử dụng bài viết cho từng sản phẩm, Google có thể hiểu đây là một nội dung độc lập, từ đó cải thiện khả năng hiển thị trên kết quả tìm kiếm. Đồng thời, Đồng thời, cấu trúc trang web cũng rõ ràng hơn so với một loạt div không có ý nghĩa.Tuy nhiên, không phải lúc nào div cũng sai. Trong thực tế, div vẫn rất phù hợp khi sử dụng container để nhóm các phần tử phục vụ cho bố cục hoặc tạo kiểu bằng CSS.
Câu D (Chú ý chất lượng míc thấp và âm thanh nhỏ nên cần cho âm lượng cao để nghe) https://drive.google.com/file/d/1HRZUwvt8Big2zs7_w5ue7N-yoe4QbaFU/view?usp=sharing