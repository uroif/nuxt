const axios = require('axios');
const base_url = 'https://jsonplaceholder.typicode.com'
export default {
    getBlogs: function() {
        let response = axios.get(`${base_url}/posts`)
        return response
    },
    getBlogsByUserId: function(id){
        let url = `${base_url}/posts?userId=${id}`
        let response = axios.get(`${base_url}/posts?userId=${id}`)
        return response
    },
    getBlogById: function(id) {
        axios.get(base_url+'/posts/'+id)
    }
}
 

