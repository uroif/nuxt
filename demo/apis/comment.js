const axios = require('axios');
const base_url = 'https://jsonplaceholder.typicode.com'
export default {
    getCommentsByPostId: function(id){
        let response = axios.get(`${base_url}/comments?postId=${id}`)
        return response
    },
    async insertComment: function(comment){
        let response = await axios.post(`${base_url}/comments`, comment)
        return response
    }
}