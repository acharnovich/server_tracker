import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

export const deleteServer = (id) => {
    return api.delete(`servers/${id}/`);
};

export default api;