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

export default function App() {
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
    <Quiz3 />
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
