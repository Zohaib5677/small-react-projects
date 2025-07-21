import React, {useState, useEffect} from 'react'

function randomclr() {
    const [type,setType]=useState("hex");
    const [clr,setclr]=useState("#000000");

    function getRandomHexColor() {
        let hexcolor="";
        hexcolor= '#' + Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, '0');
          setclr(hexcolor)
      }

      function getRandomRgbaColor() {
        let rgbcolor="";
        const r = Math.floor(Math.random() * 256); // Red: 0–255
        const g = Math.floor(Math.random() * 256); // Green: 0–255
        const b = Math.floor(Math.random() * 256); // Blue: 0–255
        const a = (Math.random()).toFixed(2);      // Alpha: 0.00–1.00
        rgbcolor=`rgba(${r}, ${g}, ${b}, ${a})`;
        setclr(rgbcolor)
      }
      
      useEffect(()=>{
        if(type==="hex"){
            getRandomHexColor();
        }else{
                getRandomRgbaColor();
        }
        

      },[type])
      
      


  return (

    <div className="div" style={{
        height:"800px",
        width:"100vw",}
    } >

        <button onClick={()=>setType("hex")} >Create hex clr</button>
        <button onClick={()=>setType("rgb")}>create rgba clr</button>
        <button onClick={type==="hex"
            ? getRandomHexColor
            : getRandomRgbaColor
        }>create random clr</button>
        <div 
        style={{
            height: "100vh",
            width: "100vw",
            background: clr,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            color: "#fff",
            fontFamily: "sans-serif",

        }}
        >
            <h3>{type === "hex" ? "Hex Color" : "RGBA Color"}</h3>
            <h1>{clr}</h1>
        </div>
    </div>
  )
}

export default randomclr