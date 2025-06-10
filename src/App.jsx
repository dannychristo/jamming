import { useState } from 'react'
import spotifyLogo from './assets/spotify-seeklogo.svg'
import './App.css'

function App() {
  const mockResponse = [
    {
      title: 'Song One',
      artist: 'Artist One',
      album: 'Album One',
      id: '49284'
    },
    {
      title: 'Song Two',
      artist: 'Artist Two',
      album: 'Album Two',
      id: '14045'
    }
  ];

  return (
    <>
      <div id="logo">
        <a href="https://open.spotify.com" target="_blank">
          <img src={spotifyLogo} className="logo spotify" alt="Spotify logo" />
        </a>
      </div>
      <div id="search">
        <SearchFunction />
        <SearchResult />
      </div>
      <div id="playlistView">
        <PlaylistName />
        <PlaylistSongs />
        <button id="addToSpotify"></button>
      </div>
    </>
  )
}

export default App
