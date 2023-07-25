/* eslint-disable react/jsx-no-undef */

import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className='bg-zinc-500 text-white '>
            <ul className='flex items-center justify-center space-x-8'>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/income">Income</Link></li>
                <li><Link to="/expend">Expense</Link></li>
                
            </ul>
            
        </div>
    );
};

export default Menu;