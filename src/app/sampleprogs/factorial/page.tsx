'use client'
import {SetStateAction, useState} from "react";

import '@/app/globals.css';

export default function Page() {
    const [val, setVal] = useState('');
    const [result, setResult] = useState('');

    function handelInput(e: { target: { value: SetStateAction<string>; }; }){
        setVal(e.target.value);

    }
    function handelReset(){
        setVal('');
        setResult('');
    }
    function handelClick(){
        const n=parseInt(val);
        if(n<0 || val==''){
            setResult('Invalid Input');
            return;
        }
        let f=1;
        for(let i=2;i<=n;i++){
            f*=i;
        }
        setResult('Page of '+val+' is '+f)
    }
    return(
        <div className={'card'}>

            <h1>Factorial of a number</h1>

            <label>Enter a number:</label>
            <input value={val} onChange={handelInput} placeholder={'Enter a number'}/>
            <button onClick={handelClick}>Factorial</button>
            <button onClick={handelReset}>Reset</button><br/>
            <b>{result}</b>
        </div>
    )
}