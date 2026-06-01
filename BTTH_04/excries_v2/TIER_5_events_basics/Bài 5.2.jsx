import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);

    const [email, setEmail] = useState("");

    function countWords(str) {
        if (str.trim() === "") return 0;
        return str.trim().split(/\s+/).length;
    }
        
    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
        setCharCount(newValue.length);
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Input Events</h2>
            
            <input 
                value={text}
                onChange={handleChange}
                placeholder="Nhập gì đó..."
                maxLength={100}
                style={{ padding: "8px", width: "300px" }}
            />
            
            <p>Ký tự: {charCount}/100</p>
            <p>Bạn đang nhập: {text}</p>
            
            {charCount > 80 && (
                <p style={{ color: "red" }}>⚠️ Sắp hết ký tự!</p>
            )}

            <hr />

            <h3>1. Kiểm tra Email</h3>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email..."
                style={{ padding: "8px", width: "300px" }}
            />

            <p>
                {email.includes("@")
                    ? "✅ Email hợp lệ"
                    : "❌ Email chưa hợp lệ"}
            </p>

            <hr />

            <h3>2. Preview</h3>

            <div
                style={{
                    background: "#f0f0f0",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {text || "(chưa nhập nội dung)"}
            </div>

            <hr />

            <h3>3. Đếm số từ</h3>

            <p>Số từ: {countWords(text)}</p>
        </div>
    );
}

export default InputEvents;