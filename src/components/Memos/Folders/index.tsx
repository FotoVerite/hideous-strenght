import React, {FC, useContext} from 'react';
import {Layout} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList, ListRenderItem, View} from 'react-native';
import {FolderProps, MemosContext} from '../context';
import Folder from './Folder';
import theme from 'themes';

const MemosList: FC = () => {
  const memoContext = useContext(MemosContext);

  const renderItem: ListRenderItem<FolderProps> = ({item, index}) => {
    return <Folder folder={item} />;
  };
  return (
    <FlatList
      bounces
      style={{padding: theme.spacing.p1}}
      data={memoContext.folders}
      renderItem={renderItem}
      keyExtractor={(item: any, index) => index + ''}
      ItemSeparatorComponent={props => {
        return (
          <View
            style={{
              height: 1,
              marginVertical: 10,
              backgroundColor: '#0F0F0F',
            }}
          />
        );
      }}
    />
  );
};

export default MemosList;
