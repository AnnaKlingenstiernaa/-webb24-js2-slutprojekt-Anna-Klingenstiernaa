import express from "express";
import cors from "cors"; 
import { getProducts, updateProductStock } from "./src/handledb.js";

const app = express(); 
app.use(express.json()); 
app.use(cors());


app.get('/product', async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        console.error("Fel vid hämtning av produkter:", error);
        res.status(500).json({ message: "Kunde inte hämta produkter." });
    }
});


app.get('/search', async (req, res) => {
    const searchQuery = req.query.q;  // Hämtar sökfrågan från URL parametern 'q'
    try {
        const allProducts = await getProducts();  

        const matchingProducts = allProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        res.json(matchingProducts); 

    } catch (error) {
        console.error("Fel vid sökning av produkter:", error);
        res.status(500).json({ message: "Kunde inte genomföra sökningen." });
    }
});

app.post('/purchase', async (req, res) => {
    const purchasedItems = req.body;

    try {
        const products = await getProducts();

        
        purchasedItems.forEach(purchasedItem => {
            const product = products.find(p => p.id === purchasedItem.id);
            if (product) {
             
                if (product.inStock >= purchasedItem.quantity) {    // Kontrollera att det finns tillräckligt med lager innan vi minskar det
                    product.inStock -= purchasedItem.quantity; 
                } else {
                    return res.status(400).json({ message: `Inte tillräckligt med lager för ${product.name}.` });
                }
            }
        });

        // Spara den uppdaterade produkten
        await updateProductStock(products);

        res.status(200).json({ message: "Köp genomfört och lagersaldo uppdaterat." });
    } catch (error) {
        console.error("Fel vid genomförande av köp:", error);
        res.status(500).json({ message: "Kunde inte genomföra köpet." });
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000 ...");
});

