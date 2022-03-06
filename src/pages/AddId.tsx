import React, {useCallback, useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type AddIdScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
function AddId({navigation}: AddIdScreenProps) {
  const [userName, setUserName] = useState('');

  const toPassword = useCallback(() => {
    navigation.navigate('Password');
  }, [navigation]);

  return (
    <View style={styles.NumberWrapper}>
      <View>
        <Text style={styles.title}>새 계정 만들기</Text>
      </View>
      <View>
        <Text>다른 LINE 사용자가 내 이름과 프로필을 볼 수 있습니다.</Text>
        <TextInput
          onChangeText={text => setUserName(text)}
          value={userName}
          style={styles.numberInput}
          placeholder="사용자 이름 입력"
        />
      </View>
      <View style={styles.nextBtnWrapper}>
        <Pressable
          onPress={toPassword}
          style={!userName ? styles.nextBtn : styles.nextGreenBtn}>
          <Text style={styles.nextBtnTxt}>-&gt;</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NumberWrapper: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  numberInput: {
    marginTop: 10,
    padding: 5,
    marginBottom: 20,
    fontSize: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  nextBtnWrapper: {
    alignItems: 'flex-end',
  },
  nextBtn: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#cccccc',
  },
  nextBtnTxt: {
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  nextGreenBtn: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#1FC46E',
  },
});

export default AddId;
