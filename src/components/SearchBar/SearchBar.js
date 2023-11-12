import React, {useState} from "react";
import Search from "../../assets/icons/search.svg"
import "./SearchBar.css"

export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="input-wrapper">
            <input
                placeholder="Search for songs by artists or title"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <div className="search-button" onClick={handleSearch}>
                <img src={Search} alt="Search Logo" />
            </div>
    </div>
    );
};