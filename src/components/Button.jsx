import React from 'react';
import {Link} from "react-router-dom";

const Button = () => {
    return (
        <div>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
        </div>
    );
};

export default Button;