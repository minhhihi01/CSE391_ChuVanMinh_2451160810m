import { useState } from "react";

function KeyboardEvents() {
    const [lastKey, setLastKey] = useState("");
    const [log, setLog] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const [targetKey, setTargetKey] = useState("A");

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [bgColor, setBgColor] = useState("white");
    
    // Xử lý phím trên toàn trang
    function handleKeyDown(event) {
        setLastKey(event.key);
        
        // Thêm vào log
        setLog(prev => [...prev.slice(-4), event.key]); // Giữ 5 phím cuối
    }
    
    // Xử lý phím trong input
    function handleInputKeyDown(event) {
        if (event.key === "Enter") {
            if (inputValue.trim() !== "") {
                alert("Bạn nhập: " + inputValue);
                setInputValue("");

        if (event.key.toUpperCase() === targetKey) {
            alert("🎉 Chính xác!");
            const keys = ["A", "B", "C", "D", "E"];
            setTargetKey(keys[Math.floor(Math.random() * keys.length)]);
        }

        if (event.key === "ArrowUp") setY(y - 10);
        if (event.key === "ArrowDown") setY(y + 10);
        if (event.key === "ArrowLeft") setX(x - 10);
        if (event.key === "ArrowRight") setX(x + 10);

        if (event.ctrlKey && event.key === "d") {
            event.preventDefault();
            setBgColor(bgColor === "white" ? "lightblue" : "white");
                }
            }
        }
        
        if (event.key === "Escape") {
            setInputValue("");
        }
    }
    
    return (
        <div 
            style={{
                padding: "20px",
                backgroundColor: bgColor,
                minHeight: "400px"
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0}  // Để div có thể nhận focus
        >
            <h2>Keyboard Events</h2>
            
            <p>Phím cuối cùng: <strong>{lastKey || "Chưa nhấn"}</strong></p>
            
            <p>Log: {log.join(" → ")}</p>

            <hr />

            <h3>1. Game đoán phím</h3>
            <p>Hãy nhấn phím: <strong>{targetKey}</strong></p>

            <hr />

            <h3>2. Di chuyển ô vuông</h3>

            <div
                style={{
                    width: "50px",
                    height: "50px",
                    background: "red",
                    position: "relative",
                    left: `${x}px`,
                    top: `${y}px`
                }}
            ></div>

            <p>Dùng ↑ ↓ ← → để di chuyển</p>

            <hr />

            <h3>3. Phím tắt Ctrl + D</h3>
            <p>Nhấn Ctrl + D để đổi màu nền</p>
            
            <hr />
            
            <h3>Nhập và nhấn Enter:</h3>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Nhập rồi nhấn Enter..."
                style={{ padding: "8px", width: "300px" }}
            />
            
            <p style={{ fontSize: "12px", color: "#666" }}>
                Nhấn Escape để xóa
            </p>
        </div>
    );
}

export default KeyboardEvents;