
export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/product');
        if (!response.ok) {
            throw new Error('Network error ');
        }
        const products = await response.json();

        return products;
    } catch (error) {
        return []; 
    }
}


