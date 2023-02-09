import {MessagesType} from 'components/Discord/context';
import React, {FC, ReactNode, useEffect} from 'react';
import {ImageURISource} from 'react-native';

import {SharedValue, useSharedValue, withTiming} from 'react-native-reanimated';
import chris from 'components/Phone/assets/voicemails/theGhost.mp3';

export type EndAnimationContextTypeDigest = {
  children: ReactNode;
};

export type EndAnimationContextTypeDigested = {
  sharedValues: {
    zoomInStart: SharedValue<number>;
  };
};
//defaults for empty app
export const EndAnimationContext =
  React.createContext<EndAnimationContextTypeDigested>({});

const EndAnimationContextProvider: FC<
  EndAnimationContextTypeDigest
> = props => {
  return (
    <EndAnimationContext.Provider
      value={{
        sharedValues: {
          zoomInStart: zoomInStart,
        },
      }}>
      {props.children}
    </EndAnimationContext.Provider>
  );
};

export default EndAnimationContextProvider;
export const EndAnimationContextConsumer = EndAnimationContext.Consumer;
