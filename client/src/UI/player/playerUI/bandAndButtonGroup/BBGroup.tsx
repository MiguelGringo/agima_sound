import React, { useEffect, useState } from 'react';
import muteMusic from '../../../../assets/vol-mute-svgrepo-com.svg';
import repMusic from '../../../../assets/vol-high-svgrepo-com.svg';
import dreamMusic from '../../../../assets/music/dreams.mp3';
import './style/bbgroup.css'

type BBGroupType = {
  audioRef: React.RefObject<HTMLAudioElement>;
};
export default function BBGroup({ audioRef }: BBGroupType): JSX.Element {
  const [volume, setVolume] = useState<number>(50);
  const [progress, setProgress] = useState<number>(0);
  const [tempVolume, setTempVolume] = useState<number>(0);

  const changeVolume = (value: number) => {
    console.log('New Volume:', value);
    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const changeProgress = (value: number) => {
    console.log('New Progress:', value);
    setProgress(value);

    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const newTime = (value / 100) * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleMuteButtonClick = () => {
    if (audioRef.current) {
      if (volume !== 0) {
        setTempVolume(volume);
        changeVolume(0);
      } else {
        changeVolume(tempVolume);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const newProgress = (currentTime / duration) * 100;
      setProgress(newProgress);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);
  return (
    <div className="twoGroupt">
      <div className="button-group">
        <button className="volume-button" onClick={handleMuteButtonClick}>
          <img src={muteMusic} alt="sound image" />
        </button>
        <div
          className="volumeLine"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            changeVolume(percentage);
          }}
        >
          <div className="volumeLineInner" style={{ width: `${volume}%` }}>
            <div className="slider" style={{ left: `${volume}%` }}></div>
          </div>
        </div>
        <button className="volume-button">
          <img src={repMusic} alt="sound image" />
        </button>
      </div>
      <div className="soundName" >
        Dream music
        <audio ref={audioRef} src={dreamMusic} />
      </div>
      <div
        className="shortLine"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = (x / rect.width) * 100;
          changeProgress(percentage);
        }}
      >
        <div className="shortLineInner" style={{ width: `${progress}%` }}>
          <div className="slider" style={{ left: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
