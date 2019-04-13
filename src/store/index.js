import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'

Vue.use(Vuex)


export default new Vuex.Store({
	state,
	mutations,
	getters: {
		minCity(state) {
			if (state.city.length > 5) {
				return state.city.substr(0, 4)+'...'
			}
			return state.city
		}
	}
})