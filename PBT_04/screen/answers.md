Phần A: Kiểm tra khả năng đọc hiểu
Câu A1 — 5 Loại Định Vị
Chức vụ	Luôn sử dụng dung lượng trong luồng?	Tham chiếu vị trí	X theo trang?	Trường hợp sử dụng
static	Có	Không sử dụng trên/trái/dưới/phải	Có	Default, không cần thiết phải can thiệp
relative	Có	Vị trí gốc của chính nó	Có	Dịch chuyển nhẹ nhàng, làm phòng cho con tuyệt đối
absolute	Không	Thẻ cha gần nhất có vị trí khác tĩnh	Có (cuộn cùng cha)	Huy hiệu trên biểu tượng, menu thả xuống, chú giải công cụ
fixed	Không	7 trình duyệt	No — Gmail tại chỗ	Nút trò chuyện, lớp phủ cửa sổ bật lên
sticky	Có → Không (khi dính)	Cửa sổ trình duyệt (sau khi đạt ngưỡng)	Có → Không (dính khi cuộn đến ngưỡng)	Tiêu đề cố định, thanh bên
position: absolutesẽ tự động leo lên cây HTML để tìm thẻ khác gần nhất positioncó static. Nếu tìm thấy, hãy sử dụng thẻ đó để làm việc ở chế độ gốc. Nếu leo ​​hết lên mà không tìm thấy thì tính từ body.
Tổ tiên ở vị trí gần nhất" là thẻ cha gần nhất có khai báo positionkhác static.
Câu A2 — Flexbox so với Grid
Trường hợp 1
.container {
  display: flex;
}
.item {
  flex: 1;
}
/* 4 items */
┌─────────────────────────────────────────────────────┐
│  CONTAINER (100% width)                             │
│ ┌──────────┬──────────┬──────────┬──────────┐       │
│ │  Item 1  │  Item 2  │  Item 3  │  Item 4  │       │
│ │  (25%)   │  (25%)   │  (25%)   │  (25%)   │       │
│ └──────────┴──────────┴──────────┴──────────┘       │
└─────────────────────────────────────────────────────┘
Giải thích:

display: flex→ sắp xếp các mục thành ngang 1 hàng (mặc định flex-direction: row)
flex: 1=flex-grow: 1; flex-shrink: 1; flex-basis: 0%
Cả 4 item cùng flex: 1→ chia đều container theo chiều ngang
Trường Hợp 2
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 45%;
  margin: 2.5%;
}
/* 6 items */
┌─────────────────────────────────────────────────────┐
│  CONTAINER                                          │
│  ┌───────────────┐  ┌───────────────┐               │
│  │    Item 1     │  │    Item 2     │               │
│  │  (45% + 5%m)  │  │  (45% + 5%m)  │               │
│  └───────────────┘  └───────────────┘               │
│  ┌───────────────┐  ┌───────────────┐               │
│  │    Item 3     │  │    Item 4     │               │
│  └───────────────┘  └───────────────┘               │
│  ┌───────────────┐  ┌───────────────┐               │
│  │    Item 5     │  │    Item 6     │               │
│  └───────────────┘  └───────────────┘               │
└─────────────────────────────────────────────────────┘
Giải thích:

Mỗi mục sử dụng: width 45% + margin-left 2.5% + margin-right 2.5%= 50% tổng chiều ngang
flex-wrap: wrap→ khi không đủ chỗ, item xuống hàng
100% 50% = 2 món mỗi hàng
6 món ÷ 2 = 3 hàng
Trường Hợp 3
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 3 items */
┌─────────────────────────────────────────────────────┐
│  CONTAINER                                          │
│                                                     │
│  ┌────────┐          ┌────────┐          ┌────────┐ │
│  │ Item 1 │          │ Item 2 │          │ Item 3 │ │
│  └────────┘          └────────┘          └────────┘ │
│    (trái)             (giữa)               (phải)   │
│                                                     │
└─────────────────────────────────────────────────────┘
     ↑                    ↑                    ↑
  sát trái          căn giữa ngang          sát phải
  (cả 3 đều căn giữa dọc nhờ align-items: center)
Giải thích:

justify-content: space-between→ item đầu trái, item cuối phải, item giữa chính giữa, khoảng cách đều nhau giữa các item
align-items: center→ Tất cả các mục nằm giữa chiều dọc
Trường Hợp 4
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 20px;
}
/* 3 items */
┌─────────────────────────────────────────────────────┐
│  CONTAINER (ví dụ 1000px)                           │
│                                                     │
│ ┌──────────┐ ┌──────────────────────┐ ┌──────────┐  │
│ │          │ │                      │ │          │  │
│ │  Item 1  │ │       Item 2         │ │  Item 3  │  │
│ │  200px   │ │   1fr (linh động)    │ │  200px   │  │
│ │          │ │                      │ │          │  │
│ └──────────┘ └──────────────────────┘ └──────────┘  │
│   ← 200px →  ←────── ~560px ────────→  ← 200px →    │
│              (gap 20px giữa mỗi cột)                │
└─────────────────────────────────────────────────────┘
Giải thích:

