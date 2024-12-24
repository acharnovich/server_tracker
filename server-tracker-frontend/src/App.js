import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';
import Home from './pages/Home';
import AddServerPage from './pages/AddServerPage';
import ServerDetails from './pages/ServerDetails';
import EditServerPage from './pages/EditServerPage';
import FilteredServers from './pages/FilteredServers';
import AllServers from './pages/AllServers';
import api from './api';

const App = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        fetchServers();
    }, []);

    const fetchServers = () => {
        api.get('servers/')
            .then((response) => setServers(response.data))
            .catch((error) => console.error(error));
    };

    const handleServerAdded = (newServer) => {
        setServers((prevServers) => [...prevServers, newServer]);
    };

    const handleServerUpdated = (updatedServer) => {
        setServers((prevServers) =>
            prevServers.map((server) =>
                server.id === updatedServer.id ? updatedServer : server
            )
        );
    };

    const handleServerDeleted = (id) => {
        setServers((prevServers) => prevServers.filter((server) => server.id !== id));
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <SideNavBar />
                <Routes>
                    {/* Home page with the bar chart */}
                    <Route path="/" element={<Home servers={servers} />} />

                    {/* Page to add a new server */}
                    <Route
                        path="/add-server"
                        element={<AddServerPage onServerAdded={handleServerAdded} />}
                    />

                    {/* Server details page */}
                    <Route path="/server/:id" element={<ServerDetails servers={servers} />} />

                    {/* Edit server page */}
                    <Route
                        path="/edit-server/:id"
                        element={<EditServerPage servers={servers} onServerUpdated={handleServerUpdated} />}
                    />

                    {/* List of all servers */}
                    <Route path="/servers" element={<AllServers servers={servers} />} />

                    {/* Filtered list of servers */}
                    <Route
                        path="/servers/filter/:filter/:value"
                        element={<FilteredServers servers={servers} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;