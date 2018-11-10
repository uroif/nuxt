export const state = () => ({
    blogs: []
  })

export const mutations = {
    insertBlogs (state, payload){
        state.blogs = payload
    }
}

export const actions = {
    insertBlogs(context, payload){
        context.commit('insertBlogs', payload)
    }
}