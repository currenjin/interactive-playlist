import React from 'react';

export default function SongDetails({ song }) {
    return (
        <div>
            <h2>{song.title}</h2>
            <p>{song.description}</p>
            <h3>Lyrics</h3>
            <p>{song.lyrics}</p>
            <h3>Analysis</h3>
            <p>{song.analysis}</p>
        </div>
    );
}
