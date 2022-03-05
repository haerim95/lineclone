import React, {useCallback, useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

function AddId() {
  const [userName, setUserName] = useState('');

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
      <View>
        <Pressable style={styles.nextBtn}>
          <Text>-&gt;</Text>
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
  nextBtn: {
    padding: 30,
    borderRadius: 50,
    backgroundColor: '#cccccc',
  },
});

export default AddId;
