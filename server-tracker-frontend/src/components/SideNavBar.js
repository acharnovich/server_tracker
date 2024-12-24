import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css'; // Add CSS for styling

const SideNavBar = () => {
    return (
        <div className="side-nav">
            <h2>Server Tracker</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add-server">Add Server</Link> {/* New link */}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavBar;