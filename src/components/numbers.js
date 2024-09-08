import React, { useState, useEffect } from 'react';

const Numbers = () => {

    const [numbers, setNumbers] = useState(['one', 'two', 'three']);
    const [letters, setLetters] = useState(['Z', 'R']);

    const addNumber = () => {
        setNumbers([...numbers, 'seven'])
    }

    const addLetter = () => {
        setLetters([...letters, 'c'])
    }

    //receives a callback
    useEffect( () => {
        console.log('our use effect triggers only on numbers');
    }, [numbers, letters]) 



    return (
        <div>
            <h1>Numbers</h1>
            { numbers.map( num => {
                return <h4>{num}</h4>
            })}
            <button onClick={addNumber}>Add a Number</button>

            <h1>Letters</h1>
            { letters.map( letter => {
                return <h4>{letter}</h4>
            })}
            <button onClick={addLetter}>Add a Letter</button>
        </div>
    )
}

export default Numbers; 