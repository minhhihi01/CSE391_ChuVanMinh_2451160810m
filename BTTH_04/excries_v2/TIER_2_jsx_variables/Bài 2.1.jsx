function SimpleVariables() {
    // Các biến JavaScript
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const laSinhVien = true;
    const monHoc = ["HTML", "CSS", "JS", "React"];
    
    const queQuan = "Hà Nội";

    const gio = new Date().getHours();

    const canNang = 65;
    const chieuCao = 1.7;
    const bmi = canNang / (chieuCao * chieuCao);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Xin chào {ten}!</h1>
            <p>Tuổi: {tuoi}</p>
            <p>Năm sau: {tuoi + 1}</p>
            <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
            
            <h2>Môn học yêu thích:</h2>
            <p>{monHoc.join(", ")}</p>

            <h2>Thông tin cá nhân</h2>
            <p>Tên: {ten}</p>
            <p>Tuổi: {tuoi}</p>
            <p>Quê quán: {queQuan}</p>

            <h2>Lời chào</h2>
            <p>
                {gio < 12
                    ? "Chào buổi sáng"
                    : gio < 18
                    ? "Chào buổi chiều"
                    : "Chào buổi tối"}
            </p>

            <h2>Chỉ số BMI</h2>
            <p>BMI: {bmi.toFixed(2)}</p>
        </div>
    );
}

export default SimpleVariables;