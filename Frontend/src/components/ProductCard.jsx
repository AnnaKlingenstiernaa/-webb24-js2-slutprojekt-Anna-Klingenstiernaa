export function ProductCard({ name, price, inStock, ImgSrc, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={ImgSrc} alt={name} className="product-image" />
            <h2 className="product-name">{name}</h2>
            <p className="product-price">Pris: {price} kr</p>
            <p className="product-stock">{inStock ? `I lager ${inStock}` : 'Slut i lager'}</p>
            <button className="add-to-cart-btn" onClick={onAddToCart} disabled={!inStock}>
                Lägg i kundvagn
            </button>
        </div>
    );
}
