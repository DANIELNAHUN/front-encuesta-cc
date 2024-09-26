import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/encuesta/'
// const BASE_URL = 'https://apicsattienda.cableclub.com.pe/api/encuesta/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oficinas:[],
    preguntas:[],
    opciones:[],
    respuestas:[]
  },
  getters: {
  },
  mutations: {
    SET_OFICINAS(state, oficinas){
      state.oficinas = oficinas
    },
    SET_PREGUNTAS(state, preguntas){
      state.preguntas = preguntas
    },
    SET_OPCIONES(state, opciones){
      state.opciones = opciones
    }
    ,SET_RESPUESTAS(state, respuestas){
      state.respuestas = respuestas
    }
  },
  actions: {
    async getOficinas({commit}){
      const res = await axios.get(BASE_URL+'oficinas/')
      commit('SET_OFICINAS', res.data)
    },
    async getPreguntas({commit}){
      const res = await axios.get(BASE_URL+'preguntas/')
      commit('SET_PREGUNTAS', res.data)
    },
    async getOpciones({commit}, param={}){
      const res = await axios.get(BASE_URL+'opciones/?id_pregunta='+param.id_pregunta)
      commit('SET_OPCIONES', res.data)
    },
    async getRespuestas({commit}){
      const res = await axios.get(BASE_URL+'respuestas/')
      commit('SET_RESPUESTAS', res.data)
    },
    async setRespuestas({commit}, param={}){
      const res = await axios.post(BASE_URL+'respuestas/', param)
      commit('SET_RESPUESTAS', res.data)
    }
  },
  modules: {
  }
})
