'use client'
import {SetStateAction, useState} from "react";

export default function Page() {
    const [val, setVal] = useState('');
    const [msg, setMsg] = useState('');

    function handleClick() {
        setMsg('You have entered: '+ val);
    }

    function handelInput(e: { target: { value: SetStateAction<string>; }; }){
        setVal(e.target.value);
    }

    return (
        <div>
            <h1>Prog1</h1>
            <label>Enter a value:</label>
            <input value={val} placeholder='Value' onChange={handelInput}/>
            <button onClick={handleClick}>Click</button>
            <b>{msg}</b>
        </div>
    )
}