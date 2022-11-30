import { StatusBar } from 'expo-status-bar';
import CameraApp from "./CameraApp"
import Splash from "./Splash"

export default function App() {
  return (
    <>
      <Splash />
      <CameraApp />
      <StatusBar style="auto" />
    </>
  );
}
