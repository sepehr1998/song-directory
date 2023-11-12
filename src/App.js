import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import SongList from "./components/SongList/SongList";
import Sort from "./components/Sort/Sort";
import React, {useState} from "react";

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handleLevelSelect = (level) => {
        setSelectedLevels((prevSelectedLevels) =>
            prevSelectedLevels.includes(level)
                ? prevSelectedLevels.filter((key) => key !== level)
                : [...prevSelectedLevels, level]
        );
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

  return (
    <div className="App">
      <Header onSearch={handleSearch}/>
        <div className="content-body">
            <div className="controllers">
                <Sort sortOrder={sortOrder} onSortOrderChange={handleSortOrderChange} />
                <div className="filter">
                    <Filter onLevelSelect={handleLevelSelect}/>
                </div>
            </div>

            <div style={{ padding: "1rem", width: "100%" }}>
                <SongList searchQuery={searchQuery} selectedLevels={selectedLevels} sortOrder={sortOrder}/>
            </div>
        </div>


    </div>
  );
}

export default App;
