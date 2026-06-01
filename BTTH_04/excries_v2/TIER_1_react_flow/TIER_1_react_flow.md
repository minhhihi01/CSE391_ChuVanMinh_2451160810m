Cấp 1 — Hiểu hoạt động của React
Thời gian: 20-25 phút
Yêu cầu: Hoàn thành Cấp 0
Mục tiêu: Hiểu React render như thế nào, tại sao cần "re-render"

🎯 hôm nay bạn sẽ học
Lần 1: Component tạo ra → Hiển thị lên màn hình (Mount)
Lần 2: Dữ liệu thay đổi → UI cập nhật (Re-render)
Lần 3: Component bị xóa → Mất khỏi màn hình (Unmount)
📝 Bài 1.1 — Component render lần đầu (8 phút)
Giải thích
Khi bạn viết <App />, React sẽ:

Gọi hàmApp()
Lấy kết quả trả về (JSX)
Hiển thị lên hình
Mã mẫu —LifecycleDemo.jsx
function LifecycleDemo() {
    console.log("1️⃣ Component được gọi!");
    
    return (
        <div style={{ padding: "20px", border: "2px solid #3498db" }}>
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render MỘT lần</p>
        </div>
    );
}

export default LifecycleDemo;
thử nghiệm
Mở bảng điều khiển (F12)
Làm mới trang
Nhật ký tìm kiếm:1️⃣ Component được gọi!
Bạn thấy log xuất hiện MẤY LẦN? → 1 lần duy nhất!
Câu hỏi
Tại sao thành phần chỉ render 1 lần?
Khi nào nó sẽ hiển thị lại?
📝 Bài 1.2 — Biến "bình thường" vs useState (12 phút)
Vấn đề: Biến bình thường không cập nhật giao diện người dùng!
function BadCounter() {
    let count = 0;  // ← Biến bình thường!
    
    function handleClick() {
        count = count + 1;
        console.log("Count:", count);  // Console: 1, 2, 3...
        // Nhưng UI KHÔNG cập nhật!
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>❌ Counter "tệ" (dùng biến thường)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p style={{ color: "red" }}>
                ⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!
            </p>
        </div>
    );
}

export default BadCounter;
Giải pháp: useState — Biến "đặc biệt"
import { useState } from "react";

function GoodCounter() {
    const [count, setCount] = useState(0);  // ← useState!
    
    function handleClick() {
        setCount(count + 1);  // React biết cần re-render!
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>✅ Counter "tốt" (dùng useState)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p style={{ color: "green" }}>
                ✅ Nhấn nút → Số trên màn hình CẬP NHẬT!
            </p>
        </div>
    );
}

export default GoodCounter;
So sánh
biến bình thường	trạng thái sử dụng
Khai báo	let count = 0	const [count, setCount] = useState(0)
Họ thay đổi	count = 5	setCount(5)
UI cập nhật?	❌ Không	✅ Có
Khi nào render lại?	Không bao giờ	Khi đặt số
thử nghiệm
Chạy BadCounter→ nút được nhấn → thấy gì?
Chạy GoodCounter→ nút được nhấn → thấy gì?
Mở Console → tìm thấy nhật ký "render"几次?
📝 Bài 1.3 — Luồng hoạt động (Flow) (5 phút)
Sơ đồ
┌─────────────────────────────────────────────────────────┐
│                    REACT FLOW                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Component function được gọi                         │
│              ↓                                          │
│  2. Return JSX (giao diện)                              │
│              ↓                                          │
│  3. React hiển thị lên màn hình                        │
│              ↓                                          │
│  4. Người dùng tương tác (click, nhập...)               │
│              ↓                                          │
│  5. Gọi setState(newValue)                              │
│              ↓                                          │
│  6. React gọi lại component function (RE-RENDER)        │
│              ↓                                          │
│  7. Return JSX mới                                      │
│              ↓                                          │
│  8. React cập nhật màn hình (chỉ phần thay đổi)        │
│              ↓                                          │
│  Quay lại bước 4                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
Mã minh họa
import { useState } from "react";

function FlowDemo() {
    console.log("🔄 Component render!");
    
    const [step, setStep] = useState(1);
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Luồng hoạt động</h2>
            <p>Bước hiện tại: {step}</p>
            
            <button onClick={() => setStep(step + 1)}>
                Bước tiếp theo →
            </button>
            
            <button onClick={() => setStep(1)}>
                Quay lại đầu
            </button>
            
            <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
                {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
                {step === 2 && <p>📖 Bước 2: Đang học React</p>}
                {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
                {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
            </div>
        </div>
    );
}

export default FlowDemo;
✅ Danh sách kiểm tra
Component render lần đầu tiên như thế nào
Phân biệt normal vs useState
Biết setState → kết xuất lại → cập nhật giao diện người dùng
Hiểu luồng: Hành động của người dùng → setState → kết xuất lại
🎯 Tổng kết
setState(newState)
    ↓
Component function gọi lại
    ↓
Return JSX mới
    ↓
React cập nhật DOM (chỉ phần thay đổi)
← Quay lại: Cấp 0 — Thành phần đầu tiên
→ Tiếp theo: Cấp 2 — Biến trong JSX