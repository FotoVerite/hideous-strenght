import React, {FC, useContext, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {RouteProp} from '@react-navigation/core';
import Fuse from 'fuse.js';

import {Layout, Row} from 'components/Grid';
import {ImageBackground, StatusBar, View} from 'react-native';

import bg from 'assets/images/backgrounds/butterflyBackground.png';
import {Application} from './Application';

import messenger from './icons/messages_icon.png';
import notepad from './icons/notes_icon.png';
import photos from './icons/photos.png';

import AppLibrary from './AppLibrary';

import theme from 'themes';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {ApplicationContext} from 'contexts/app';
import ZaraNotification from 'assets/scripts/Desktop/Zara';
import WhereAreTheApps from 'assets/scripts/Desktop/WhereAreTheApps';
import moment from 'moment';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  route: RouteProp<Record<string, object | undefined>, 'Desktop'>;
};

const Desktop: FC<Props> = props => {
  const [appLibrary, setAppLibrary] = useState(false);
  const [desktopStarted, setDesktopStart] = useState(moment());
  const [timeNow, setTimeNow] = useState(moment());

  const context = useContext(ApplicationContext);
  const isFocused = useIsFocused();

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setHidden(false);
    }, []),
  );

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['name'],
  };
  const fuse = new Fuse([], options);

  useEffect(() => {
    if (context.triggers.state.get('DESKTOP_FIRST_OPEN') === false) {
      context.script.set(ZaraNotification);
      context.notifications.add({
        iconName: 'reminder',
        title: 'Apologize',
        body: 'Text Zara and make this right!',
        key: 'apologize',
      });
      context.triggers.update('DESKTOP_FIRST_OPEN', true);
    }
  }, []);

  useEffect(() => {
    if (
      context.triggers.state.get('APP_LIBRARY_NOT_SEEN') === false &&
      timeNow.diff(desktopStarted, 'seconds') > 45
    ) {
      if (useIsFocused()) {
        context.script.set(WhereAreTheApps);
        context.triggers.update('APP_LIBRARY_NOT_SEEN', true);
      }
    } else if (context.triggers.state.get('APP_LIBRARY_NOT_SEEN') === false) {
      setTimeout(() => {
        setTimeNow(moment());
      }, 5000);
    }
  }, [timeNow]);

  return (
    <>
      <ImageBackground source={bg} resizeMode="cover" style={{flex: 1}}>
        <Layout>
          <PanGestureHandler
            activeOffsetX={[-50, 50]}
            onGestureEvent={e => {
              context.triggers.update('APP_LIBRARY_NOT_SEEN', true);
              setAppLibrary(e.nativeEvent.translationX < 0);
            }}>
            <View
              style={{
                flexGrow: 1,
              }}></View>
          </PanGestureHandler>
          <Row
            style={{
              flexGrow: 0,
              margin: theme.spacing.p2,
              borderTopWidth: 2,
              borderTopColor: 'black',
              paddingTop: theme.spacing.p2,
              alignItems: 'center',
              alignContent: 'space-between',
              justifyContent: 'space-between',
            }}>
            <Application
              image={notepad}
              title={'Notes'}
              navigateTo={'Notes'}
              navigation={props.navigation}
            />
            <Application
              image={photos}
              title={'Photos'}
              navigateTo={'PhotosApp'}
              navigation={props.navigation}
            />
            <Application
              image={messenger}
              title={'Messenger'}
              navigateTo={'Messages'}
              navigation={props.navigation}
            />
            <Application
              image={messenger}
              title={'Discord'}
              navigateTo={'Discord'}
              navigation={props.navigation}
            />
          </Row>
        </Layout>
      </ImageBackground>
      {appLibrary && (
        <AppLibrary setVisible={setAppLibrary} navigation={props.navigation} />
      )}
    </>
  );
};

export default Desktop;
