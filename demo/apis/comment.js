const axios = require('axios');
const base_url = 'http://localhost:3001'
export default {
    getCommentsByPostId: function(id){
        let response = axios.get(`${base_url}/comments?postId=${id}`)
        return response
    },
    async insertComment(comment){
        let response = await axios.post(`${base_url}/comments`, comment)
        return response
    },
    async updateComment(comment){
        let response = await axios.patch(`${base_url}/comments/${comment.id}`, comment)
        return response
    },
    async deleteComment(comment){
        let response = await axios.delete(`${base_url}/comments/${comment.id}`)
        return response
    }
}