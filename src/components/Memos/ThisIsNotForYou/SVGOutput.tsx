import React, {FC, useEffect, useState} from 'react';
import {Layout} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Input} from 'react-native-elements';
import Svg, {Path, Text, TextPath} from 'react-native-svg';
import {interpolatePath, parse} from 'react-native-redash';

const SVGOutput: FC = () => {
  const insets = useSafeAreaInsets();
  const jiggle = useSharedValue(0);
  const progress = useSharedValue(0);

  const [amount, setAmount] = useState(Math.random());
  const [text, setText] = useState('');

  //   useEffect(() => {
  //     jiggle.value = withRepeat(
  //       withTiming(amount, {
  //         duration: 275,
  //         easing: Easing.ease,
  //       }),
  //       1,
  //       true,
  //       () => runOnJS(setAmount)(Math.random()),
  //     );
  //   }, [amount]);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedText = Animated.createAnimatedComponent(Text);
  const AnimatedTextPath = Animated.createAnimatedComponent(TextPath);

  const wavy = parse('M 10,90 Q 100,15 200,70 Q 340,140 400,30');
  const straight = parse('M 10,20 Q 30,45 200,70 Q 340,140 400,30');

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

  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(progress.value, [0, 1], [wavy, straight]);
    return {
      d,
    };
  });

  const fontSizeProp = useAnimatedProps(() => {
    const fontSize = interpolate(progress.value, [0, 1], [30, 40]);
    return {
      fontSize: fontSize,
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, {duration: 1500}), -1, true);
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
      }}>
      <Input onChangeText={value => setText(value)} />

      <Svg viewBox="0 0 300 300" width={300} height={300}>
        <AnimatedPath
          id="Geek"
          fill="none"
          stroke="none"
          animatedProps={animatedProps}
        />

        <AnimatedText fontSize={30} animatedProps={fontSizeProp}>
          <AnimatedTextPath href="#Geek" animatedProps={fontSizeProp}>
            {text}
          </AnimatedTextPath>
        </AnimatedText>
      </Svg>
    </View>
  );
};

export default SVGOutput;
