import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);
    
    
    const themeStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "20px",
        minHeight: "200px"
    };
    
    return (
        <div style={themeStyle}>
            <h2>Toggle Demo</h2>
            
            {/* Toggle ẩn/hiện */}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
            </button>
            
            {isVisible && (
                <div style={{ 
                    marginTop: "10px", 
                    padding: "10px", 
                    border: "1px solid #ddd" 
                }}>
                    <p>Đây là nội dung có thể ẩn/hiện!</p>
                </div>
            )}
                        
            <hr />

            {/* 1. Hiện/Ẩn mật khẩu */}
            <h3>Mật khẩu</h3>

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
            />

            <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ marginLeft: "10px" }}
            >
                {showPassword ? "Ẩn" : "Hiện"}
            </button>

            <hr />

            {/* 2. Accordion */}
            <h3
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
            >
                📖 Thông tin thêm
            </h3>

            {isOpen && (
                <div
                    style={{
                        padding: "10px",
                        border: "1px solid #ddd"
                    }}
                >
                    Đây là nội dung accordion.
                </div>
            )}

            <hr />

            {/* 3. Bóng đèn */}
            <button onClick={() => setIsLightOn(!isLightOn)}>
                {isLightOn ? "💡 Bật" : "🔌 Tắt"}
            </button>
            
            <hr />
            
            {/* Toggle dark mode */}
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            
            <hr />
            
            {/* Toggle like */}
            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>
        </div>
    );
}

export default BooleanState;