import React from 'react';
import "./Sort.css"

const Sort = ({ sortOrder, onSortOrderChange }) => {
    return (
        <div className="sort-options">
            <label htmlFor="sort-order" style={{ color: "white" }} className="sort-label">Sort by difficulty:</label>
            <select id="sort-order" value={sortOrder} onChange={onSortOrderChange} className="dropdown">
                <option value="none">None</option>
                <option value="asc">Easiest First</option>
                <option value="desc">Most Difficult First</option>
            </select>
        </div>
    );
};

export default Sort;
