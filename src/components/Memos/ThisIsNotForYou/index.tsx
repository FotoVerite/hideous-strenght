import React, {FC, useEffect, useState} from 'react';
import {Layout} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Input} from 'react-native-elements';
import SVGOutput from './SVGOutput';
import RedBackground from './RedBackground';
import {P} from 'components/StyledText';
import Cursor from './Cursor';
import ZoomStartContainer from './ZoomStartContainer';

const ThisIsNotForYou: FC = () => {
  const insets = useSafeAreaInsets();
  const jiggle = useSharedValue(0);
  const changeJiggle = useSharedValue(false);

  const [amount, setAmount] = useState(Math.random());

  useEffect(() => {
    jiggle.value = withRepeat(
      withTiming(Math.random(), {
        duration: 275,
        easing: Easing.ease,
      }),
      1,
      true,
      () => (changeJiggle.value = true),
    );
  }, []);

  useAnimatedReaction(
    () => {
      return changeJiggle.value;
    },
    (result, previous) => {
      if (previous == null) {
        return;
      }
      if (result) {
        changeJiggle.value = false;
        jiggle.value = withRepeat(
          withTiming(Math.random(), {
            duration: 275,
            easing: Easing.ease,
          }),
          1,
          true,
          () => (changeJiggle.value = true),
        );
      }
    },
    [],
  );

  const jiggleStyle = useAnimatedStyle(() => {
    return {
      blurRadius: 5,
      transform: [
        {
          scale: interpolate(jiggle.value, [0, 1], [0.95, 1.15]),
        },
        {
          translateX: interpolate(jiggle.value, [0, 1], [-1, 1]),
        },
        {
          skewX: interpolate(jiggle.value, [0, 1], [-2, 2]) + 'deg',
        },
        {
          skewY: interpolate(jiggle.value, [0, 1], [-1, 1]) + 'deg',
        },
      ],
    };
  });

  return (
    <ZoomStartContainer
      style={{
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          {
            borderWidth: 4,
            borderRadius: 20,
            backgroundColor: '#600f0f',
            padding: 3,
            marginBottom: insets.bottom,
            width: '90%',
            height: '90%',
          },
        ]}>
        <Animated.View
          style={{
            borderWidth: 3,
            borderRadius: 12,
            backgroundColor: '#3a1616',
            padding: 1,
          }}>
          <Animated.View
            style={{
              borderWidth: 1,
              borderRadius: 12,
              borderColor: '#870303',
              height: '100%',
              backgroundColor: 'black',
              overflow: 'hidden',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Animated.View>
              <P
                style={{
                  color: '#870303',
                  width: 300,
                  fontSize: 56,
                  textAlign: 'center',
                }}>
                this is Not for you
              </P>
              <Cursor />
            </Animated.View>
            {/* <RedBackground />
            <SVGOutput /> */}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </ZoomStartContainer>
  );
};

export default ThisIsNotForYou;
