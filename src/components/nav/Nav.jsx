import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-bar" >
            <h4>Logo</h4>
            <ul>
                <li>
                    <Link to="/">
                        Home Page
                    </Link>
                </li>
                <li>
                    <Link to="/text">
                        Text
                    </Link>
                </li>
                <li>
                    <Link to="/todo">
                        Todo List
                    </Link>
                </li>
                <li>
                    <Link to="/shop">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/context">use Context</Link>
                </li>
            </ul>
        </div>

    )
}

export default Nav;
