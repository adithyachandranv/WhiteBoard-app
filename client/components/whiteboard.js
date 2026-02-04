'use client';
import Canvas from "./whiteboard/canvas";
import Navbar from "./navbar";
import { useState } from "react";

function Whiteboard() {
    const[tool,setTool]=useState('pencil')

    return (
        <>
        <Navbar activeTool={tool} setActiveTool={setTool}/>
        <Canvas tool={tool}/>
        </>
        
    );
}

export default Whiteboard;