import React from 'react';
import { useParams } from 'react-router-dom';
import ServerList from '../components/ServerList';

const FilteredServers = ({ servers }) => {
    const { filter, value } = useParams(); // Get filter and value from URL

    // Show all servers for "total" filter or filtered servers for other cases
    const filteredServers =
        filter === 'total'
            ? servers
            : servers.filter((server) => (server[filter] || 'Unknown') === value);

    return (
        <div
            style={{
                marginLeft: '220px', // Account for sidebar
                padding: '20px',
                width: 'calc(100% - 220px)', // Ensure full width
                minHeight: '100vh', // Prevent collapsing on small content
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 style={{ marginBottom: '20px' }}>
                {filter === 'total'
                    ? 'All Servers'
                    : `Servers Filtered by ${filter}: ${value}`}
            </h2>
            <ServerList servers={filteredServers} />
        </div>
    );
};

export default FilteredServers;