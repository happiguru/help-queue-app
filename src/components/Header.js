import React from 'react';
import tickets from '../img/tickets.png';

const Header = () => {
    return (
        <React.Fragment>
            <h1>Help Queue</h1>
            <img src={tickets} alt="An tickets_photo" />
        </React.Fragment>
    );
}

export default Header;