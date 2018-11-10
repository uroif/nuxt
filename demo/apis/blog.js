const axios = require('axios');
const base_url = 'https://jsonplaceholder.typicode.com'
export function getBlogs() {
    let response = axios.get(base_url+'/posts')
    return response
}
export function getBlogById(id) {
    axios.get(base_url+'/posts/'+id)
    .then(function (response) {
        // handle success
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}
