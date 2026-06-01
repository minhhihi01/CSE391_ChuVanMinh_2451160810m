Bài 1.1

Tại sao thành phần chỉ render 1 lần?
Vì lúc mới mở trang React chỉ gọi thành phần một lần để tạo giao diện ban đầu.
Khi nào nó sẽ hiển thị lại?
Khi thay đổi trạng thái (setState, useState), thay đổi props hoặc hiển thị lại thành phần.
Bài 1.2

Chạy BadCounter → nhấn nút → thấy gì? → Giá trị trong Console tăng (1, 2, 3, ...) nhưng số trên màn hình vẫn là 0.
Chạy GoodCounter → nhấn nút → thấy gì? → Số trên màn hình tăng lên (1, 2, 3, ...) sau mỗi lần nhấn.
Mở Console → tìm thấy nhật ký "render"几次? → Mỗi lần gọi setCount() thì thành phần sẽ hiển thị lại 1 lần (ở chế độ phát triển có thể thấy nhiều hơn ở React Strict Mode).