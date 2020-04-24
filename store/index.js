import pathify from 'vuex-pathify'

import service from './modules/service'

export const plugins = [pathify.plugin]

export const modules = {
  service
}

export const store = this
