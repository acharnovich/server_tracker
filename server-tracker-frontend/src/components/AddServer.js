import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import api from '../api';

const AddServer = ({ onServerAdded, teams, teamApplications }) => {
    const [formData, setFormData] = useState({
        name: '',
        team: '',
        application: '',
        cpu: '',
        storage: '',
        ram: '',
        os: '',
        installed_packages: '',
        date_put_in_service: '',
        date_to_retire: '',
        description: '',
    });

    const [applications, setApplications] = useState([]); // Dynamic list of applications based on team

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Update applications dropdown when the team changes
        if (name === 'team') {
            setApplications(teamApplications[value] || []); // Load applications based on the selected team
            setFormData((prevFormData) => ({
                ...prevFormData,
                application: '', // Reset the application field when team changes
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('servers/', formData)
            .then((response) => {
                onServerAdded(response.data); // Notify the parent to update the list
                setFormData({
                    name: '',
                    team: '',
                    application: '',
                    cpu: '',
                    storage: '',
                    ram: '',
                    os: '',
                    installed_packages: '',
                    date_put_in_service: '',
                    date_to_retire: '',
                    description: '',
                });
                setApplications([]); // Reset applications
            })
            .catch((error) => console.error('Error adding server:', error));
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Add a New Server
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
                    select
                    label="Team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                >
                    {teams.map((team) => (
                        <MenuItem key={team} value={team}>
                            {team}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Application"
                    name="application"
                    value={formData.application}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                    disabled={!applications.length} // Disable if no applications are available
                >
                    {applications.map((app) => (
                        <MenuItem key={app} value={app}>
                            {app}
                        </MenuItem>
                    ))}
                </TextField>
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
                    placeholder="Enter packages separated by commas (e.g., nginx, python, node)"
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Add Server
                </Button>
            </form>
        </Box>
    );
};

export default AddServer;