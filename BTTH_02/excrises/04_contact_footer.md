Bài tập 2.4 — Tùy chỉnh giao diện Bootstrap
🎬 Kịch bản mở đầu
Chủ đề Bootstrap mặc định (màu chàm/tím) không phù hợp với thương hiệu. Bạn cần tùy chỉnh biến thể màu xanh mòng két/xanh lục và khoảng cách tùy chỉnh.

📋 Yêu cầu
1. Ghi đè màu chính
/* Option A: Via CSS (quick) */
:root {
    --bs-primary: #14b8a6;        /* Teal 500 */
    --bs-primary-rgb: 20, 184, 166;
    --bs-secondary: #64748b;      /* Slate 500 */
}

/* Option B: Via Sass (recommended) */
$primary: #14b8a6;
$secondary: #64748b;
2. Thang đo khoảng cách tùy chỉnh
/* Add custom spacing class */
.py-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

/* Custom gap for grids */
.gap-4 { gap: 2rem; }
3. Bán kính bo tròn tùy chỉnh
/* Make cards rounder */
.card {
    border-radius: 16px;
}

/* Make buttons less rounded */
.btn {
    border-radius: 8px;
}

/* Make inputs more rounded */
.form-control, .form-select {
    border-radius: 10px;
}
4. Ví dụ hoàn chỉnh về giao diện tùy chỉnh
<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <!-- Custom CSS override -->
    <style>
        :root {
            /* Primary: Teal */
            --bs-primary: #14b8a6;
            --bs-primary-hover: #0d9488;
            --bs-primary-rgb: 20, 184, 166;

            /* Secondary: Slate */
            --bs-secondary: #64748b;
            --bs-secondary-rgb: 100, 116, 139;

            /* Custom colors */
            --custom-success: #22c55e;
            --custom-warning: #f59e0b;
            --custom-danger: #ef4444;

            /* Typography */
            --bs-body-font-family: 'Inter', system-ui, sans-serif;
            --bs-body-font-size: 1rem;
            --bs-body-line-height: 1.6;

            /* Border radius */
            --bs-border-radius: 0.5rem;
            --bs-border-radius-sm: 0.375rem;
            --bs-border-radius-lg: 1rem;
        }

        /* Button styles */
        .btn-primary {
            background-color: var(--bs-primary);
            border-color: var(--bs-primary);
        }
        .btn-primary:hover {
            background-color: var(--bs-primary-hover);
            border-color: var(--bs-primary-hover);
        }

        /* Card styles */
        .card {
            border: none;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        /* Navbar styles */
        .navbar {
            box-shadow: 0 2px 15px rgba(0,0,0,0.05);
        }
    </style>
</head>
</html>
🎨 Bảng màu hoàn chỉnh
Màu sắc	Hex	Cách sử dụng
Teal 500	#14b8a6	Các nút chính, liên kết
Teal 600	#0d9488	Di chuột chính
Teal 100	#ccfbf1	Nền sáng
Slate 900	#0f172a	Tiêu đề, văn bản màu tối
Slate 700	#334155	Văn bản chính
Slate 500	#64748b	Văn bản phụ
Slate 200	#e2e8f0	Viền, đường phân cách
Slate 50	#f8fafc	Nền sáng
🐛 Gợi ý
Nhập phông chữ Google
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
Thứ tự ghi đè biến CSS
/* 1. Override Bootstrap default */
:root {
    --bs-primary: #newcolor;
}

/* 2. Additional custom properties */
:root {
    --custom-primary: #14b8a6;
    --custom-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

/* 3. Component-specific overrides */
.navbar {
    box-shadow: var(--custom-shadow);
}
Khởi động lại Bootstrap
/* Override Bootstrap reboot defaults */
body {
    font-family: 'Inter', system-ui, sans-serif;
    background-color: #f8fafc;
}
✅ Tiêu chí thành công
Màu chủ đạo được đổi thành màu xanh ngọc.
Kiểu nút đã được cập nhật
Bán kính viền thẻ tăng lên
Kiểu chữ nhất quán (phông chữ Inter)
Hiệu ứng đổ bóng nhất quán
Bảng màu được ghi chú trong phần chú thích CSS.