import { Searchbar } from "./Searchbar";

export function NavBar({ onSearch, onNavigateToCart, onNavigateToProducts, cartItemCount }) {
    return (
        <nav id="navbar" className="navbar">
            <h4 className="navbar-h4" onClick={onNavigateToProducts}>Produkter</h4>
            <Searchbar onSearch={onSearch} />
            <h4 onClick={onNavigateToCart}>
                Kundvagn <span id="cartItemCount">{cartItemCount}</span>
            </h4>
        </nav>
    );
}
