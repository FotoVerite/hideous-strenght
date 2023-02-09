import React, {FC, useEffect} from 'react';

import {Moment} from 'moment';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Player from './Player';
import {MemoType} from '../context';
import {P} from 'components/StyledText';
import {View} from 'react-native';

export type VoiceMailType = {
  number: string;
  area: string;
  length: string;
  date: Moment;
  uri: any;
  transcription: string;
};

const Memo: FC<{
  memo: MemoType;
  index: number;
  memoOpenedIndex: {
    set: React.Dispatch<React.SetStateAction<number | undefined>>;
    state: undefined | number;
  };
}> = ({memo, index, memoOpenedIndex}) => {
  const open = useSharedValue(0);
  const opacity = useSharedValue(0);

  const memoAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(open.value, [0, 1], [45, 160]),
    };
  });

  const playerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (index == memoOpenedIndex.state) {
      open.value = withTiming(1);
      opacity.value = withTiming(1, {duration: 750});
    } else {
      open.value = withTiming(0);
      opacity.value = withTiming(0);
    }
  }, [memoOpenedIndex.state]);

  return (
    <Animated.View style={[{overflow: 'hidden'}, memoAnimatedStyle]}>
      <View>
        <P size="m" style={{color: 'white'}}>
          {memo.title}
        </P>
        <P size="s" style={{color: 'white'}}>
          {memo.date}
        </P>
      </View>
      <Animated.View style={[playerAnimatedStyle]}>
        <Player mp3={memo.mp3} />
      </Animated.View>
    </Animated.View>
  );
};

export default Memo;
