import {useEffect, useState, useCallback, useRef} from 'react';
import Sound from 'react-native-sound';
import useInterval from '@use-it/interval';
import {
  HookOptions,
  ReturnedValue,
  PlayFunction,
  PlayOptions,
} from './useSoundTypes';

const useSound = (
  url: string,
  {
    volume = 1,
    soundEnabled = true,
    interrupt = false,
    timeRate = 1000,
    numberOfLoops = 0,
  }: HookOptions = {},
) => {
  const [status, setStatus] = useState<{
    sound?: Sound | undefined;
    duration: 0;
    isPlaying: boolean;
    loading: boolean;
  }>({
    duration: 0,
    loading: false,
    isPlaying: false,
  });
  const [currentTime, setCurrentTime] = useState(0);

  useInterval(() => {
    if (status.sound?.isPlaying()) {
      status.sound?.getCurrentTime(sec => {
        if (sec > status.duration) {
          setCurrentTime(status.duration);
        } else setCurrentTime(sec);
      });
    }
  }, timeRate);

  useEffect(() => {
    if (status.sound) {
      status.sound.setNumberOfLoops(numberOfLoops);
    }
  }, [status.sound, numberOfLoops]);

  useEffect(() => {
    setStatus(s => Object.assign({}, s, {loading: true}));
    Sound.setCategory('Playback');
    let isCancelled = false;
    const _sound = new Sound(url, error => {
      if (error) {
        console.log(error);
      }
      if (!isCancelled) {
        setStatus(s => Object.assign({}, s, {sound: _sound, loading: false}));
      } else {
        setStatus(s => Object.assign({}, s, {loading: false}));
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (status.sound) {
      status.sound.setVolume(volume);
    }
  }, [volume]);

  const play: PlayFunction = useCallback(
    (options?: PlayOptions) => {
      if (!status.sound || (!soundEnabled && !options?.forceSoundEnabled)) {
        return;
      }
      if (interrupt) {
        status.sound.stop();
      }

      status.sound.play(() => {
        //@ts-ignore
        setCurrentTime(currentTime);
      });
    },
    [status.sound, soundEnabled, interrupt],
  );

  const stop = useCallback(() => {
    if (!status.sound) {
      return;
    }
    status.sound.stop();
  }, [status.sound]);

  const pause = useCallback(() => {
    if (!status.sound) {
      return;
    }
    status.sound;
  }, [status.sound]);

  const seek = useCallback(
    (sec: number) => {
      if (!status.sound) {
        return;
      }
      status.sound?.setCurrentTime(sec);
      setCurrentTime(sec);
    },
    [status.sound],
  );

  const returnedValue: ReturnedValue = [play, pause, stop, status];
  return returnedValue;
};

export default useSound;
