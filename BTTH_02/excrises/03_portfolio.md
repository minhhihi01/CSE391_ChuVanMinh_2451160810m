Bài tập 2.3 — Giao diện người dùng phần bình luận
🎬 Kịch bản mở đầu
Phần blog cần có giao diện người dùng hệ thống bình luận. Nhà thiết kế muốn nhận xét theo luồng với hình đại diện, dấu thời gian và nút trả lời.

📋 Yêu cầu
1. Mẫu phiếu góp ý
<div class="card mb-4">
    <div class="card-header bg-white">
        <h5 class="mb-0">Leave a Comment</h5>
    </div>
    <div class="card-body">
        <form>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="comment" class="form-label">Comment</label>
                <textarea class="form-control" id="comment" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Post Comment</button>
        </form>
    </div>
</div>
2. Hiển thị bình luận theo luồng
<div class="comments-section">
    <h5 class="mb-4">3 Comments</h5>

    <!-- Parent Comment -->
    <div class="comment mb-4">
        <div class="d-flex">
            <img src="https://via.placeholder.com/50" class="rounded-circle me-3" alt="Avatar">
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">John Doe</h6>
                    <small class="text-muted">2 hours ago</small>
                </div>
                <p class="mb-2">Great article! Very helpful for beginners.</p>
                <button class="btn btn-sm btn-link text-decoration-none">
                    <i class="bi bi-reply"></i> Reply
                </button>

                <!-- Nested Reply -->
                <div class="comment reply ms-5 mt-3">
                    <div class="d-flex">
                        <img src="https://via.placeholder.com/40" class="rounded-circle me-3" alt="Avatar">
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="mb-0">Author</h6>
                                <small class="text-muted">1 hour ago</small>
                            </div>
                            <p class="mb-2">Thank you! Glad it helped.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- More comments... -->
</div>
🎨 Thông số thiết kế
Avatar
.comment img.rounded-circle {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.comment.reply img.rounded-circle {
    width: 40px;
    height: 40px;
}
Thụt lề trả lời
.comment.reply {
    border-left: 3px solid #e2e8f0;
    padding-left: 1rem;
}
Nút hành động bình luận
.btn-link {
    color: var(--bs-primary);
    text-decoration: none;
}

.btn-link:hover {
    color: darken(var(--bs-primary), 10%);
}
🐛 Gợi ý
Biểu tượng Bootstrap
<!-- Add in <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">

<!-- Use -->
<i class="bi bi-reply"></i>
Khoảng cách trả lời lồng nhau
.comment.reply.ms-5 {
    margin-left: 3rem;
}
✅ Tiêu chí thành công
Biểu mẫu bình luận (tên, email, nội dung)
Hiển thị 3 bình luận của phụ huynh
Hiển thị 1 câu trả lời lồng nhau
Hình ảnh đại diện được hiển thị
Định dạng dấu thời gian
Giao diện người dùng của các nút trả lời