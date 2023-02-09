import {MessagesType} from 'components/Discord/context';
import React, {FC, ReactNode, useContext, useEffect} from 'react';
import {ImageURISource} from 'react-native';

import {SharedValue, useSharedValue, withTiming} from 'react-native-reanimated';
import chris from 'components/Phone/assets/voicemails/theGhost.mp3';
import {ApplicationContext} from 'contexts/app';
import WhatHappened from 'assets/scripts/Messenger/ZaraOrZola';

export type MemosContextTypeDigest = {
  children: ReactNode;
};

export type FolderProps = {
  title: string;
  memos: MemoType[];
};

export type MemoType = {
  title: 'string';
  date: string;
  mp3: any;
};

export type MemosContextTypeDigested = {
  sharedValues: {
    selectedFolder: SharedValue<number>;
    showHeader: SharedValue<number>;
  };
  folders: FolderProps[];
  folder: {
    state: FolderProps | undefined;
    set: React.Dispatch<React.SetStateAction<FolderProps | undefined>>;
  };
  stateOfMemoApp: {
    state: number;
    set: React.Dispatch<React.SetStateAction<number>>;
  };
};
//defaults for empty app
export const MemosContext = React.createContext<MemosContextTypeDigested>({});

const MemosContextProvider: FC<MemosContextTypeDigest> = props => {
  const selectedFolder = useSharedValue(0);
  const showHeader = useSharedValue(0);
  const [folder, setFolder] = React.useState<FolderProps>();
  const [state, setState] = React.useState<number>(0);
  const appContext = useContext(ApplicationContext);

  useEffect(() => {
    selectedFolder.value = withTiming(folder == null ? 0 : 1, {duration: 500});
    if (folder != null && state === 0) {
      setState(1);
    }
  }, [folder]);

  useEffect(() => {
    if (state === 1) {
      appContext.script.set(WhatHappened);
    }
  }, [state]);

  const folders = [
    {
      title: 'walking around',
      memos: [
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
      ],
    },
    {
      title: 'walking around',
      memos: [
        {title: 'jazz', date: 'September 24, 2022', mp3: chris},
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
      ],
    },
    {
      title: 'walking around',
      memos: [
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
        {title: 'jazz', date: 'September 25, 2022', mp3: chris},
      ],
    },
    {
      title: 'walking around',
      memos: [
        {title: 'jazz', date: 'September 24, 2022', mp3: chris},
        {title: 'jazz', date: 'September 24, 2022', mp3: chris},
        {title: 'jazz', date: 'September 24, 2022', mp3: chris},
      ],
    },
  ];

  return (
    <MemosContext.Provider
      value={{
        sharedValues: {
          selectedFolder: selectedFolder,
          showHeader: showHeader,
        },
        folders: folders,
        folder: {
          state: folder,
          set: setFolder,
        },
        stateOfMemoApp: {
          set: setState,
          state: state,
        },
      }}>
      {props.children}
    </MemosContext.Provider>
  );
};

export default MemosContextProvider;
export const MemosContextConsumer = MemosContext.Consumer;
