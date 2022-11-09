import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  const [img, setImg] = useState('')

  const getCat = () => {
    fetch('https://aws.random.cat/meow')
      .then((res) => {
        return res.json()
      }).then((data) => {
        setImg(data.file)
      })
  }

  useEffect(() => {
    getCat
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{uri : img}} style={{width : "80%", height : "65%", marginBottom : "5%", borderRadius : 10}} />
      <Button
        onPress={getCat}
        title="new cat"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
