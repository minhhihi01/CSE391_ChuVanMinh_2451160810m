import { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);

    const [newName, setNewName] = useState("");

    const [message, setMessage] = useState("");
    const inputRef = useRef(null);

    function handleAdd() {
        if (newName.trim() === "") return;

        const newItem = {
            id: Date.now(), 
            name: newName
        };

        setItems([...items, newItem]); 
        setNewName(""); 

        setMessage(" Đã thêm thành công!");

        inputRef.current.focus();

        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Thêm môn học</h2>

            <div style={{ marginBottom: "15px" }}>
                <input
                    ref={inputRef}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", marginRight: "10px" }}
                />

                <button
                    onClick={handleAdd}
                    style={{ padding: "8px 16px" }}
                >
                    ➕ Thêm
                </button>
            </div>

            {message && (
                <p style={{ color: "green" }}>
                    {message}
                </p>
            )}

            <h3>Danh sách ({items.length} môn):</h3>

            {items.map(item => (
                <div
                    key={item.id}
                    style={{
                        padding: "8px",
                        borderBottom: "1px solid #eee"
                    }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default CreateItem;