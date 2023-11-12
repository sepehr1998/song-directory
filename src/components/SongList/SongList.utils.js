const PAGE_SIZE = 20;
export function getSliceQueryParam(page) {
    const windowStart = PAGE_SIZE * page;
    return `_start=${windowStart}&_end=${windowStart + PAGE_SIZE}`
}

const getSongFavoriteId = (songId, favoriteList) => favoriteList.find((favoriteObj) => favoriteObj.songId === songId)?.id;

export function getSongsWithFavoriteData (songs, favoriteList) {
    return songs.reduce((a, c) => ([...a, { ...c, favoriteId: getSongFavoriteId(c.id, favoriteList) }]),[])
}

export const getFilteredByLevelSongs = (songs, selectedLevels) =>
    selectedLevels?.length ? songs.filter((song) => selectedLevels.includes(song.level))
        : songs
const getPureStr = (str) => str.replace(/\s/g,'').toLowerCase()
export const getFilteredBySearchSongs = (songs, titleOrArtist) => titleOrArtist ? songs.filter((song) => {
    return [song.title, song.artist].some((str) => getPureStr(str).includes(getPureStr(titleOrArtist)))
}) : songs

export function getSortedSongsByLevel(songs, sortOrder) {
    if (!songs) return [];
    if (sortOrder === 'none') return songs;

    return [...songs].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.level - b.level;
        } else {
            return b.level - a.level;
        }
    });
}