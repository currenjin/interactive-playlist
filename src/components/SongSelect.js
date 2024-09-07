import React from 'react';

export default function SongSelect({ album, selectedSong, onSongSelect }) {
    return (
        <div>
            <h2>Select a Song</h2>
            <select value={selectedSong} onChange={e => onSongSelect(parseInt(e.target.value, 10))}>
                {album.songs.map((song, index) => (
                    <option key={index} value={index}>
                        {song.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
