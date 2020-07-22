<template>
  <v-app>
        <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Crud</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="/add">
            <v-list-item-title>agregar</v-list-item-title>
          </v-list-item>

          <v-list-item href="/show">
            <v-list-item-title >ver lista</v-list-item-title>
          </v-list-item>

          <v-list-item href="/mod">
            <v-list-item-title >modificar/eliminar</v-list-item-title>
          </v-list-item>
          

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
            :active="progressBar"
          ></v-progress-linear>

  </v-app>
</template>



<script>
import { mapState } from 'vuex';
//import HelloWorld from './components/HelloWorld';

export default {
  
  name: 'App',
  components: {
    
    },
    computed:{
      ...mapState(['progressBar'])
    },

  data: () => ({
    
    drawer: false
    
  }),
  methods:{
      toggleDrawer(){
        this.drawer = !drawer
      }
  }
};
</script>