Cột 1: cố định 200px
Cột 2: 1fr= sử dụng toàn bộ phần còn lại sau khi trừ 200px + 200px + 2 khoảng cách
Cột 3: cố định 200px
Tính chiều rộng cột giữa (giả sử container = 1000px):1fr = 1000px - 200px - 200px - (20px × 2) = 560px
Trường hợp 5
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
/* 7 items */
┌─────────────────────────────────────────────────────┐
│  CONTAINER                                          │
│                                                     │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐     │
│ │   Item 1    │ │   Item 2    │ │   Item 3    │     │
│ └─────────────┘ └─────────────┘ └─────────────┘     │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐     │
│ │   Item 4    │ │   Item 5    │ │   Item 6    │     │
│ └─────────────┘ └─────────────┘ └─────────────┘     │
│ ┌─────────────┐                                     │
│ │   Item 7    │   (trống)          (trống)          │
│ └─────────────┘                                     │
│   ← 1fr →       ← 1fr →           ← 1fr →           │
│                                                     │
└─────────────────────────────────────────────────────┘
Giải thích:

repeat(3, 1fr)→ 3 cột đều nhau
7 mục `3 cột = 2 hàng đầy + thiếu 1 hàng
Hàng 1: Mặt hàng 1, 2, 3
Hàng 2: Mặt hàng 4, 5, 6
Hàng 3: Item 7 — chỉ có 1 item, nằm ở cột đầu tiên (trái)
Item 7 không được mở rộng tự động để điền đầy đủ - nó giữ kích thước nguyên 1frcủa cột
Phần C: Suy luận
Câu C1 — Flexbox vs Grid: Khi nào dùng gì?
Thanh điều hướng ngang (logo + menu + nút)
Dùng: Flexbox
Thanh điều hướng là 1 chiều — sắp xếp các mục ngang theo trục X. Flexbox sinh ra để xử lý đúng kiểu này: justify-content: space-betweenĐưa logo trái, giữa menu, nút phải. align-items: centertrung tâm hoàn hảo chỉ 1 dòng
Lưới ảnh Instagram (3 cột đều nhau, số ảnh chưa biết trước)
Dùng: Lưới
Cần xác định bố cục 2 chiều — cố định 3 cột, ảnh tự động xuống hàng. grid-template-columns: repeat(3, 1fr)xử lý rút gọn, không cần biết có bao nhiêu hình ảnh. Flexbox cũng làm được nhưng phải tính calc()thủ công, dễ bị trôi.
Bố cục blog: nội dung chính + thanh bên
Dùng: Lưới
Đây là bố cục 2 rõ ràng với các kích thước khác nhau, ví dụ grid-template-columns: 1fr 300px. Kiểm tra tỷ lệ lưới 2 cột chính xác hơn, dễ đáp ứng hơn khi sử dụng minmax().
Footer with 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
Use: Grid hoặc Flexbox — cả hai đều được
Nếu 4 cột đều nhau: Flexbox với flex: 1đơn giản hơn. If cần kiểm tra từng cột khác nhau (cột 1 rộng hơn, cột 4 thu hẹp hơn): Lưới rõ ràng hơn. Thực tế dùng Grid cho chắc chắn vì điều này dễ dàng đáp ứng.
Card sản phẩm (ảnh trên, văn bản giữa, nút dưới — nút luôn Đáy)
Dùng: Flexbox
Thẻ được bố trí 1 chiều theo chiều dọc — flex-direction: column. Thủ thuật quan trọng: margin-top: autotrên nút "Mua" Đưa nút xuống đáy thẻ bất kể nội dung văn bản dài hay ngắn. Lưới không có cách xử lý tự nhiên cho thủ thuật này.
Câu C2 — Gỡ lỗi Flexbox
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
Nguyên nhân: card không có display: flex; flex-direction: columncác phần tử bên trong bình thường, nút không có cách để Đáy.
kem:
.card-container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 30%;
  margin: 1.5%;
  display: flex; /* thêm */
  flex-direction: column; /* thêm */
}
.card img {
  width: 100%;
}
.card h3 {
  font-size: 18px;
}
.card .btn {
  padding: 10px;
  margin-top: auto; /* thêm — đẩy nút xuống đáy */
}
Lỗi 2: Các mục muốn nằm giữa chiều dọc trong vùng chứa 100vh, nhưng mục vẫn giữ góc trái trên
Nguyên nhân: display: flextạo flex container nhưng không có justify-contentvà align-itemsnên mặc định là flex-start— góc trái trên.

kem:

.hero {
  height: 100vh;
  display: flex;
  justify-content: center; /* thêm — căn giữa ngang */
  align-items: center; /* thêm — căn giữa dọc */
}
.hero-content {
  text-align: center;
}
Lỗi 3: Thanh bên được co lại khi nội dung quá dài
Nguyên nhân: Mặc định Flexbox cho phép các mục được quay lại ( flex-shrink: 1). Khi nội dung dài, flex container cố chia đều bằng nhau, sidebar được ép nhỏ hơn 250px.

phH:

.layout {
  display: flex;
}
.sidebar {
  width: 250px;
  flex-shrink: 0; /* thêm — không cho co lại */
}
.content {
  flex: 1;
}