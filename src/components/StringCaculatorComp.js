import React, { useState } from 'react';


const StringCalculatorComponent = () => {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

   

    return (
        <div>
            <form>
                <textarea
                    value={input}
                    onChange={handleChange}
                    rows="4"
                    cols="50"
                    placeholder="Enter numbers separated by commas or new lines"
                />
                <br />
                <button type="submit">Calculate</button>
            </form>
            <p>Result:</p>
         <p style={{color: 'red'}}>Error:</p>
        </div>
    );
};

export default StringCalculatorComponent;
