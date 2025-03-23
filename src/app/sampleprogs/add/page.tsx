'use client'
import {useState} from "react";

export default function Page() {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [msg, setMsg] = useState('');

    function handleClick() {
        const v1=parseInt(val1);
        const v2=parseInt(val2);
        const val3=v1+v2;
        setMsg('You have entered: '.concat(String(val3)));
    }

    function handelVal1Change(e) {
        setVal1(e.target.value);
        setMsg('');
    }

    function handelVal2Change(e) {
        setVal2(e.target.value);
        setMsg('');
    }

    function handleReset(){
        setVal1('');
        setVal2('');
        setMsg('')
    }
    return (
        <div>
            <h1>Add Two Numbers</h1>
            <label>Enter First Value:</label>
            <input value={val1} placeholder='Value1' onChange={handelVal1Change} /><br/>
            <label>Enter Second Value:</label>
            <input value={val2} placeholder='Value1' onChange={handelVal2Change}/><br/>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleReset}>Reset</button>
            <br/><b>{msg}</b>
        </div>
    )
}