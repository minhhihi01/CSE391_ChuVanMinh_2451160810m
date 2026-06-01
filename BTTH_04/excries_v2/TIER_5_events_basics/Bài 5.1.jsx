import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);

    const [color, setColor] = useState("lightblue");

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    
    // Cách 1: Arrow function trực tiếp
    // <button onClick={() => setMessage("Đã click!")}>
    
    // Cách 2: Tạo hàm riêng (nên dùng)
    function handleClick() {
        setMessage("Đã click lúc " + new Date().toLocaleTimeString());
        setClickCount(clickCount + 1);
    }
    
    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Click Events</h2>
            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>
            
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleReset}>Reset</button>
              <hr />

            <h3>1. Đổi màu ngẫu nhiên</h3>

            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color
                }}
            ></div>

            <button onClick={randomColor}>
                Đổi màu ngẫu nhiên
            </button>

            <hr />

            <h3>2. Đếm click từng nút</h3>

            <button onClick={() => setCountA(countA + 1)}>
                Nút A ({countA})
            </button>

            <button onClick={() => setCountB(countB + 1)}>
                Nút B ({countB})
            </button>

            <hr />

            <h3>3. Nút Like</h3>

            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>

        </div>
    );
}

export default ClickEvents;