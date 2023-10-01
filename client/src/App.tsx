import React, { useRef, useState } from 'react';
import './style/App.css';
import Circle from './UI/circle/Circle';
import Player from './UI/player/Player';

function App(): JSX.Element {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAnimation = () => {
    setIsAnimationEnabled(!isAnimationEnabled);

    if (audioRef.current) {
      if (isAnimationEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };
  const circleClassName = isAnimationEnabled ? 'circle' : 'circle no-animation';

  return (
    <>
      <div className="app"></div>
      <Player toggleAnimation={toggleAnimation} audioRef={audioRef} />
      <Circle circleClassName={circleClassName} />
    </>
  );
}

export default App;
