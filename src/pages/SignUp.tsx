import React, {useCallback, useState, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'AddId'>;

function SignUp({navigation}: SignUpScreenProps) {
  const [phoneNum, setPhoneNum] = useState('');

  useEffect(() => {
    if (phoneNum.length === 11) {
      setPhoneNum(
        phoneNum.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  }, [phoneNum]);
  // test

  const toAddId = useCallback(() => {
    // if (!phoneNum) {
    //   return Alert.alert('알림', '번호를 입력해주세요');
    // }
    navigation.navigate('AddId');
  }, [navigation]);

  return (
    <View style={styles.NumberWrapper}>
      <View>
        <Text style={styles.title}>기기 전화번호를 입력해 주세요.</Text>
      </View>
      <View>
        <Text>아무 핸드폰 번호 입력하면 넘어가지롱 ㅋ</Text>
        <TextInput
          onChangeText={text => setPhoneNum(text)}
          keyboardType={'numeric'}
          value={phoneNum.toString()}
          style={styles.numberInput}
          placeholder="전화번호 입력"
          maxLength={13}
        />
      </View>
      <View style={styles.nextBtnWrapper}>
        <Pressable
          onPress={toAddId}
          style={!phoneNum ? styles.nextBtn : styles.nextGreenBtn}>
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

export default SignUp;
