import React from 'react';

export default function SongSelect({ album, onSongSelect }) {
    return (
        <div>
            <h2>Select a Song</h2>
            <select onChange={e => onSongSelect(e.target.value)}>
                {album.songs.map((song, index) => (
                    <option key={index} value={index}>
                        {song.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
