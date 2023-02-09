import React, {FC, useContext, useEffect, useState} from 'react';
import {Layout, Row} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList, ListRenderItem, Pressable, View} from 'react-native';
import theme from 'themes';
import Memo from './Memo';
import {MemosContext} from '../context';
import Animated, {
  interpolate,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {P} from 'components/StyledText';

const MemosList: FC = () => {
  const memoContext = useContext(MemosContext);
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const opacityValue = useSharedValue(0);
  const [memoOpenedIndex, setMemoOpenedIndex] = useState<undefined | number>(
    undefined,
  );

  const renderItem: ListRenderItem<any> = ({item, index}) => {
    return (
      <Pressable
        onPress={() => setMemoOpenedIndex(index)}
        style={{paddingVertical: 12}}>
        <Memo
          memo={item}
          index={index}
          memoOpenedIndex={{set: setMemoOpenedIndex, state: memoOpenedIndex}}
        />
      </Pressable>
    );
  };

  const FolderAnimatedStyle = useAnimatedStyle(() => {
    return {
      marginLeft: interpolate(
        memoContext.sharedValues.selectedFolder.value,
        [0, 1],
        [1000, 0],
      ),
    };
  });

  const ChevronAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  useAnimatedReaction(
    () => {
      return memoContext.sharedValues.selectedFolder.value;
    },
    (result, previous) => {
      if (previous == null) {
        return;
      }
      if (result > previous && result > 0.5) {
        opacityValue.value = withDelay(150, withTiming(1));
      } else if (result < previous && result < 0.5) {
        opacityValue.value = withTiming(0);
      }
    },
    [],
  );

  useEffect(() => {
    setMemoOpenedIndex(undefined);
  }, [memoContext.folder.state]);

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          zIndex: 2,
        },
        FolderAnimatedStyle,
      ]}>
      <TouchableHighlight
        onPress={() => {
          memoContext.folder.set(undefined);
        }}>
        <Row style={{alignItems: 'center'}}>
          <AnimatedIcon
            name="chevron-left"
            size={36}
            style={[
              {
                color: '#2c79e5',
                marginStart: theme.spacing.p2,
                marginEnd: theme.spacing.p1,
              },
              ChevronAnimation,
            ]}
          />
        </Row>
      </TouchableHighlight>
      <P
        size="ml"
        style={{
          color: 'white',
          marginTop: theme.spacing.p1,
          marginStart: theme.spacing.p2,
        }}>
        {memoContext.folder.state?.title.toUpperCase()}
      </P>
      <FlatList
        bounces
        style={{padding: theme.spacing.p2}}
        data={memoContext.folder.state?.memos}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 1,
                backgroundColor: '#5a5858',
              }}
            />
          );
        }}
      />
    </Animated.View>
  );
};

export default MemosList;
