import "../styles/App.css";
import React, { useState, useEffect } from "react";

const App = ()=> {
    const [started,setState] = useState(false);
    const [pos,setPos] = useState(0);
    const onStart=()=>{
        setState(true);
    }
    const  onMove=()=>{
        setPos((prevPos) => prevPos + 5);
    }
    const handleKeyPress= (event) => {
        if(event.keyCode === 39){
            onMove();
        }
    };

    useEffect(()=>{
        window.addEventListener("keydown",handleKeyPress);
        return ()=>{
            window.removeEventListener("keydown",handleKeyPress);
        };
    },[]);
    return(
        <>
            <div>
                {!started &&(
                    <button onClick={onStart} className="start">Start</button>
                )}
                {started && (
                    <>
                    <div style={{transform:`translate(${pos}px)`}} className="ball"></div>
                    </>
                )}
            </div>
        </>
    );
}
export default App;
