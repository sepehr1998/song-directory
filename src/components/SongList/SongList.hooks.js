import {useCallback, useEffect, useRef, useState} from "react";
import axios from "axios";

import {getSliceQueryParam} from './SongList.utils'

export const useFetchSongsData = ({ searchQuery, selectedLevels }) => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const isMounted = useRef(false);

    const fetchSongsData = useCallback(async (page = 0, rebase = false) => {
        if (isLoading) return
        setIsLoading(true);
        try {
            let url = `http://localhost:3004/songs?${getSliceQueryParam(page)}`;

            const queryParams = [];

            if (searchQuery) {
                queryParams.push(`search_like=${searchQuery}`);
            }

            if (selectedLevels.length > 0) {
                queryParams.push(`level=${selectedLevels.join('&level=')}`);
            }

            if (queryParams.length > 0) {
                url += `&${queryParams.join('&')}`;
            }

            const response = await axios.get(url);
            const { data } = response;
            setSongs((prvSongs) => rebase ? data : ([...prvSongs, ...data]));
            setIsLoading(false);
            return true
        } catch (error) {
            console.error('Error fetching songs:', error);
            setIsLoading(false);
            return false
        }
    }, [searchQuery, selectedLevels, isLoading])

    useEffect(() => {
        if (!isMounted.current) {
            fetchSongsData();
            isMounted.current = true
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ({ isLoading, songs, refetchSongsData: fetchSongsData })
};

export const useFetchFavoritesData = () => {
    const [favorites, setFavorites] = useState([]);
    const isMounted = useRef(false);

    const fetchFavoritesData = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3004/favorites');
            const {data = []} = response;
            if (data.length > 0) {
                setFavorites(data);
            }
        } catch (error) {
            console.error('Error fetching favorites list:', error);
        }
    }, [])

    useEffect(() => {
        if (!isMounted.current) {
            fetchFavoritesData();
            isMounted.current = true
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { refetchFavoritesData: fetchFavoritesData, favorites }
}