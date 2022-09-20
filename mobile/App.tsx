import { Background } from "./src/components/Background";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import "./src/services/notificationConfig";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";
import { useRef, useEffect } from 'react';
import { Subscription } from "expo-modules-core";
import * as Notification from "expo-notifications";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getPushNotificationListener = useRef<Subscription>();
  const responsePushNotificationListener = useRef<Subscription>();

  /*useEffect(() => {
    getPushNotificationToken();
  });*/

  /*useEffect(() => {
    getPushNotificationListener.current = Notification.addNotificationReceivedListener((notification) => {});

    responsePushNotificationListener.current = Notification.addNotificationResponseReceivedListener((response) => {});

    return () => {
      if(getPushNotificationListener.current && responsePushNotificationListener.current) {
        Notification.removeNotificationSubscription(getPushNotificationListener.current);
        Notification.removeNotificationSubscription(responsePushNotificationListener.current);
      }
    }
  });*/

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
