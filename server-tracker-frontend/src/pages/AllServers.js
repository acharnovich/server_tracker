import React from 'react';
import ServerList from '../components/ServerList';

const AllServers = ({ servers }) => {
    return (
        <div style={{ marginLeft: '220px', padding: '20px' }}>
            <h2>All Servers</h2>
            <ServerList servers={servers} />
        </div>
    );
};

export default AllServers;