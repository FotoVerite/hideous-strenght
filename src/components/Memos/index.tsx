import React, {FC} from 'react';
import {Layout} from 'components/Grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MemosContextProvider from './context';
import Container from './Container';

const Memos: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Layout style={{marginTop: insets.top}}>
      <MemosContextProvider>
        <Container />
      </MemosContextProvider>
    </Layout>
  );
};

export default Memos;
