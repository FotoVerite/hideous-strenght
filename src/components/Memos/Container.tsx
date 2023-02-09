import React, {FC, useContext} from 'react';
import {Layout} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import MemosContextProvider, {MemosContext} from './context';
import Header from './Header';
import Folder from './Folder';
import Folders from './Folders';
import ThisIsNotForYou from './ThisIsNotForYou';

const Container: FC = () => {
  const memosContext = useContext(MemosContext);
  return (
    <>
      {memosContext.stateOfMemoApp.state != 1 && (
        <>
          <Header />
          <Folders />
          <Folder />
        </>
      )}
      {memosContext.stateOfMemoApp.state == 1 && (
        <>
          <ThisIsNotForYou />
        </>
      )}
    </>
  );
};

export default Container;
