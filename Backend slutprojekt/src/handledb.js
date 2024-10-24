import fs from "fs/promises";

export async function getProducts() {
    const rawdata = await fs.readFile('./src/productdb.json');
    return JSON.parse(rawdata);
}

    export async function updateProductStock(products) {
        const jsonData = JSON.stringify(products, null, 2); 
        await fs.writeFile('./src/productdb.json', jsonData);
    }
