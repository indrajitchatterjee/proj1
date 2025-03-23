'use client'
import {useState} from "react";

export default function Page() {
    const [val, setVal] = useState(0);
    const [msg, setMsg] = useState('');

    function handleClick() {
        setMsg('You have entered: '.concat(String(val)));
    }

    function handelValChange(e) {
        setVal(e.target.value);
        setMsg('');
    }

    return (
        <div>
            <h1>Prog1</h1>
            <label>Enter a value:</label>
            <input value={val} placeholder='Value' onChange={handelValChange}/>
            <button onClick={handleClick}>Click</button>
            <b>{msg}</b>
        </div>
    )
}