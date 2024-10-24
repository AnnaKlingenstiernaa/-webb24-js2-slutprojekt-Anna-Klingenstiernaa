import { NavBar } from "./NavBar";
import { PayButton } from "./PayButton";
import { EmptyCartBtn } from "./EmptyCartBtn";

export function CartPage({ onNavigateToCart, onNavigateToProducts, cartItems, cartItemCount, onNavigateToPurchaseCompleted, onEmptyCart, onPurchase }) {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleEmptyCart = () => {
        onEmptyCart();
        onNavigateToProducts();
    };

    return (
        <>
            <NavBar onNavigateToCart={onNavigateToCart} onNavigateToProducts={onNavigateToProducts} cartItemCount={cartItemCount} />
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Din kundvagn är tom.</p>
            ) : (
                <>
                    <h2 className="cart-title">Kundvagn</h2>
                    <ul className="cart-items-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <span>{item.name} - {item.price} kr</span>
                            </li>
                        ))}
                    </ul>
                    <h3 className="total-price">Totalpris: {`${calculateTotalPrice()} kr`}</h3>
                    <PayButton onPay={onPurchase} />
                    <EmptyCartBtn onClick={handleEmptyCart} />
                </>
            )}
        </>
    );
}
