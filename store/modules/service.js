import { make } from 'vuex-pathify'
const getDefaultState = () => {
  return {
    keyToOmit: null,
    services: [
      {
        key: 0,
        link: '/webapp',
        image: '/img/index/web_application.png',
        text: 'Web \n application',
        alt: 'Web application'
      },
      {
        key: 1,
        link: '/integrazioni-gestionali',
        image: '/img/index/integrazioni_gestionali.png',
        text: 'Integrazioni \n gestionali',
        alt: 'Integrazioni gestionali'
      },
      {
        key: 2,
        link: '/data',
        image: '/img/index/data_cleaner.png',
        text: 'Data cleaner \n Quality \n Governance',
        alt: 'Data cleaner Quality Governance'
      },
      {
        key: 3,
        link: '/bi',
        image: '/img/index/business_inteligence.png',
        text: 'Business Intelligence \n Self service',
        alt: 'Business Intelligence Self service'
      },
      {
        key: 4,
        link: '/sap',
        image: '/img/index/sviluppo_custom.png',
        text: 'Sviluppo custom \n Sap',
        alt: 'Sviluppo custom Sap'
      }
    ]
  }
}

const state = () => {
  return getDefaultState()
}

const getters = {
  getPageServices: (state) => {
    const services = state.services
    return services.filter((service) => service.key !== state.keyToOmit)
  }
}

const mutations = {
  ...make.mutations(state),

  RESET(state) {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  ...make.actions(state),

  reset({ commit }) {
    commit('RESET')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
