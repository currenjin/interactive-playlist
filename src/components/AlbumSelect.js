import React from 'react';

export default function AlbumSelect({ albums, onAlbumSelect }) {
    return (
        <select onChange={e => onAlbumSelect(e.target.value)}>
            {Object.keys(albums).map(albumKey => (
                <option key={albumKey} value={albumKey}>
                    {albums[albumKey].title}
                </option>
            ))}
        </select>
    );
}
