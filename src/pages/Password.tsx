import React, {useCallback, useState, useEffect} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function Password() {
  const [password, setPassword] = useState('');

  const onChangePassword = useCallback(
    text => {
      setPassword(text.trim());
    },
    [password],
  );

  const onSubmit = useCallback(() => {
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,16}$/.test(password)) {
      return Alert.alert(
        '알림',
        '비밀번호는 영문,숫자,특수문자를 포함하여 8자 이상 16자리 이하로 입력하세요',
      );
    }
    Alert.alert('알림', '회원가입 완료');
  }, [password]);

  return (
    <View style={styles.NumberWrapper}>
      <View>
        <Text style={styles.title}>비밀번호 설정</Text>
      </View>
      <View>
        <Text>
          비밀번호는 최소 6자리에 영문자와 숫자가 최소 하나씩 포함되어야 합니다.
        </Text>
        <TextInput
          value={password}
          style={styles.numberInput}
          placeholder="비밀번호 입력"
          onChangeText={onChangePassword}
        />
        {/* <TextInput
          onChangeText={text => setUserName(text)}
          value={userName}
          style={styles.numberInput}
          placeholder="비밀번호 다시 입력"
        /> */}
      </View>
      <View style={styles.nextBtnWrapper}>
        <Pressable
          onPress={onSubmit}
          style={!password ? styles.nextBtn : styles.nextGreenBtn}>
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

export default Password;
