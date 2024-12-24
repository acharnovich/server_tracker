import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ServerDetails = ({ servers }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const server = servers.find((s) => s.id === parseInt(id));

    if (!server) {
        return <div style={{ marginLeft: '220px', padding: '20px' }}>Server not found</div>;
    }

    return (
        <div style={{ marginLeft: '220px', padding: '20px' }}>
            <h2>Server Details</h2>
            <p><strong>Name:</strong> {server.name}</p>
            <p><strong>Team:</strong> {server.team}</p>
            <p><strong>Application:</strong> {server.application}</p>
            <p><strong>CPU:</strong> {server.cpu}</p>
            <p><strong>Storage:</strong> {server.storage}</p>
            <p><strong>RAM:</strong> {server.ram}</p>
            <p><strong>OS:</strong> {server.os}</p>
            <p><strong>Installed Packages:</strong> {server.installed_packages}</p>
            <p><strong>Date Put in Service:</strong> {server.date_put_in_service}</p>
            <p><strong>Date to Retire:</strong> {server.date_to_retire}</p>
            <p><strong>Description:</strong> {server.description}</p>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{
                    marginTop: '20px',
                    backgroundColor: '#007BFF',
                    color: '#FFF',
                    fontSize: '16px',
                    padding: '10px 20px',
                }}
                onClick={() => navigate(`/edit-server/${id}`)}
            >
                Edit Server
            </Button>
        </div>
    );
};

export default ServerDetails;