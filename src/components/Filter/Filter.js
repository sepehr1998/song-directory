import React, {useState} from "react";
import "./Filter.css";
import LevelIndicator from "../LevelIndicator/LevelIndicator";
function Filter ({ onLevelSelect }) {
    const [isFilterBodyVisible, setIsFilterBodyVisible] = useState(false);
    const [selectedLevels, setSelectedLevels] = useState([]);

    const toggleFilterBodyVisibility = () => {
        setIsFilterBodyVisible(!isFilterBodyVisible);
    };

    const filterLabelText = isFilterBodyVisible ? 'HIDE FILTER' : 'FILTER BY LEVEL';

    const handleLevelClick = (levelKey) => {
        // Toggle level selection
        setSelectedLevels((prevSelectedLevels) =>
            prevSelectedLevels.includes(levelKey)
                ? prevSelectedLevels.filter((key) => key !== levelKey)
                : [...prevSelectedLevels, levelKey]
        );
        onLevelSelect(levelKey);
    };

    return (
        <div className="filters">
            <div className="filter-container" onClick={toggleFilterBodyVisibility}>
                <div className="filter-label">
                    {filterLabelText}
                </div>
                <div className="ellipse-container"  style={{
                    borderColor: selectedLevels.length > 0 ? 'white' : 'transparent',
                    paddingLeft: selectedLevels.length > 0 ? '1rem' : '0'
                }}>
                    {selectedLevels.map((level, index) => (
                        <div key={level} className="selected-level">{`${index === selectedLevels.length - 1 ? level : level + ' - '}`}</div>
                    ))}
                    <div className="filter-icon-container"
                         style={{
                             marginLeft: selectedLevels.length > 0 ? '1rem' : '0',
                             backgroundColor: selectedLevels.length > 0 ? 'white' : 'transparent'
                             }}>
                        <div className="filter-icon"
                             style={{
                                 backgroundColor: selectedLevels.length > 0 ? 'black' : 'white'
                             }}
                        />
                    </div>
                </div>

            </div>
            {isFilterBodyVisible && (
                <div className="filter-body">
                    {Array.from({ length: 15 }, (_, i) => {
                        let progress = i + 1;
                        return (
                            <div
                                key={progress}
                                className="level-selector"
                                onClick={() => handleLevelClick(progress)}
                            >
                                <LevelIndicator
                                    key={i+1}
                                    progress={progress}
                                    isSelected={selectedLevels.includes(progress)}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
export default Filter;