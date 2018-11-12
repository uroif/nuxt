export const state = () => ({
    users: []
  })

export const mutations = {
    insertUsers (state, payload){
        state.users = payload
    }
}

export const actions = {
    insertUsers(context, payload){
        context.commit('insertUsers', payload)
    }
}