export function FilteringProducts({ products, onSort }) {
    const handleSortChange = (event) => {
        const sortOrder = event.target.value;
        const sortedProducts = [...products];

        if (sortOrder === 'asc') { 

            sortedProducts.sort((productA, productB) => productA.price - productB.price);

        } else if (sortOrder === 'desc') { // https://www.w3schools.com/sql/sql_orderby.asp

            sortedProducts.sort((productA, productB) => productB.price - productA.price);
        }
        onSort(sortedProducts);
    };

    return (
        <div id="filter-dropdown" className="filter-dropdown">
            <label htmlFor="sort">Sortera efter pris: </label>
            <select name="sort" id="sortProducts" onChange={handleSortChange}>
                <option value="">Välj ett alternativ</option>
                <option value="asc">Pris stigande</option>
                <option value="desc">Pris fallande</option>
            </select>
        </div>
    );
}
