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
    }
}

export const actions = {
    insertBlogs(context, payload){
        context.commit('insertBlogs', payload)
    },
    insertBlog(context, payload){
        context.commit('insertBlog', payload)
    }
}