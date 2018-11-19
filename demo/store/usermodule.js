export const state = () => ({
    users: [],
    user: {}
  })

export const mutations = {
    insertUsers (state, payload){
        state.users = payload
    },
    insertUser (state, payload){
        state.user = payload
    },
    updateUser (state, payload){
        let index = state.users.findIndex(user => user.id == payload.id)
        state.users.splice(index,1,payload)
        state.user = payload
    },
    deleteUser (state, payload){
        let index = state.users.findIndex(user => user.id == payload.id)
        state.users.splice(index,1)
        state.user = {}
    }
}

export const actions = {
    insertUsers(context, payload){
        context.commit('insertUsers', payload)
    },
    insertUser(context, payload){
        context.commit('insertUser', payload)
    },
    updateUser(context, payload){
        context.commit('updateUser', payload)
    },
    deleteUser(context, payload){
        context.commit('deleteUser', payload)
    }
}