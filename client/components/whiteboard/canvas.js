'use client'
import { useEffect, useRef, useState } from "react";

function Canvas({tool}) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef(null);
  const ctxRef=useRef(null)

  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

 let {width,height}=size;

  useEffect(() => {
    setSize({
      width:window.innerWidth,
      height:window.innerHeight
    })
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext("2d");

    const ctx=ctxRef.current;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";
  }, []);

  const startDrawing = (e) => {
    isDrawing.current = true;

    const rect = canvasRef.current.getBoundingClientRect();
    lastPoint.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    if (tool === 'clear' || tool === 'text') return;
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    lastPoint.current = null;

    const ctx=canvasRef.current.getContext('2d');
    ctx.globalCompositeOperation='source-over';
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  if(tool==='clear'){
    clearCanvas();
  }

  const draw = (e) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    if(tool==='eraser'){
      ctx.globalCompositeOperation='destination-out';
      ctx.lineWidth=20;
    }
    else if(tool==='pencil'){
      ctx.globalCompositeOperation='source-over';
      ctx.strokeStyle='#000';
      ctx.lineWidth=4;
    }
    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPoint.current = { x, y };
  };

  return (
    <>
      <canvas
  ref={canvasRef}
  width={width}
  height={height}
  className="
    inset-0
    w-full h-[100dvh]
    max-w-full max-h-[100dvh]
    overflow-hidden
    touch-none
    select-none
    block
  "
  style={{ border: "1px solid black" }}
  onMouseDown={startDrawing}
  onMouseMove={draw}
  onMouseUp={stopDrawing}
  onMouseLeave={stopDrawing}
/>

    </>
  );
}

export default Canvas;
