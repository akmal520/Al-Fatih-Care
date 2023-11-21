import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { path, icon, text, classes } = props;
    return (
        <div>
            <button
                className={`capitalize bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] hover:bg-[linear-gradient(-96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] px-6 py-3 rounded-full items-center inline-block text-white font-sora text-base font-semibold not-italic leading-normal shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)] hover:shadow-[0px_8px_23px_0px_rgba(65,132,247,0.44)] transition-all duration-300 ease-in-out ${classes}`}
            >
                {icon}
                {text}
            </button>
        </div>
    );
};

export default Button;
