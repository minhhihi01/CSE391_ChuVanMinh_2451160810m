Câu A1

1. `type="email"` → Ô nhập văn bản dạng email, tự kiểm tra có ký tự `@` và tên miền hợp lệ → Dùng cho form đăng ký tài khoản / nhận hóa đơn điện tử.

2. `type="password"` → Ô nhập mật khẩu, ký tự bị ẩn bằng dấu chấm hoặc sao → Có thể kết hợp `minlength`, `pattern` để xác thực → Dùng cho đăng nhập tài khoản.

3. `type="text"` → Ô nhập văn bản một dòng thông thường → Không tự xác thực nếu không thêm thuộc tính khác → Dùng nhập họ tên, mã giảm giá.

4. `type="number"` → Ô nhập số, thường có nút tăng giảm → Tự kiểm tra chỉ nhận số, có thể dùng `min`, `max`, `step` → Dùng nhập số lượng sản phẩm.

5. `type="tel"` → Ô nhập số điện thoại → Không kiểm tra tuyệt đối, thường kết hợp `pattern` → Dùng nhập số điện thoại giao hàng.

6. `type="date"` → Hiển thị bộ chọn ngày trên trình duyệt → Có thể giới hạn bằng `min`, `max` → Dùng chọn ngày giao hàng hoặc ngày sinh.

7. `type="search"` → Ô tìm kiếm giống text nhưng tối ưu cho tìm kiếm, có nút xóa nhanh trên vài trình duyệt → Dùng thanh tìm kiếm sản phẩm.

8. `type="url"` → Ô nhập địa chỉ website → Tự kiểm tra định dạng liên kết hợp lệ → Dùng nhập website cửa hàng đối tác.

9. `type="checkbox"` → Hộp kiểm bật/tắt, có thể chọn nhiều mục → Dùng chọn đồng ý điều khoản, chọn nhiều sở thích sản phẩm.

10. `type="radio"` → Nút tròn chọn một trong nhiều lựa chọn cùng nhóm → Dùng chọn phương thức thanh toán (COD / Chuyển khoản / Ví điện tử).

Câu A2
TH1: dự đoán : trình duyêt chặn chặn gửi và hiển thị thông báo lỗi tại sao : do thuộc tính bắt buộc bắt buộc ô dữ liệu không được để trống, trong khi value= đang trống giá trị

TH2: dự đoán : Trình duyệt báo lỗi định dạng email không hợp lệ tại sao : type= email có cơ chế tự động kiểm tra cơ sở email định dạng. Chuỗi "abc" thiếu ký tự @và tên miền nền vi phạm xác thực.

TH3: dự đoán : giá trị lỗi của trình duyệt phải nhỏ hơn hoặc bằng 10 tại sao : thuộc tính max = 10 thiết lập giới hạn cho giá trị đầu vào, nhưng giá trị hiện tại là 15, vượt quá phạm vi cho phép

TH4: dự đoán : dữ liệu lỗi trình duyệt không khớp với định dạng được yêu cầu tại sao : thuộc tính pantern use Regular Expresion request true 10 chữ số từ 0-9. Giá trị "abc123" chứa chữ ký và không đủ độ dài nên bị từ chối

Câu A3
1. Tại sao <label for="email"> quan trọng cho trình đọc màn hình?

Thẻ <label> giúp liên kết nhãn mô tả với ô nhập liệu thông qua thuộc tính for trùng với id của input.

Ví dụ:

<label for="email">Email</label>
<input type="email" id="email">

Khi người dùng sử dụng trình đọc màn hình (screen reader), phần mềm sẽ đọc:

Email, ô nhập văn bản

Nhờ đó người khiếm thị biết chính xác ô đó dùng để nhập gì. Nếu không có <label>, trình đọc màn hình chỉ đọc “edit text” hoặc “input”, gây khó hiểu.

Ngoài ra, khi bấm vào chữ Email, con trỏ cũng tự chuyển vào ô nhập liệu, giúp thao tác dễ hơn.

2. Khi nào dùng <fieldset> + <legend>?

Dùng khi cần nhóm nhiều trường liên quan với nhau trong cùng một biểu mẫu.

<fieldset>: tạo nhóm các trường
<legend>: tiêu đề của nhóm đó

Ví dụ form đăng ký:

<fieldset>
    <legend>Thông tin cá nhân</legend>

    <label for="name">Họ tên</label>
    <input type="text" id="name">

    <label for="email">Email</label>
    <input type="email" id="email">
</fieldset>

Lợi ích:

Giúp người dùng dễ hiểu bố cục form
Screen reader sẽ đọc tên nhóm trước khi đọc từng trường
Tăng khả năng truy cập và trải nghiệm người dùng
3. aria-label sử dụng khi nào?

