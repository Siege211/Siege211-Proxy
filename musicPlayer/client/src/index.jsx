import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayer from './components/MusicPlayer.jsx';

window.MusicPlayer = MusicPlayer;
ReactDOM.render(<MusicPlayer />, document.getElementById('root'));