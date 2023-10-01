import React from 'react';
import ButtonGroup from './playerUI/buttonGroup/ButtonGroup';
import BBGroup from './playerUI/bandAndButtonGroup/BBGroup';
import './style/player.css'

type PlayerType = {
  toggleAnimation: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
};

export default function Player({ toggleAnimation, audioRef }: PlayerType): JSX.Element {
  return (
    <div className="player">
      <ButtonGroup toggleAnimation={toggleAnimation} audioRef={audioRef}/>
      <BBGroup audioRef={audioRef}/>
    </div>
  );
}
