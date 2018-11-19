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
    },
    async insertBlog(post){
        let response = await axios.post(`${base_url}/posts`,post)
        return response
    },
    async updateBlog(post){
        let response = await axios.put(`${base_url}/posts/${post.id}`,post)
        return response
    },
    async deleteBlog(post){
        let response = await axios.delete(`${base_url}/posts/${post.id}`)
        return response
    }
}