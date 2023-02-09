import React, {FC, useEffect, useState} from 'react';
import {Layout} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageBackground, View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Input} from 'react-native-elements';
import SVGOutput from './SVGOutput';
import background from './assets/red_dot_background.png';

const RedBackground: FC = props => {
  const insets = useSafeAreaInsets();
  const jiggle = useSharedValue(0);

  const [amount, setAmount] = useState(Math.random());
  const AnimatedBackground = Animated.createAnimatedComponent(ImageBackground);

  const jiggleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(jiggle.value, [0, 1], [1.5, 4.15]),
        },
      ],
      opacity: interpolate(jiggle.value, [0, 1], [0.5, 1]),
    };
  });

  return (
    <AnimatedBackground
      source={background}
      resizeMode="repeat"
      style={[{width: '100%', height: '100%'}, jiggleStyle]}
    />
  );
};

export default RedBackground;
