Bài tập 1.2 — Phần Giới thiệu + Kỹ năng
🎬 Kịch bản mở đầu
Sau khi hoàn thành phần anh hùng, bạn cần xây dựng phần giới thiệu bản thân (Giới thiệu) và hiển thị kỹ năng (Kỹ năng) với thanh tiến trình.

📋 Yêu cầu
1. Giới thiệu
<section id="about" class="about-section">
    <div class="container">
        <div class="about-grid">
            <div class="about-image">
                <img src="https://via.placeholder.com/400x400" alt="Profile Photo">
            </div>
            <div class="about-content">
                <h2>About Me</h2>
                <p class="lead">I'm a passionate developer with 3+ years of experience building web applications.</p>
                <p>Specialized in Frontend development with React and Vue. Also experienced in Backend with Node.js and Python.</p>
            </div>
        </div>
    </div>
</section>
Yêu cầu:

Bố cục 2 cột (hình ảnh + văn bản) trên màn hình
Một cột (hình ảnh phía trên, văn bản phía dưới) trên thiết bị di động
Ảnh đại diện/hình ảnh có viền bo tròn (hình tròn hoặc bo tròn)
Văn bản có cấu trúc phân cấp: tiêu đề, đoạn mở đầu, nội dung chính.
2. Phần Kỹ năng
<section id="skills" class="skills-section">
    <div class="container">
        <h2>My Skills</h2>
        <div class="skills-grid">
            <div class="skill-item">
                <span class="skill-name">HTML5</span>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: 95%"></div>
                </div>
            </div>
            <!-- Thêm CSS, JavaScript, React, Node.js -->
        </div>
    </div>
</section>
Yêu cầu:

Bảng kỹ năng: 2 cột (máy tính để bàn), 1 cột (thiết bị di động)
Thanh tiến trình có hình ảnh động khi cuộn vào khung nhìn
Phần trăm hiển thị (hoặc nhãn)
🎨 Thông số thiết kế
Giới thiệu về phần
Kích thước ảnh đại diện: 300x300px (máy tính để bàn), 200x200px (điện thoại di động)
Khoảng cách giữa hình ảnh và văn bản: 3rem
Cỡ chữ chính: 1.25rem, độ đậm phông chữ: 300
Phần Kỹ năng
Chiều cao thanh kỹ năng: 12px
Hình nền thanh kỹ năng: #e2e8f0
Hiệu ứng tô màu theo tiến độ: chuyển màu (màu chính → màu phụ)
Hiệu ứng chuyển động: chuyển đổi chiều rộng 1 giây, giảm dần
🐛 Gợi ý
Lưới CSS cho phần Giới thiệu
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    align-items: center;
}

@media (max-width: 768px) {
    .about-grid { grid-template-columns: 1fr; }
}
Hoạt ảnh thanh tiến độ
.skill-progress {
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    height: 100%;
    width: 0; /* Start at 0 for animation */
    transition: width 1s ease-out;
}

/* Add class 'animate' via JS when in viewport */
.skill-progress.animate { width: 95%; }
Cấu trúc thanh kỹ năng
.skill-bar {
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
}
✅ Tiêu chí thành công
Giới thiệu phần thích ứng (2 cột → 1 cột)
Avatar hình tròn và đáp ứng
Lưới kỹ năng có khả năng thích ứng
Thanh tiến độ có hiệu ứng động khi cuộn
4 kỹ năng: HTML, CSS, JavaScript, React
📝 Thông báo cam kết dự kiến
[STYLE] Create about section layout
[FEATURE] Add skills progress bars
[REFACTOR] Optimize responsive breakpoints