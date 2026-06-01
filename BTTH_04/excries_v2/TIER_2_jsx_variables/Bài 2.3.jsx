function ListRendering() {
    const fruits = ["Táo", "Chuối", "Cam", "Nho"];
    
    const students = [
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ];

    const products = [
        { id: 1, name: "Laptop", price: 15000000 },
        { id: 2, name: "Chuột", price: 300000 },
        { id: 3, name: "Bàn phím", price: 1200000 },
        { id: 4, name: "Tai nghe", price: 800000 },
        { id: 5, name: "Màn hình", price: 3500000 }
    ];

const tongGia = products.reduce((tong, sp) => tong + sp.price, 0);
    
    return (
        
        <div style={{ padding: "20px" }}>
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            
            <h2>Danh sách sinh viên</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ background: "#f0f0f0" }}>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tuổi</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.age}</td>
                        </tr>
                    ))}
                    <h2>Danh sách sản phẩm</h2>

            <ul>
                {products.map(product => (
            <li
                key={product.id}
                style={{
                    color: product.price > 1000000 ? "red" : "black"
                }}
            >
                {product.name} - {product.price.toLocaleString()}đ
            </li>
            ))}
            </ul>

            <h3>
                Tổng giá: {tongGia.toLocaleString()}đ
            </h3>
                </tbody>
            </table>
        </div>
    );
}

export default ListRendering;