import { useState, useEffect } from 'react';

function Homebanner(props){
    return (
        <div className="homebanner">
            <div className='message'>{props.text}</div></div>
    )
}

export default Homebanner;