import { useEffect, useState } from 'react';

export type Orientation = 'landscape' | 'portrait';

const useScreenOrientation = (): [Orientation, number] => {

  const [orientation, setOrientation] = useState<[Orientation, number]>([
    'portrait',
    0,
  ]);

  const calc = (): [Orientation, number] => {
    let orientation: Orientation, angle: number;
    if(window.screen.orientation){
      orientation = Math.abs((window.screen.orientation as ScreenOrientation).angle) === 90 ? 'landscape' : 'portrait',
      angle = (window.screen.orientation as ScreenOrientation).angle;
    }
    else {
      orientation = Math.abs(window.orientation as number) === 90 ?  "landscape" : "portrait";
      angle = window.orientation as number;
    }
  
    return [orientation, angle];
  };

  const orientationEvent = () => {
    setOrientation(calc())
  };

  useEffect(() => {
    if ('onorientationchange' in window) {
      window.addEventListener('orientationchange', orientationEvent);
      setOrientation(calc());
    }

    return () => {
      window.removeEventListener('orientationchange', orientationEvent);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;