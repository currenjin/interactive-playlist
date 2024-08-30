import React, { useState } from 'react';
import AlbumSelect from './components/AlbumSelect';
import SongSelect from './components/SongSelect';
import SongDetails from './components/SongDetails';
import Player from './components/Player';
import albumsData from './data/kendrick-albums.json';

function App() {
    const [selectedAlbum, setSelectedAlbum] = useState('good-kid-mad-city');
    const [selectedSong, setSelectedSong] = useState(0);

    const album = albumsData[selectedAlbum];
    const song = album.songs[selectedSong];

    return (
        <div>
            <h1>Kendrick Lamar Interactive Playlist</h1>
            <AlbumSelect albums={albumsData} onAlbumSelect={(albumKey) => {
                setSelectedAlbum(albumKey);
                setSelectedSong(0);
            }} />
            <SongSelect album={album} onSongSelect={(songIndex) => setSelectedSong(songIndex)} />
            <Player videoId={song.youtubeId} />
            <SongDetails song={song} />
        </div>
    );
}

export default App;
