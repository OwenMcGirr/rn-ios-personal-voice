import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as RnIosPersonalVoice from "rn-ios-personal-voice";

export default function App() {
  const [access, setAccess] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [notAuthorized, setNotAuthorized] = useState(false);
  const [notSupported, setNotSupported] = useState(false);
  const [notAllowed, setNotAllowed] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [voices, setVoices] = useState<string[]>([]);

  const requestAccess = async () => {
    setAccess(await RnIosPersonalVoice.requestAccessToPersonalVoices());
  };

  const checkAuthorized = async () => {
    setAuthorized(await RnIosPersonalVoice.personalVoicesAuthorized());
  };

  const checkNotAuthorized = async () => {
    setNotAuthorized(await RnIosPersonalVoice.personalVoicesNotAuthorized());
  };

  const checkNotSupported = async () => {
    setNotSupported(
      await RnIosPersonalVoice.deviceDoesNotSupportPersonalVoices()
    );
  };

  const checkNotAllowed = async () => {
    setNotAllowed(await RnIosPersonalVoice.deviceDoesNotAllowPersonalVoices());
  };

  const checkIsPersonal = async () => {
    setIsPersonal(
      await RnIosPersonalVoice.isPersonalVoice(
        "com.apple.ttsbundle.Samantha-compact"
      )
    );
  };

  const getVoices = async () => {
    setVoices(await RnIosPersonalVoice.getPersonalVoices());
  };

  return (
    <View style={styles.container}>
      <Text>Access: {access ? "Granted" : "Denied"}</Text>
      <Text>Authorized: {authorized ? "Yes" : "No"}</Text>

      <Text>Not Authorized: {notAuthorized ? "Yes" : "No"}</Text>

      <Text>Not Supported: {notSupported ? "Yes" : "No"}</Text>

      <Text>Not Allowed: {notAllowed ? "Yes" : "No"}</Text>

      <Text>Is Personal: {isPersonal ? "Yes" : "No"}</Text>

      <Text>Voices: {voices.join(", ")}</Text>

      <Text onPress={requestAccess}>Request Access</Text>

      <Text onPress={checkAuthorized}>Check Authorized</Text>

      <Text onPress={checkNotAuthorized}>Check Not Authorized</Text>

      <Text onPress={checkNotSupported}>Check Not Supported</Text>

      <Text onPress={checkNotAllowed}>Check Not Allowed</Text>

      <Text onPress={checkIsPersonal}>Check Is Personal</Text>

      <Text onPress={getVoices}>Get Voices</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
