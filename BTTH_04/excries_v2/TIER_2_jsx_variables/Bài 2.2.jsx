function TernaryDemo() {
    const isLoggedIn = true;
    const score = 85;
    
    return (
        <div style={{ padding: "20px" }}>
            {/* Cách 1: Toán tử 3 ngôi */}
            <h2>{isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}</h2>
            
            {/* Kết quả học tập */}
            <p>Kết quả: {score >= 5 ? "Đậu" : "Rớt"}</p>
            
            {/* Điểm xếp loại */}
            <p>Xếp loại: {
                score >= 9 ? "Xuất sắc" :
                score >= 8 ? "Giỏi" :
                score >= 7 ? "Khá" :
                score >= 5 ? "Trung bình" : "Yếu"
            }</p>

            <p>Trạng thái: {online ? "🟢 Online" : "🔴 Offline"}</p>

            {isLoggedIn && (
                <ul>
                    <li>Trang chủ</li>
                    <li>Hồ sơ</li>
                    <li>Đăng xuất</li>
                </ul>
            )}

            <p>{stock === 0 ? "Hết hàng" : `Còn ${stock} sản phẩm`}</p>
        </div>
    );
}

export default TernaryDemo;