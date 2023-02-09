import React, {FC, useContext} from 'react';
import {Dimensions, FlatList} from 'react-native';

import theme from 'themes';
import {NoteContext} from './context/NoteContext';
import Animated, {interpolate, useAnimatedProps} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';

const Note: FC = () => {
  const context = useContext(NoteContext);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const {sharedValues, folder, note} = context;
  const {width, height} = Dimensions.get('window');
  const FolderAnimatedProps = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [width, width, 0],
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'black',
          paddingHorizontal: theme.spacing.p2,
          zIndex: 10,
          top: 25,
          position: 'absolute',
          width: width,
          flex: 1,
          flexGrow: 1,
          bottom: 0,
        },
        FolderAnimatedProps,
      ]}>
      <ScrollView
        style={{
          flex: 1,
          flexGrow: 1,
          padding: 0,
          margin: 0,
          marginBottom: 50,
        }}>
        {note.state?.note}
      </ScrollView>
    </Animated.View>
  );
};

export default Note;
