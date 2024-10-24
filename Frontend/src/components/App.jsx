import { useState } from "react";
import { ProductPage } from "./Productpage.jsx";
import { CartPage } from "./Cartpage.jsx";
import { PurchaseCompleted } from "./PurchaseCompleted.jsx"; 

export function App() {
    const [currentPage, setCurrentPage] = useState("products"); // Starta på produktsidan

    const [cartItems, setCartItems] = useState([]);

    const navigateToProducts = () => {
        setCurrentPage("products");
        setCartItems([]); 
    };

    const navigateToCart = () => {
        setCurrentPage("cart");
    };

    const navigateToPurchaseCompleted = () => {
        setCurrentPage("purchaseCompleted");
    };

    const handlePurchase = async () => {
  
        const purchasedItems = cartItems.map(item => ({
            id: item.id,
            quantity: 1 // Satt varje produkts kvantitet till 1                                                        
        }));

        try {
            const response = await fetch("http://localhost:3000/purchase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(purchasedItems)
            });

            if (!response.ok) {
                throw new Error("Något gick fel med uppdateringen av lagersaldot.");
            }

            setCartItems([]); // Töm kundvagnen efter köp
            navigateToPurchaseCompleted();

        } catch (error) {
            alert("Köp misslyckades. Vänligen försök igen.");
        }
    };

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);//bhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    };

    const handleEmptyCart = () => {
        setCartItems([]); 
        navigateToProducts(); 
    };

    return (
        <>
            {currentPage === "products" && (
                <ProductPage 
                    onNavigateToCart={navigateToCart} 
                    onNavigateToProducts={navigateToProducts} 

                    cartItemCount={cartItems.length} 
                    onAddToCart={handleAddToCart} 
                /> 
            )}
            {currentPage === "cart" && (
                <CartPage 
                    onNavigateToProducts={navigateToProducts}

                    onNavigateToCart={navigateToCart}
                    cartItems={cartItems} 

                    cartItemCount={cartItems.length} 

                    onNavigateToPurchaseCompleted={navigateToPurchaseCompleted}

                    onEmptyCart={handleEmptyCart}
                    
                    onPurchase={handlePurchase} 
                />
            )}
            {currentPage === "purchaseCompleted" && (
                <PurchaseCompleted 
                    onNavigateToProducts={navigateToProducts} 
                />
            )}
        </>
    );
}
