import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import api from '../api';

const EditServerPage = ({ servers, onServerUpdated }) => {
    const { id } = useParams(); // Get server ID from URL
    const navigate = useNavigate();
    const server = servers.find((s) => s.id === parseInt(id)); // Find the server by ID

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (server) {
            setFormData(server); // Prepopulate form data
        }
    }, [server]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`servers/${id}/`, formData)
            .then((response) => {
                onServerUpdated(response.data); // Notify parent about the updated server
                navigate(`/server/${id}`); // Redirect to server details page
            })
            .catch((error) => console.error('Error updating server:', error));
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this server?')) {
            api.delete(`servers/${id}/`)
                .then(() => {
                    navigate('/servers'); // Redirect to the list of servers
                })
                .catch((error) => console.error('Error deleting server:', error));
        }
    };

    if (!formData) {
        return <div style={{ marginLeft: '220px', padding: '20px' }}>Loading server details...</div>;
    }

    return (
        <Box style={{ marginLeft: '220px', padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Edit Server
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Server Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Application"
                    name="application"
                    value={formData.application}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="CPU"
                    name="cpu"
                    value={formData.cpu}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Storage"
                    name="storage"
                    value={formData.storage}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="RAM"
                    name="ram"
                    value={formData.ram}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="OS"
                    name="os"
                    value={formData.os}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Installed Packages"
                    name="installed_packages"
                    value={formData.installed_packages}
                    onChange={handleChange}
                    multiline
                    rows={2}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Date Put in Service"
                    name="date_put_in_service"
                    type="date"
                    value={formData.date_put_in_service}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Date to Retire"
                    name="date_to_retire"
                    type="date"
                    value={formData.date_to_retire}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginBottom: '20px' }}>
                    Update Server
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleDelete}
                    style={{ backgroundColor: 'red', color: 'white' }}
                >
                    Delete Server
                </Button>
            </form>
        </Box>
    );
};

export default EditServerPage;