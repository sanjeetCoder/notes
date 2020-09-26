import React from 'react';
import './Menustyle.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className="Menustyle">
            <ul>
                <li> <Link to="/">Get Started</Link> </li>
                <li> <Link to="Aboutus">About Us</Link> </li>
                <li> <Link to="Careers">Careers</Link></li>
                <li> <Link to="Franchise">Franchise</Link></li>
                <li> <Link to="FitnessInstitute">Fitness Institue</Link></li>
                <li> <Link to="Contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Menu;