import React, {FC, ReactNode, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import useSound from 'hooks/useSound';
import mp3 from './assets/boom.mp3';

const ZoomStartContainer: FC<ReactNode> = ({children}) => {
  const insets = useSafeAreaInsets();
  const zoom = useSharedValue(0);
  const changeJiggle = useSharedValue(false);
  const [play, pause, stop, data] = useSound(mp3, {
    timeRate: 100,
  });

  useEffect(() => {
    play();
  }, [data.loading]);

  useEffect(() => {
    zoom.value = withRepeat(
      withTiming(1, {
        duration: 2000,
        easing: Easing.bounce,
      }),
      1,
    );
  }, []);

  const zoomStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: zoom.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[{alignSelf: 'center'}, zoomStyle]}>
      {children}
    </Animated.View>
  );
};

export default ZoomStartContainer;
