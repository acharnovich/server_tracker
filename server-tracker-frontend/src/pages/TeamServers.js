import React from 'react';
import { useParams } from 'react-router-dom';
import ServerList from '../components/ServerList';

const TeamServers = ({ servers, onServerDeleted }) => {
    const { team } = useParams();

    // Filter servers for the selected team
    const filteredServers = servers.filter((server) => server.team === team);

    return (
        <div style={{ marginLeft: '220px', padding: '20px', flexGrow: 1, width: 'calc(100% - 240px)' }}>
            <h2 style={{ marginBottom: '20px' }}>Servers for Team: {team}</h2>
            <ServerList servers={filteredServers} onServerDeleted={onServerDeleted} />
        </div>
    );
};

export default TeamServers;