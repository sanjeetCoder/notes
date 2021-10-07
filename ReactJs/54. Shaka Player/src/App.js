import React from 'react';
import './App.css';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import video from './media/sample-mp4-file.mp4';
import video2 from './media/big-buck-bunny_trailer.webm';

function App() {
  return (
    <div className='App'>
      <h1>Media Play</h1>
      <ShakaPlayer autoPlay src={video2} />
    </div>
  );
}

export default App;
