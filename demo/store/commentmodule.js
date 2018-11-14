export const state = () => ({
    comments: [],
  })

export const mutations = {
    insertComments (state, payload){
        state.comments = payload
    },
    insertComment (state, payload){
        state.comments.push(payload)
    },
    updateComment (state, payload){
        let index = state.comments.findIndex(comment => comment.id == payload.id)
        console.log(index)
        console.log(state.comments)
        state.comments.splice(index, 1, payload)
        console.log(state.comments)
    },
    deleteComment (state, payload){
        let index = state.comments.findIndex(comment => comment.id == payload.id)
        console.log(index)
        state.comments.splice(index, 1)
    }
}

export const actions = {
    insertComments(context, payload){
        context.commit('insertComments', payload)
    },
    insertComment(context, payload){
        context.commit('insertComment', payload)
    },
    updateComment(context, payload){
        context.commit('updateComment', payload)
    },
    deleteComment(context, payload){
        context.commit('deleteComment', payload)
    }
}