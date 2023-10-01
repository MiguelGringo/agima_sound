import React from 'react';
import playMusic from '../../../../assets/next-svgrepo-com.svg';
import nextMusic from '../../../../assets/forward-svgrepo-com.svg';
import prevMusic from '../../../../assets/backword-svgrepo-com.svg';
import './style/buttongroup.css';

type ButtonGroupType = {
  toggleAnimation: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
};
export default function ButtonGroup({ toggleAnimation, audioRef }: ButtonGroupType): JSX.Element {
  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const skipAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = audioRef.current.duration;
    }
  };

  return (
    <div className="oneGroup">
      <button onClick={restartAudio}>
        <img src={prevMusic} alt="player image" />
      </button>
      <button onClick={toggleAnimation}>
        <img src={playMusic} alt="player image" />
      </button>
      <button
        onClick={() => {
          skipAudio();
          toggleAnimation();
        }}
      >
        <img src={nextMusic} alt="player image" />
      </button>
    </div>
  );
}
