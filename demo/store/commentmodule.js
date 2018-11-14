export const state = () => ({
    comments: [],
  })

export const mutations = {
    insertComments (state, payload){
        state.comments = payload
    }
}

export const actions = {
    insertComments(context, payload){
        context.commit('insertComments', payload)
    }
}