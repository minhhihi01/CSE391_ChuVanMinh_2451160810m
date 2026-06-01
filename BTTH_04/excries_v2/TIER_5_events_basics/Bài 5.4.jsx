import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        let newErrors = { ...errors };

        if (name === "email") {
            newErrors.email =
                value.includes("@") ? "" : "Email phải chứa ký tự @";
        }

        if (name === "confirmPassword") {
            newErrors.confirmPassword =
                value === formData.password
                    ? ""
                    : "Mật khẩu xác nhận không khớp";
        }

        setErrors(newErrors);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (formData.name === "" || formData.email === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!formData.email.includes("@")) {
            alert("Email không hợp lệ!");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: ""
        });

        setSubmitted(false);
        setErrors({});
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Form Events</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tên: </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Email: </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        {errors.email && (
                            <p style={{ color: "red" }}>
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Thêm trường mật khẩu */}
                    <div style={{ marginBottom: "10px" }}>
                        <label>Mật khẩu: </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Thêm trường xác nhận mật khẩu */}
                    <div style={{ marginBottom: "10px" }}>
                        <label>Xác nhận mật khẩu: </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                        {errors.confirmPassword && (
                            <p style={{ color: "red" }}>
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Tin nhắn: </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{ width: "100%" }}
                        />
                    </div>

                    <button type="submit">Gửi</button>
                    <button type="button" onClick={handleReset}>
                        Xóa
                    </button>
                </form>
            ) : (
                <div
                    style={{
                        background: "#d4edda",
                        padding: "15px",
                        borderRadius: "4px"
                    }}
                >
                    <h3>✅ Đã gửi thành công!</h3>
                    <p>Tên: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Mật khẩu: {formData.password}</p>
                    <p>Tin nhắn: {formData.message}</p>

                    <button onClick={handleReset}>
                        Gửi lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;