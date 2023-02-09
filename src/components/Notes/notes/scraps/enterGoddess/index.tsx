/* eslint-disable react-native/no-inline-styles */
import {NoteText, P} from 'components/StyledText';
import React from 'react';
import {Text, View} from 'react-native';
import Goddess from './Goddess';

export const enterGoddess = {
  title: 'Enter Goddess',
  note: (
    <View>
      <NoteText ph={'p1'}>Am I having a psychotic break?</NoteText>
      <NoteText ph={'p1'}>Am I having a psychotic break?</NoteText>
      <NoteText ph={'p1'}>Am I having a psychotic break?</NoteText>
      <NoteText ph={'p1'}>
        It's easier to consider that then the alternative.
      </NoteText>

      <P
        style={{
          color: 'blue',
          fontSize: 36,
          position: 'absolute',
          top: '50%',
          transform: [{rotateX: '50deg'}, {rotateZ: '50deg'}],
        }}>
        Wherever I am, I am Home
      </P>
      <Goddess />
    </View>
  ),
};
