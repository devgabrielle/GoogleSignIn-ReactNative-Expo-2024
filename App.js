import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "./src/SignInScreen";
import HomeScreen from "./src/HomeScreen";
import SplashScreen from "./src/SplashScreen";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { app } from "./src/services/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  getReactNativePersistence
} from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const auth = getAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  const [authData, setAuthData] = useState();
  const [request, response, prompAsync] = Google.useAuthRequest({
    androidClientId:
      "349025739013-73dpcn69vmr44vj364hk4kiqjrp1l467.apps.googleusercontent.com",
    iosClientId:
      "349025739013-up9u83rajuuo4dp134h0q67hsholo390.apps.googleusercontent.com",
    webClientId: 
      '349025739013-6nr4cv4r3f2c7slri8faecjasa809jk4.apps.googleusercontent.com',
   
  });

  const checkLocalUser = async () => {
    try {
      setisLoading(true);
      const userJSON = await ReactNativeAsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      console.log("localstorage: ", userData);
      setAuthData(userData); // Corrigido para userData
    } catch (e) {
      alert(e.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithGoogle(credential);
    }
  }, [response]);

  // Função para tratar sign-in com Google e Firebase
  const signInWithGoogle = async (credential) => {
    try {
      setisLoading(true);
      const result = await signInWithCredential(auth, credential);
      const user = result.user;
      console.log("User signed in: ", user);
      setAuthData(user);
      await ReactNativeAsyncStorage.setItem("@user", JSON.stringify(user));
    } catch (error) {
      console.error("Error during Google sign-in: ", error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    checkLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User authenticated: ", JSON.stringify(user, null, 2));
        setAuthData(user);
        await ReactNativeAsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        console.log("User is not authenticated");
        setAuthData(null);
      }
    });

    return () => unsub();
  }, []);

  // Função para sign-out do Firebase
  async function signOut() {
    setisLoading(true);
    try {
      await auth.signOut(); // Encerra a sessão no Firebase
      setAuthData(null);
      await ReactNativeAsyncStorage.removeItem("@user");
    } catch (error) {
      console.error("Error during sign out: ", error);
    } finally {
      setisLoading(false);
    }
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {authData ? (
        <HomeScreen signOut={signOut} />
      ) : (
        <SignInScreen prompAsync={prompAsync} request={request} />
      )}
    </NavigationContainer>
  );
}
