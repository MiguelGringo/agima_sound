import React from 'react';
import './style/circle.css';

type CircleProps = {
  circleClassName: string;
};
export default function Circle({ circleClassName }: CircleProps): JSX.Element {
  return (
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
  );
}
