import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Telegram from './Telegram';
import Movie from './Tugas 12/Movie';
import About from './Tugas11/About';
import Login from './Tugas11/Login';
import Register from './Tugas11/Register';
import Tugas13 from './Tugas13';
import Tugas14 from './Tugas14';
import Tugas15 from './Tugas15';
import Quiz3 from './Quiz3'
import Tugas16 from './Tugas16';

export default function App() {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCg0qZc97ewm2P9-KnkztPLWg7MulGyXbw",
  //   authDomain: "authenticationfirebasern-943c6.firebaseapp.com",
  //   projectId: "authenticationfirebasern-943c6",
  //   storageBucket: "authenticationfirebasern-943c6.appspot.com",
  //   messagingSenderId: "987322301253",
  //   appId: "1:987322301253:web:e4914e3f82b5899df71c2c"
  // };
  
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  return (
    <>
    {/* <Telegram /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <About /> */}
    {/* <Movie /> */}
    {/* <Tugas13 /> */}
    {/* <Tugas14 /> */}
    {/* <Tugas15 /> */}
    {/* <Quiz3 /> */}
    <Tugas16 />
    </>
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
