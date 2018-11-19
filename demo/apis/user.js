const axios = require('axios');
const base_url = 'http://localhost:3001'
export default {
    async getUserById(id) {
        let response = await axios.get(`${base_url}/users/${id}`)
        return response
    },
    async insertUser(user){
        let response = await axios.post(`${base_url}/users`,user)
        return response
    },
    async updateUser(user) {
        let response = await axios.put(`${base_url}/users/${user.id}`,user)
        return response
    },
    async deleteUser(user){
        let response = await axios.delete(`${base_url}/users/${user.id}`)
        return response
    }
}