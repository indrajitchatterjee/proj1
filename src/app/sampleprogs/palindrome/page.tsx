'use client'
import {SetStateAction, useState} from "react";

export default function Factorial() {
    const [val, setVal] = useState('');
    const [result, setResult] = useState('');

    function handelReset() {
        setResult('');
        setVal('');
    }

    function handelInput(e: { target: { value: SetStateAction<string>; }; }){
        setVal(e.target.value);
    }

    function handelClick(){
        let rev_str='';
        const l=val.length;
        for(let i=0;i<l; i++){
            rev_str=val[i]+rev_str;
        }
        if(val==rev_str){
            setResult('The string '+val+' is Palindrome ');
        }else{
            setResult('The string '+val+' is Not Palindrome ');
        }
    }
    return(
        <div>
            <h1>Check For Palindrome</h1>
            <label>Enter a text:</label>
            <input value={val} onChange={handelInput} placeholder={'Enter a text'}/>
            <button onClick={handelClick}>Palindrome</button>
            <button onClick={handelReset}>Reset</button><br/>
            <b>{result}</b>
        </div>
    );
}