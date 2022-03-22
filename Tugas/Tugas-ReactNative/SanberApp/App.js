import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Telegram from './Telegram';
import Movie from './Tugas 12/Movie';
import About from './Tugas11/About';
import Login from './Tugas11/Login';
import Register from './Tugas11/Register';

export default function App() {
  return (
    <>
    {/* <Telegram /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <About /> */}
    <Movie />
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
