import { useState, useEffect } from 'react';
import { NavBar } from "./NavBar";
import { FilteringProducts } from "./FilteringProducts";
import { ProductCard } from "./ProductCard"; 
import { fetchProducts } from '../utils/fetchproducts';

export function ProductPage({ onNavigateToCart, onNavigateToProducts, cartItemCount, onAddToCart }) {
    
    const [allProducts, setAllProducts] = useState([]); 

    const [searchedProducts, setSearchedProducts] = useState([]);
    const [isSearching, setIsSearching] = useState(false); 

    const [sortedProducts, setSortedProducts] = useState([]);

    // Hämta alla produkter vid första sidladdningen
    useEffect(() => {
        const getAllProducts = async () => {

            const productsData = await fetchProducts();

            setAllProducts(productsData);

            setSearchedProducts(productsData); // Initiera sökresultaten med alla produkter
        };

        getAllProducts();
    }, []);

    
    const handleSearch = (results) => {
        setIsSearching(results.length > 0);
        setSearchedProducts(results.length > 0 ? results : allProducts);
    };


    const handleSort = (sortedProducts) => {
        setSortedProducts(sortedProducts);
    };

    return (
        <>
            <NavBar 
                onSearch={handleSearch}  
                onNavigateToCart={onNavigateToCart} 
                onNavigateToProducts={onNavigateToProducts} 
                cartItemCount={cartItemCount} 
            />
            <FilteringProducts 
                products={isSearching ? searchedProducts : allProducts} 
                onSort={handleSort} 
            />
            <div className="product-page">
                <h1 className="product-page-title">Våra Produkter</h1>
                <div className="product-grid">
                    {(sortedProducts.length > 0 ? sortedProducts : (isSearching ? searchedProducts : allProducts)).map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            inStock={product.inStock}
                            ImgSrc={product.imageUrl}
                            onAddToCart={() => onAddToCart(product)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
