import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServerList = ({ servers }) => {
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/server/${id}`); // Redirect to the server details page
    };

    return (
        <Grid
            container
            spacing={4}
            style={{
                width: '100%',
                margin: '0 auto',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            {servers.map((server) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={server.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Card
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {server.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Team: {server.team}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Application: {server.application}
                            </Typography>
                        </CardContent>
                        <div
                            style={{
                                margin: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleViewDetails(server.id)}
                            >
                                View Details
                            </Button>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ServerList;