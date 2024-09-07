import React, { useState, useEffect } from 'react';
import AlbumSelect from './components/AlbumSelect';
import SongSelect from './components/SongSelect';
import SongDetails from './components/SongDetails';
import Player from './components/Player';
import albumsData from './data/kendrick-albums.json';
import './App.css';

function App() {
    const [selectedAlbum, setSelectedAlbum] = useState(Object.keys(albumsData)[0]);
    const [selectedSong, setSelectedSong] = useState(0);

    const album = albumsData[selectedAlbum];
    const song = album.songs[selectedSong];

    useEffect(() => {
        document.body.style.backgroundColor = album.backgroundColor || '#ffffff';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [selectedAlbum]);

    useEffect(() => {
        setSelectedSong(0);
    }, [selectedAlbum]);

    const handleNextSong = () => {
        if (selectedSong < album.songs.length - 1) {
            setSelectedSong(selectedSong + 1);
        } else {
            setSelectedSong(0);
        }
    };

    const handlePreviousSong = () => {
        if (selectedSong > 0) {
            setSelectedSong(selectedSong - 1);
        } else {
            setSelectedSong(album.songs.length - 1);
        }
    };

    return (
        <div className="main-container">
            <h1>Kendrick Lamar</h1>
            <h1>Interactive Playlist</h1>
            <AlbumSelect albums={albumsData} onAlbumSelect={(albumKey) => {
                setSelectedAlbum(albumKey);
                setSelectedSong(0);
            }} />
            <SongSelect album={album} selectedSong={selectedSong} onSongSelect={(songIndex) => setSelectedSong(songIndex)} />

            <div className="navigation-buttons">
                <button onClick={handlePreviousSong}>Previous</button>
                <button onClick={handleNextSong}>Next</button>
            </div>

            <Player videoId={song.youtubeId} onSongEnd={handleNextSong} />
            <SongDetails song={song} />
        </div>
    );
}

export default App;
