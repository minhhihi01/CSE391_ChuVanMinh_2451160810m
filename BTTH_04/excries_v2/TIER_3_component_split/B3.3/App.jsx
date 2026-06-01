import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";

function App() {
    return (
        <div>
            <h1>Danh sách người dùng</h1>

            <div style={{ display: "flex", gap: "20px" }}>
                <UserCard
                    name="Minh"
                    email="minh@gmail.com"
                    avatar="https://via.placeholder.com/100"
                />

                <UserCard
                    name="An"
                    email="an@gmail.com"
                    avatar="https://via.placeholder.com/100"
                />

                <UserCard
                    name="Linh"
                    email="linh@gmail.com"
                    avatar="https://via.placeholder.com/100"
                />
            </div>

            <h1>Khuyến mãi</h1>

            <PriceTag
                originalPrice={25000000}
                salePrice={22000000}
            />
        </div>
    );
}

export default App;