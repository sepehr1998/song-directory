import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useDebouncedCallback  } from 'use-debounce';

import SongItem from '../SongItem/SongItem';
import PreLoader from '../PreLoader/PreLoader';

import {useFetchFavoritesData, useFetchSongsData} from './SongList.hooks'
import './SongList.css';
import {
    getSongsWithFavoriteData,
    getSortedSongsByLevel
} from "./SongList.utils";



const SongList = ({ searchQuery, selectedLevels, sortOrder }) => {
    const { songs, isLoading, refetchSongsData } = useFetchSongsData({ searchQuery, selectedLevels, sortOrder });
    const { favorites, refetchFavoritesData } = useFetchFavoritesData();
    const page = useRef(0);

    const scrollHandler = useDebouncedCallback(async (e) => {
        const {scrollHeight} = document.body;
        const {scrollY, innerHeight} = window;

        if (Math.abs(scrollHeight - scrollY - innerHeight) < 1) {
            const currentPage = page.current
            const success = await refetchSongsData(currentPage + 1);
            if (success) {
                page.current += 1;
            }
        }
    }, 50)

    useEffect(() => {
        const refetchSongsByLevel = async () => {
            const success = await refetchSongsData(0, true);
            if (success) page.current = 0;
        }
        refetchSongsByLevel();
    }, [selectedLevels, searchQuery])

    // setting the scroll ending listener
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollHandler]);


    const toggleFavoriteCallback = async () => {
        await refetchFavoritesData();
    }

    const songsWithFavoriteData = useMemo(() => getSongsWithFavoriteData(songs, favorites), [songs, favorites])
    const sortedSongs = useMemo(() => getSortedSongsByLevel(songsWithFavoriteData, sortOrder), [songsWithFavoriteData, sortOrder])

    return (
        <div className="song-list">
            {sortedSongs?.map((song, index) => (
                <SongItem
                    id={song.id}
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    image={song.images}
                    level={song.level}
                    favoriteId={song.favoriteId}
                    isOdd={index % 2 !== 0} // Pass whether the index is odd to the SongItem component
                    onLikeOrDislike={toggleFavoriteCallback}
                />
            ))}
            {isLoading && (
                <PreLoader />
            )}
        </div>
    );
};

export default SongList;
