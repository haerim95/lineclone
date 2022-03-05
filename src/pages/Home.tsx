import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useCallback} from 'react';
import {RootStackParamList} from '../../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function Home({navigation}: HomeScreenProps) {
  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <View style={styles.homeWrapper}>
      <View>
        <Text style={styles.homeTxt}>환영합니다.</Text>
      </View>

      <View>
        <Text style={styles.homeComment}>
          무료 메시지와 영상통화, 음성통화를 부담없이 즐겨보세요! 네이티브
          어렵다
        </Text>
      </View>
      <View style={styles.joinBtmWrapper}>
        <Pressable onPress={toSignUp} style={styles.joinBtn}>
          <Text style={styles.txtBtn}>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTxt: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  homeComment: {
    fontSize: 16,
    color: '#cccccc',
  },
  joinBtn: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#1FC46E',
  },
  joinBtmWrapper: {
    marginTop: 40,
    flexDirection: 'row',
  },
  txtBtn: {
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default Home;
