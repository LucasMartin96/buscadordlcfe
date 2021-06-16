import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultados: [{
      "documento":{"cantidadPalabras":297,
      "path":"C:\\Users\\luks_\\Desktop\\DLC\\ArchivosPrueba\\tierra.txt",
      "titulo":"tierra.txt"},
      "palabras":
        [{
          "frecuencia":9,
          "palabra":"planeta",
          "peso":0.57373154
        }],
          "peso":0.57373154
        },
          {"documento":
          {"cantidadPalabras":178,"path":"C:\\Users\\luks_\\Desktop\\DLC\\ArchivosPrueba\\asteroide.txt","titulo":"asteroide.txt"},"palabras":[{"frecuencia":3,"palabra":"planeta","peso":0.24703342}],"peso":0.24703342},{"documento":{"cantidadPalabras":276,"path":"C:\\Users\\luks_\\Desktop\\DLC\\ArchivosPrueba\\estrella.txt","titulo":"estrella.txt"},"palabras":[{"frecuencia":1,"palabra":"planeta","peso":0.06612869}],"peso":0.06612869}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
