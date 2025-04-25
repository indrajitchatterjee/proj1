'use client'
import {Fragment, SetStateAction, useState} from "react";

export default function Prime(){
    const [val, setVal]=useState('');
    const [res, setRes]=useState('');

    function handelInput(e: { target: { value: SetStateAction<string>; }; }){
        setVal(e.target.value);
    }

    function handleClick(){
        const n=parseInt(val);
        let prime=true;

        for(let i=2; i<n; i++){
            if(!(n%i)){
                prime=false;
                break;
            }
        }

        if(prime){
            setRes('The number ' + n + ' is prime')
        }else{
            setRes('The number ' + n + ' is not prime')
        }
    }

    return(
        <>
            <h2>Check prime or not</h2>
            <label>Enter a number: </label>
            <input value={val} onChange={handelInput} placeholder={'Enter a value'} />
            <button onClick={handleClick}>Check</button><br/>
            {res}
        </>
    );
}