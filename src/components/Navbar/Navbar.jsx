import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService';

import styles from './Navbar.module.css';

const Navbar = (props) => {
    const conditionalUI = userService.getUser()
    ? <>
        <li>
            <Link to="/">Public Events</Link>
        </li>
        <li>
            <Link to="/login">My Events</Link>
        </li>
        <li>
            <Link to="" onClick={props.handleLogout}>Logout</Link>
        </li>
      </>
    :
      <>
        <li>
           <Link to="/">Events</Link>  
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
        </li>
      </>
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1>Pls Respond</h1>
            </Link>
            <ul>
                { conditionalUI }
            </ul>
        </nav>
    )
};

export default Navbar;