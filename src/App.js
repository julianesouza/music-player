import React, { useState } from 'react';
//Adding components
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';

import data from './util';

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  console.log(songs);
  console.log(currentSong);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
