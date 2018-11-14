const axios = require('axios');
const base_url = 'http://localhost:3001'
export default {
    getBlogs: function() {
        let response = axios.get(`${base_url}/posts`)
        return response
    },
    getBlogsByUserId: function(id){
        let response = axios.get(`${base_url}/posts?userId=${id}`)
        return response
    },
    getBlogById: function(id) {
        let response = axios.get(`${base_url}/posts/${id}`)
        return response
    }
}
 

