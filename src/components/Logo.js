import React from 'react';
import LogImg from '../assets/images/logo.svg';


function Logo(props) {
    return (
        <div style={{marginBottom:props.marginBottom}} className='logo'>
            <img src={LogImg} alt={"logo"}   />
        </div>
    );
}

export default Logo;