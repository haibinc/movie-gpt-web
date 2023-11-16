import React from 'react';
import {useState} from 'react';
import {sendGptRequest} from "./SendGptRequest";

export const SearchBox = (props) => {
    const [input, setInput] = useState('');
    const [isLoading, setLoading] = useState(false);

    const changeText = (event) =>
    {
        let inputValue = event.target.value;
        setInput(inputValue);
    }

    const handleSubmit = async (event) =>
    {
        if(!isLoading)
        {
            setLoading((prev) => !prev);
            event.preventDefault();
            try{
                const data = await sendGptRequest({input});
                props.setMovie(data);
            } finally
            {
                setLoading((prev) => !prev);
            }
        }
        else
        {
            event.preventDefault();
            alert('generating, please wait');
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={changeText} placeholder="Give me a movie like..." style={{marginRight:'8px'}}/>
                <input type="submit" value={isLoading? 'Generating' : 'Submit'}/>
            </form>
        </div>
    )
}
