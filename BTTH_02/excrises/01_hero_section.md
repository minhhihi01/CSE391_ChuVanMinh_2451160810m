Bài tập 1.1 — Phần tiêu đề + Phần chính
🎬 Kịch bản mở đầu
Bạn đã nhận được nhiệm vụ đầu tiên: xây dựng tiêu đề và anh hùng cho danh mục cá nhân. Designer đã gửi mockup nhưng bạn cần tự động chuyển sang code HTML/CSS.

📋 Yêu cầu
1. Tiêu đề (Điều hướng)
<!-- Phần header cần có -->
<header>
    <div class="logo">YourName</div>
    <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
    </nav>
</header>
Yêu cầu:

Tiêu đề cố định (luôn hiển thị ở đầu trang khi cuộn)
Logo bên trái, liên kết điều hướng bên phải
Liên kết điều hướng có hiệu ứng di chuột (gạch chân hoặc đổi màu)
Di động: Chuyển đổi menu Hamburger (dùng hộp kiểm hack hoặc :hover)
2. Phần Anh hùng
<section class="hero">
    <h1>Hi, I'm [Your Name]</h1>
    <p>Full-Stack Developer | UI Designer | Problem Solver</p>
    <a href="#portfolio" class="cta-button">View My Work</a>
</section>
Yêu cầu:

Chiều cao toàn bộ khung nhìn ( 100vh)
Độ dốc nền hoặc hình ảnh
Căn giữa nội dung theo chiều dọc và chiều ngang
Nút CTA với hiệu ứng di chuột (phóng to + đổ bóng)
🎨 Thông số thiết kế
Màu sắc (Biến CSS)
:root {
    --color-primary: #6366f1;    /* Indigo */
    --color-secondary: #8b5cf6;  /* Purple */
    --color-dark: #1e293b;       /* Slate dark */
    --color-light: #f8fafc;      /* Slate light */
    --color-text: #334155;       /* Slate text */
    --font-main: 'Segoe UI', sans-serif;
}
Kiểu chữ
Kích thước tiêu đề chính: 3.5rem (máy tính để bàn), 2.5rem (điện thoại di động)
Phụ đề chính: 1.25rem
Liên kết điều hướng: 1rem
Điểm ngắt
Màn hình nền: 1024px trở lên
Độ phân giải máy tính bảng: 768px - 1023px
Di động: < 768px
🐛 Gợi ý
Tiêu đề cố định
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--color-light);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
Tập trung vào anh hùng
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
Menu dành cho thiết bị di động (chỉ CSS)
/* Dùng checkbox hack */
.menu-toggle { display: none; }
.menu-toggle:checked ~ nav { display: flex; }
✅ Tiêu chí thành công
Tiêu đề cố định và có khả năng thích ứng
Hiệu ứng di chuột liên kết điều hướng đang hoạt động
Chiều cao toàn màn hình của Hero
Nút CTA có hoạt ảnh di chuột
Hoạt động chuyển đổi menu di động
Quy ước đúng về thông báo cam kết Git
📝 Thông báo cam kết dự kiến
[SETUP] Initialize project structure
[STYLE] Add base CSS variables and reset
[FEATURE] Implement header navigation
[FEATURE] Complete hero section with CTA