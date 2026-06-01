function PriceTag({ originalPrice, salePrice }) {
    return (
        <div>
            <p
                style={{
                    textDecoration: "line-through",
                    color: "gray"
                }}
            >
                {originalPrice}đ
            </p>

            <p
                style={{
                    color: "red",
                    fontWeight: "bold"
                }}
            >
                {salePrice}đ
            </p>
        </div>
    );
}

export default PriceTag;