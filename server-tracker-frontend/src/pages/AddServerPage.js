import React from 'react';
import AddServer from '../components/AddServer';

const AddServerPage = ({ onServerAdded }) => {
    // Teams and their corresponding applications
    const teams = ['WebOps', 'DevOps', 'Backend', 'Frontend'];
    const teamApplications = {
        WebOps: ['WebAlert', 'Cascade', 'WWW'],
        DevOps: ['Jenkins', 'Kubernetes'],
        Backend: ['NodeAPI', 'DjangoApp'],
        Frontend: ['ReactApp', 'VueApp'],
    };

    return (
        <div style={{ marginLeft: '220px', padding: '20px' }}>
            <h2>Add a New Server</h2>
            <AddServer onServerAdded={onServerAdded} teams={teams} teamApplications={teamApplications} />
        </div>
    );
};

export default AddServerPage;