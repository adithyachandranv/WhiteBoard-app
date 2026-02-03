import Image from "next/image";
import Navbar from '../components/navbar'
import Canvas from '../components/whiteboard/canvas'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Canvas/>
    </>
  );
}
