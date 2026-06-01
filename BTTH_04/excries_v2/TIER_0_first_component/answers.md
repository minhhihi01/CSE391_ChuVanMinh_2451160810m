Bài 0.1

Tệp .jsx khác với tệp .js nào?
.js → JavaScript normal.
.jsx → JavaScript + JSX (giống như HTML trong React).
Tại sao phải xuất App mặc định?
Để các tệp khác có thể nhập và sử dụng thành phần App.
Thử xóa mặc định xuất → chuyện gì xảy ra?
trang web sẽ hiển thị màn hình trắng vì React không thể nhập và hiển thị thành phần App.
Bài 0.2

Viết thành phần UserProfile
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>

            <img
                src="photo.jpg"
                alt="Ảnh đại diện"
            />

            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
Viết thành phần ProductInfo
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>

            <p className="price">
                25.000.000đ
            </p>

            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>

            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;