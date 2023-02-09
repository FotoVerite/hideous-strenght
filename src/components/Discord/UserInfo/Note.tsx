import React, {FC} from 'react';
import {P} from 'components/StyledText';
import theme, {discordTheme} from 'themes';
import {View} from 'react-native';

type Props = {note: string};

const Note: FC<Props> = ({note}) => {
  return (
    <View style={{backgroundColor: discordTheme.colors.gray60}}>
      <P
        style={{
          color: 'white',
          fontWeight: 'bold',
          marginLeft: theme.spacing.p2,
        }}>
        Notes
      </P>
      <View
        style={{
          backgroundColor: discordTheme.colors.gray40,
          marginHorizontal: theme.spacing.p2,
          marginVertical: theme.spacing.p1,
          padding: theme.spacing.p1,
          flexGrow: 1,
          marginBottom: 50,
          height: 100,
        }}>
        <P style={{color: 'gray'}}>{note || 'HWLOOSA'}</P>
      </View>
    </View>
  );
};

export default Note;
