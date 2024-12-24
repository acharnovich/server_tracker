import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TextField, MenuItem } from '@mui/material';

const TeamBarChart = ({ servers, onBarClick }) => {
    const [filter, setFilter] = useState('total'); // Default filter

    const groupBy = (key) => {
        return servers.reduce((acc, server) => {
            const keyValue = server[key] || 'Unknown';
            acc[keyValue] = (acc[keyValue] || 0) + 1;
            return acc;
        }, {});
    };

    const getChartData = () => {
        if (filter === 'total') {
            return [{ name: 'Total Servers', count: servers.length }];
        }

        const groupedData = groupBy(filter);
        return Object.keys(groupedData).map((key) => ({
            name: key,
            count: groupedData[key],
        }));
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Servers by {filter === 'total' ? 'Total' : filter}</h2>
            <TextField
                select
                label="Filter By"
                value={filter}
                onChange={handleFilterChange}
                fullWidth
                margin="normal"
                style={{ maxWidth: '300px', marginBottom: '20px' }}
            >
                <MenuItem value="total">Total</MenuItem>
                <MenuItem value="team">Team</MenuItem>
                <MenuItem value="os">OS</MenuItem>
                <MenuItem value="application">Application</MenuItem>
            </TextField>
            <div style={{ height: '500px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={getChartData()}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        onClick={(event) => {
                            if (event?.activePayload?.[0]?.payload) {
                                onBarClick(filter, event.activePayload[0].payload.name);
                            }
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TeamBarChart;