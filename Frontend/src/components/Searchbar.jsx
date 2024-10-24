import { useState } from 'react';

export function Searchbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async (e) => {
        const query = e.target.value; // Hämtar värdet som användaren skriver in
        setSearchQuery(query); // Uppdaterar state med söksträngen


        if (query.trim() === "") { // Om söksträngen är tom eller bara innehåller mellanslag
            onSearch([]);// Returnerar en tom lista till sökresultaten (dvs. ingen sökning utförd)
            return; // Avbryter funktionen, ingen vidare kod körs
        }

        const response = await fetch(`http://localhost:3000/search?q=${query}`);
        const results = await response.json();
        onSearch(results);
    };

    return (
        <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Sök produkter..."
        />
    );
}
