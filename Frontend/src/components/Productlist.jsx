import { ProductCard } from "./ProductCard";

export function ProductList({ products, onAddToCart }) {
    return (
        <div className='product-list'>
          
            {products.length > 0 ? ( 
                
                products.map((product) => (
                    <ProductCard
                        key={product.id}  
                        name={product.name}  
                        price={product.price}  
                        inStock={product.inStock} 
                        ImgSrc={product.imageUrl} 
                        onAddToCart={() => onAddToCart(product)} 
                    />
                ))
            ) : (
                <p>Inga produkter matchar din sökning.</p>
            )}
        </div>
    );
}
