import React, {useState } from 'react';
import axios from 'axios';
import "./SongItem.css"
import LevelIndicator from "../LevelIndicator/LevelIndicator";

const SongItem = ({ title, artist, image, level, isOdd, id, favoriteId, onLikeOrDislike }) => {
    const [isLoadingFav, setIsLoadingFav] = useState(false);
    const conditionalStyle = {
        backgroundColor: isOdd ? "transparent" : '#101010',
    };

    const isFavorite = !!favoriteId

    const toggleLike = async () => {
        try {
            setIsLoadingFav(true)
            if (isFavorite) {
                await axios.delete(`http://localhost:3004/favorites/${favoriteId}`);
            } else {
                await axios.post('http://localhost:3004/favorites', {
                    songId: id,
                });
            }
            await onLikeOrDislike();
        } catch (error) {
            console.error('Error toggling like:', error);
        } finally {
            setIsLoadingFav(false)
        }
    };

    return (
        <div className="song-item-container" style={conditionalStyle}>
            <div className="left-section">
            <img src={image} className="song-image" alt="song"/>
            <div className="title-artist">
                <div className="song-title">{title}</div>
                <div className="song-artist">{artist}</div>
            </div>
            </div>
            <div className="right-section">
                <div className="options">
                        <LevelIndicator progress={level}/>
                    {isLoadingFav ? (<div className="load"></div>) : (
                        <div className={`like-button ${isFavorite ? 'liked' : ''}`} onClick={toggleLike}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SongItem;
