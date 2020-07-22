import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      drawer:false,
      elemtos:[],
      progressBar:false,
      dialogo:false

  },
  mutations: {
    toggleDrawer(){
      this.drawer = !this.drawer 
    },
    async getDatos(){
      try {
          const snapshot = await db.collection('personas').get()
          snapshot.forEach(doc => {
              let datos = doc.data()
              //console.log(datos.key)
              this.elemtos.push(datos)
          });
      } catch (error) {
          
      }
    },
    mostrarLoad(){
      this.progressBar = true
    },
    ocultarLoad(){
      this.progressBar = false
    },
    mostrarDialogo(){
      this.dialogo = true
    },
    ocultarDialogo(){
      this.dialogo = false
    }

  },
  actions: {
  },
  modules: {
  }
})
