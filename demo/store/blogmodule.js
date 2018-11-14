export const state = () => ({
    blogs: [],
    blog: {}
  })

export const mutations = {
    insertBlogs (state, payload){
        state.blogs = payload
    },
    insertBlog(state, payload){
        state.blog = payload
    },
    updateBlog(state,payload){
        state.blog = payload
        // let index = state.blogs.findIndex(blog => blog.id == payload.id)
        // state.blogs.splice(index, 1, payload)
    },
    deleteBlog(state,payload){
        state.blog = {}
        let index = state.blogs.findIndex(blog => blog.id == payload.id)
        state.blogs.splice(index, 1)
    }
}

export const actions = {
    insertBlogs(context, payload){
        context.commit('insertBlogs', payload)
    },
    insertBlog(context, payload){
        context.commit('insertBlog', payload)
    },
    updateBlog(context, payload){
        context.commit('updateBlog', payload)
    },
    deleteBlog(context, payload){
        context.commit('deleteBlog', payload)
    }
}