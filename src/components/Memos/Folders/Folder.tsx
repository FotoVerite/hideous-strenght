import {Row} from 'components/Grid';
import NoteContext from 'components/Notes/context/NoteContext';
import {Bold, P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from 'themes';
import {FolderProps, MemosContext} from '../context';

const Folder: FC<{folder: FolderProps}> = ({folder}) => {
  const context = useContext(MemosContext);
  return (
    <TouchableHighlight onPress={() => context.folder.set(folder)}>
      <Row
        style={{
          alignItems: 'center',
        }}>
        <Icon
          name="folder-open"
          color="#2c79e5"
          size={20}
          style={{marginEnd: theme.spacing.p1}}
        />
        <P style={styles.fonts}>{folder.title}</P>
        <Row style={{flexGrow: 0, marginLeft: 'auto', alignItems: 'center'}}>
          <P style={styles.amount}>{folder.memos.length}</P>
          <Icon name="chevron-right" color="gray" size={20} />
        </Row>
      </Row>
    </TouchableHighlight>
  );
};

const styles = {
  fonts: {color: 'white', fontSize: 20},
  amount: {color: 'gray', fontSize: 16, marginEnd: theme.spacing.p2},
};

export default Folder;
