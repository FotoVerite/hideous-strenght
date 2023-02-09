import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Row} from 'components/Grid';
import {screenParams} from 'components/Navigation/screens';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import {MemosContext} from './context';

const Header: FC = () => {
  const context = useContext(MemosContext);
  const {sharedValues, folder} = context;
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const AnimatedP = Animated.createAnimatedComponent(P);
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  const cheveronAnimationProps = useAnimatedProps(() => {
    return {
      fontSize: interpolate(
        sharedValues.selectedFolder.value,
        [0, 1, 2],
        [14, 20, 20],
      ),
      color: interpolateColor(
        sharedValues.selectedFolder.value,
        [0, 1, 2],
        ['white', 'yellow', 'yellow'],
      ),
    };
  });

  const FolderAnimatedProps = useAnimatedProps(() => {
    return {
      fontSize: interpolate(
        sharedValues.selectedFolder.value,
        [0, 1],
        [34, 16],
      ),
      opacity: interpolate(
        sharedValues.selectedFolder.value,
        [0, 1],
        [1, 0.25],
      ),
      transform: [
        {
          scale: interpolate(sharedValues.selectedFolder.value, [0, 1], [1, 0]),
        },
      ],
    };
  });

  const BackAnimatedProps = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.selectedFolder.value,
        [0, 1, 2],
        [10, -100, -100],
      ),
    };
  });

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          if (context.folder.state) context.folder.set(undefined);
          else navigation.navigate('Desktop');
        }}>
        <Row style={{alignItems: 'center'}}>
          <AnimatedIcon
            name="chevron-left"
            size={24}
            style={{
              color: 'white',
              marginStart: 'auto',
              marginEnd: theme.spacing.p1,
            }}
          />
          <P style={{color: 'white'}}>Back</P>
        </Row>
      </TouchableHighlight>
      <Row>
        <AnimatedP
          style={[
            {
              fontSize: 12,
              color: 'white',
              marginTop: -2,
            },
            BackAnimatedProps,
          ]}></AnimatedP>
        <AnimatedP
          style={[
            {
              fontSize: 42,
              color: 'white',
              left: 12,
              top: -30,
              position: 'absolute',
            },
            FolderAnimatedProps,
          ]}>
          Voice Memos
        </AnimatedP>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Header;
