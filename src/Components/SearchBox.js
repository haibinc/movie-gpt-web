import React from 'react';
import {useState} from 'react';
import {sendGptRequest} from "./SendGptRequest";

export const SearchBox = () => {
    const [input, setInput] = useState('');
    const [responseData, setResponseData] = useState('')

    const changeText = (event) =>
    {
        let inputValue = event.target.value;
        setInput(inputValue);
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        sendGptRequest({input});
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={changeText} placeholder="Give me a movie like..."/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