Dùng aria-label khi phần tử không có văn bản hiển thị rõ ràng nhưng vẫn cần mô tả cho công nghệ hỗ trợ.

Ví dụ nút chỉ có icon kính lúp:

<button aria-label="Tìm kiếm"></button>

Screen reader sẽ đọc:

Tìm kiếm, button
4. Tại sao KHÔNG nên dùng aria-label khi đã có <label>?

Vì nếu đã có <label> chuẩn HTML thì trình duyệt và screen reader đã hiểu sẵn. Dùng thêm aria-label có thể:

Trùng lặp thông tin
Gây xung đột tên gọi
Làm mã HTML phức tạp không cần thiết

Ví dụ tốt:

<label for="email">Email</label>
<input type="email" id="email">

Không cần thêm:

aria-label="Email"
Câu A4
1. Thuộc tính loading="lazy" trên thẻ<img>

Giải thích: Đây là kỹ thuật "tải chậm". Thay vì tải tất cả ảnh trên trang web ngay khi vừa mở (gây nặng), trình duyệt sẽ chỉ tải ảnh khi người dùng cuộn trang đến vị trí gần của ảnh đó.
(không rõ nghĩa)
Tốc độ tải trang (Tốc độ trang): Giảm dung lượng dữ liệu phải tải đầu trang, giúp trang web hiện nhanh hơn.
Tiết kiệm băng thông: Cực kỳ hữu ích cho người dùng sử dụng mạng 3G/4G vì họ không phải trả tiền cho những tấm ảnh mà họ chưa tiếp cận được để xem.
Khi nào KHÔNG nên dùng: Không dùng cho những ảnh ở đầu trang (Trong màn hình đầu tiên) – tức là những ảnh người dùng thấy ngay khi vừa mở web (như Logo hoặc ảnh Banner chính). Nếu sử dụng lười tải ở đây, người dùng sẽ tìm thấy một khoảng trắng trước khi ảnh hiện ra, gây ra trải nghiệm xấu.
2.Thẻ <video>và các định dạng

Tại sao nên sử dụng nhiều thẻ <source>? Vì mỗi trình duyệt (Chrome, Safari, Firefox) hỗ trợ các loại tệp khác nhau. Khi bạn cung cấp nhiều nguồn, trình duyệt sẽ tự động chọn định dạng tốt nhất mà nó có thể đọc được. If error format nhỏ nhất, it will be try to the two format.
3 phổ video định dạng:
MP4 (.mp4): Phổ biến nhất, tương thích hầu hết mọi trình duyệt và thiết bị.
WebM (.webm): Do Google phát triển, dung lượng nhẹ hơn MP4 nhưng chất lượng vẫn rất tốt, tối ưu cho web.
Ogg (.ogv): Mở nguồn mã hóa dạng định dạng, thường được sử dụng làm phương án dự phòng.
3. Thuộc tính alt (Văn bản thay thế)

Công dụng: Hiển thị bản văn thay thế nếu ảnh không tải được và trợ giúp trình đọc màn hình (cho người thị trường) mô tả nội dung ảnh. Ngoài ra, nó còn giúp Google hiểu được nội dung hình ảnh để làm SEO tốt hơn.
Cách viết alt tốt cho 3 trường hợp:
Ảnh sản phẩm iPhone 16: alt="Điện thoại iPhone 16 màu xanh Teal dung lượng 128GB mặt trước và sau" (Càng chi tiết càng tốt cho người mua hàng).
Ảnh trang trí (Trang trí): alt="" (Để trống). Nếu hình ảnh chỉ để làm cảnh báo, không mang nội dung, ta để trống để bỏ qua màn hình đọc, tránh làm phiền người dùng.
Biểu đồ doanh thu quý 1/2026: alt="Biểu đồ cột hiển thị doanh thu tăng trưởng 15% trong quý 1 năm 2026" ( Phải mô tả được thông tin chính mà biểu đồ đang biểu diễn).
Câu A5 
Sử dụng Cách 1 khi hình ảnh chỉ đóng vai trò là một thành phần hỗ trợ hoặc biểu tượng đi kèm với văn bản, không cần chú thích đặc biệt và nếu thiếu nó thì nội dung chính vẫn không bị mất ý nghĩa hoàn toàn. Đặc điểm: Đơn giản, nhanh gọn, thường dùng cho các hình ảnh mang tính nhận dạng hoặc trang trí.
Ví dụ thực tế 1: Logo công ty trên thanh Header. Logo này chỉ cần thuộc tính alt để định danh, không bao giờ cần dòng chú thích ở bên dưới.
Ví dụ thực tế 2: Icon tính năng (ví dụ: Icon hình chiếc xe tải bên cạnh chữ "Giao hàng miễn phí").
Sử dụng Cách 2 khi hình ảnh là một đơn vị nội dung độc lập (khép kín). Dòng chú thích (figcaption) giúp bổ sung thông tin quan trọng cho hình ảnh và khối này có thể chuyển đến vị trí khác trong bài viết mà không làm thay đổi ý nghĩa của mạch văn chính. Đặc điểm: Tăng tính nghĩa ngữ nghĩa (Ngữ nghĩa), giúp trình duyệt và công cụ tìm kiếm hiểu rằng hình ảnh và chú thích là một thực tế nhất.
Ví dụ thực tế 1: Ảnh chi tiết sản phẩm trong đánh giá (Review). Ví dụ: Ảnh chụp cụm camera của iPhone kèm theo chú thích "Camera quan cảnh cảm biến chính 48MP".
Ví dụ thực tế 2: Biểu đồ hoặc sơ đồ minh họa trong bài tin tức công nghệ. Ví dụ: Sơ đồ cấu trúc chip A18 kèm theo chú thích "Sơ đồ kiến ​​trúc 6 nhân của chip Apple A18".
Câu C1
Lỗi 1:

