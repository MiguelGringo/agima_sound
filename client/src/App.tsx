import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import playMusic from './assets/next-svgrepo-com.svg';
import nextMusic from './assets/forward-svgrepo-com.svg';
import prevMusic from './assets/backword-svgrepo-com.svg';
import muteMusic from './assets/vol-mute-svgrepo-com.svg';
import repMusic from './assets/vol-high-svgrepo-com.svg';
import dreamMusic from './assets/music/dreams.mp3';
import imageDreamMusic from './assets/dreams-mudic.webp';

function App(): JSX.Element {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [progress, setProgress] = useState<number>(0);
  const [tempVolume, setTempVolume] = useState<number>(0);

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
    <>
      <div className="app"></div>
      <div className="player">
        <div className="oneGroup">
          <button>
            <img src={prevMusic} alt="player image" />
          </button>
          <button onClick={toggleAnimation}>
            <img src={playMusic} alt="player image" />
          </button>
          <button>
            <img src={nextMusic} alt="player image" />
          </button>
        </div>
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
          <div
            className="soundName"
            style={{ position: 'absolute', width: '150px', height: '150px' }}
          >
            <img src={imageDreamMusic} alt="music img" />
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
      </div>
      <div className={circleClassName}>
        <div className="small-circle_level-one">
          <div className="small-circle_level-two">
            <div className="small-circle_level-three">
              <div className="small-circle_level-four">
                <div className="small-circle_level-five">
                  <div className="small-circle_level-six">
                    <div className="small-circle_level-seven">
                      <div className="small-circle_level-eight">
                        <div className="small-circle_level-nine">
                          <div className="small-circle_level-ten">
                            <div className="small-circle_level-eleven">
                              <div className="small-circle_level-twelve">
                                <div className="small-circle_level-thirteen">
                                  <div className="small-circle_level-fourteen">
                                    <div className="small-circle_level-fifteen">
                                      <div className="small-circle_level-sixteen">
                                        <div className="small-circle_level-seventeen">
                                          <div className="small-circle_level-eighteen">
                                            <div className="small-circle_level-nineteen">
                                              <div className="small-circle_level-twenty"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
