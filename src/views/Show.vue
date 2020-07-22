<template>
    <div>
        <v-container> 
            <v-data-table
                :headers="header"
                :items="item"
                item-key="nombre"
                show-select
                :single-select="multipleSeleccion"
            >            
            </v-data-table>

            
        </v-container>
    </div>
</template>

<script>
import { db } from '../main'
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            header:[
                {nombre:'Nombre', value:'nombre'},
                {apellidos:'apellidos', value:'apellidos'},
                {edad:'Edad', value:'edad'},
                {sexo:'sexo', value:'sexo'},
                {ciudad:'cuidad', value:'ciudad'},
            ],
            item: [
                
            ],
            multipleSeleccion: true
            
        }
    },
    created(){
        this.getEventos()
    },
    methods: {
    ...mapMutations(['mostrarLoad','ocultarLoad']),
      async getEventos(){
          try {
              this.mostrarLoad()
              const snapshot = await db.collection('personas').get()
              snapshot.forEach(doc => {
                  let datos = doc.data()
                  //console.log(datos.key)
                  this.item.push(datos)
              });
          } catch (error) {
              
          }finally{
              this.ocultarLoad()
          }
      },
      
    }
    

}
</script>