Dòng 2 — Input "Tên" không có <label for="">, vi phạm accessibility.

Sửa:

<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
Lỗi 2:

Dòng 2 — Input tên thiếu thuộc tính name.

Sửa: thêm name="name"

Lỗi 3:

Dòng 4 — Input email không có <label> liên kết.

Sửa:

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
Lỗi 4:

Dòng 6-7 — Hai ô mật khẩu không có label rõ ràng.

Sửa: thêm <label> riêng cho từng ô.

Lỗi 5:

Dòng 6-7 — Ô mật khẩu thiếu ràng buộc tối thiểu ký tự.

Sửa: thêm:

minlength="8" required
Lỗi 6:

Dòng 9 — Phone dùng type="text" chưa đúng.

Sửa:

<input type="tel" id="phone" name="phone" pattern="[0-9]{10}">
Lỗi 7:

Dòng 11 — <select> không có label và không có name.

Sửa:

<label for="city">Thành phố:</label>
<select id="city" name="city">
Lỗi 8:

Dòng 16 — Checkbox điều khoản thiếu ô chọn checkbox thật, chỉ có label.

Sửa:

<input type="checkbox" id="agree" name="agree" required>
<label for="agree">Tôi đồng ý điều khoản</label>
Câu C2
1. Pattern biểu thức chính quy
CMND / CCCD (đúng 12 chữ số)
pattern="[0-9]{12}"

Giải thích: chỉ chấp nhận đúng 12 ký tự số từ 0 đến 9.

Số tài khoản (10 đến 15 chữ số)
pattern="[0-9]{10,15}"

Giải thích: chỉ cho phép từ 10 đến 15 chữ số.

Email bắt buộc
<input type="email" required>

HTML5 tự kiểm tra định dạng email.

PIN (6 chữ số, không hiển thị)
<input type="password" pattern="[0-9]{6}" maxlength="6" required>
2. Xác thực HTML5 có đủ an toàn cho ứng dụng ngân hàng không?

Không đủ an toàn.

HTML5 chỉ hỗ trợ kiểm tra phía trình duyệt (frontend) để giúp người dùng nhập đúng định dạng. Người dùng hoặc hacker có thể:

Tắt validation của trình duyệt
Sửa mã HTML bằng DevTools
Gửi request trực tiếp bằng Postman / API
Giả mạo dữ liệu gửi lên server

Vì vậy hệ thống ngân hàng bắt buộc phải kiểm tra lại ở Backend.

3. Ba loại xác thực HTML5 KHÔNG THỂ làm được (phải dùng JavaScript hoặc Backend)
1. So sánh hai mật khẩu có giống nhau không

Ví dụ:

Mật khẩu
Nhập lại mật khẩu

HTML5 không tự so sánh được.

2. Kiểm tra CMND đã tồn tại trong hệ thống chưa

Phải gửi dữ liệu lên server kiểm tra database.

3. Kiểm tra số dư tài khoản có đủ để chuyển tiền không

Phải xử lý phía server theo dữ liệu thật.

4. Hai rủi ro bảo mật nếu chỉ xác thực Frontend
Rủi ro 1: Người dùng gửi dữ liệu giả hoặc sai định dạng

Ví dụ:

số tài khoản sai
email giả
ký tự độc hại

Nếu backend không kiểm tra sẽ lưu dữ liệu lỗi.

Rủi ro 2: Bị tấn công bảo mật

Kẻ xấu có thể gửi:

SQL Injection
dữ liệu độc hại
request giả mạo

Nếu server không validate sẽ gây rò rỉ hoặc phá hoại hệ thống.