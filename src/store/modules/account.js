import * as types from '../types/accountTypes'
import accountService from '@/services/accountService'

// initial state
const state = {
}

// getters
const getters = {
}


// actions
const actions = {
  [types.LOGIN_REQUEST]({ commit, state }, userData) {
    return accountService.login(userData)
  }
}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
