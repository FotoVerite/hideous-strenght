import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import useSound from 'hooks/useSound';
import {Slider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Row} from 'components/Grid';
import chris from 'components/Phone/assets/voicemails/theGhost.mp3';
import {toHHMMSS} from 'components/utility/toHHMMSS';
import {P} from 'components/StyledText';
import theme from 'themes';

const Player: FC<{mp3: any}> = ({mp3}) => {
  const [animatedValue] = useState(new Animated.Value(0));

  const [play, pause, stop, data] = useSound(mp3, {
    timeRate: 100,
  });

  const onPress = () => {
    if (!data.isPlaying) play();
    else pause();
  };

  const seek = (value: number) => {
    console.log(data);
    data.seek(value);
  };

  useEffect(() => {
    return () => {
      data.sound?.stop();
    };
  }, []);

  return (
    <View style={styles.body}>
      {!data.loading && (
        <Slider
          onSlidingStart={() => pause()}
          onSlidingComplete={value => seek(value)}
          onValueChange={value => {}}
          value={data.currentTime}
          maximumValue={data.duration}
          maximumTrackTintColor="gray"
          minimumTrackTintColor="white"
          thumbTintColor="white"
          style={{
            marginTop: theme.spacing.p1,
            width: '100%',
          }}
          thumbStyle={{width: 7, height: 7}}
        />
      )}
      <Row
        style={{
          justifyContent: 'space-between',
          width: '60%',
        }}>
        <TouchableOpacity onPress={() => seek(data.currentTime - 10)}>
          {data.loading && <ActivityIndicator size={'large'} />}
          {!data.loading && (
            <>
              <MaterialIcon name={'replay-10'} size={36} color="#74B6EC" />
            </>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress()}>
          {data.loading && <ActivityIndicator size={'large'} />}
          {!data.loading && (
            <>
              <Icon
                name={data.isPlaying ? 'controller-paus' : 'controller-play'}
                size={36}
                color="#74B6EC"
              />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => seek(10 + data.currentTime)}>
          {data.loading && <ActivityIndicator size={'large'} />}
          {!data.loading && (
            <>
              <MaterialIcon name={'forward-10'} size={36} color="#74B6EC" />
            </>
          )}
        </TouchableOpacity>
      </Row>

      <P style={{color: 'white', fontSize: 12, marginTop: theme.spacing.p1}}>
        {toHHMMSS(data?.currentTime)}/{toHHMMSS(data?.duration)}
      </P>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default Player;
