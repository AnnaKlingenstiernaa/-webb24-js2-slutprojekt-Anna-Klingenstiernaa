import { NavBar } from "./NavBar";

export function PurchaseCompleted({ onNavigateToProducts }) {
    return (
        <>
            <NavBar onNavigateToProducts={onNavigateToProducts} />
            <div className="purchase-completed-container">
                <h3 className="thank-you-message">Tack för ditt köp!</h3>
                <p className="thank-you-note">Din beställning har genomförts framgångsrikt!</p>
                <div className="button-container">
                    <button className="btn" onClick={onNavigateToProducts}>Till Produkter</button>
                </div>
            </div>
        </>
    );
}