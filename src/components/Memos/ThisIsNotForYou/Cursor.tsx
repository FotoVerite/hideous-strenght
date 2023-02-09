import React, {FC, useEffect} from 'react';

import {P} from 'components/StyledText';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import theme from 'themes';

const Cursor: FC = () => {
  const shared = useSharedValue(-0.2);
  const AnimatedP = Animated.createAnimatedComponent(P);

  useEffect(() => {
    shared.value = withRepeat(withTiming(1, {duration: 750}), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: shared.value,
    };
  });

  return (
    <AnimatedP
      style={[
        {
          textAlign: 'center',
          color: 'red',
          fontSize: 34,
          marginTop: theme.spacing.p2,
        },
        animatedStyle,
      ]}>
      |
    </AnimatedP>
  );
};

export default Cursor;
