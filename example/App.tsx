import { StyleSheet, Text, View } from 'react-native';

import * as RnIosPersonalVoice from 'rn-ios-personal-voice';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RnIosPersonalVoice.hello()}</Text>
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
