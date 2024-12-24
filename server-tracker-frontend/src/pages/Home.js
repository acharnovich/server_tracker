import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamBarChart from '../components/TeamBarChart';

const Home = ({ servers }) => {
    const navigate = useNavigate();

    const handleBarClick = (filter, value) => {
        if (filter === 'total') {
            navigate(`/servers`); // Navigate to the list of all servers
        } else {
            navigate(`/servers/filter/${filter}/${value}`); // Navigate to filtered servers
        }
    };

    return (
        <div style={{ marginLeft: '220px', padding: '20px', width: 'calc(100% - 220px)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Server Tracker Dashboard</h1>
            <div style={{ width: '100%' }}>
                <TeamBarChart servers={servers} onBarClick={handleBarClick} />
            </div>
        </div>
    );
};

export default Home;