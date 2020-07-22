<template >
    <div>
        <v-card class="pa-4">
            <v-container>
                <v-form @submit.prevent="agregar">
                    <v-row justify="center">
                        <v-col cols="6" md="6" lg="6" align-self="center">
                            <v-text-field v-model="nombre" type="text" label="nombre"></v-text-field>
                            <v-text-field v-model="apellidos" type="text" label="apellidos"></v-text-field>
                            <v-text-field v-model="sexo" type="text" label="sexo"></v-text-field>
                            <v-text-field v-model="edad" type="number" label="edad"></v-text-field>
                            <v-text-field v-model="ciudad" type="text" label="ciudad"></v-text-field>
                        </v-col>
                    </v-row> 
                   
                        

                    <v-btn type="text" color="info" >enviar</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import {db} from '../main'
import { mapMutations } from 'vuex'

export default {
    data(){
        return{
            nombre:"",
            apellidos:"",
            sexo:"",
            edad:"",
            ciudad:""
        }
    },
    methods:{
        ...mapMutations(['mostrarLoad','ocultarLoad']),
        async agregar(){
            try {
                this.mostrarLoad()
                if(this.nombre && this.apellidos && this.sexo){
                    await db.collection('personas').add({
                        nombre: this.nombre,
                        apellidos: this.apellidos,
                        sexo: this.sexo,
                        edad: this.edad,
                        ciudad: this.ciudad
                    
                    })
                    
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                    this.nombre =""
                    this.apellidos =""
                    this.sexo =""
                    this.edad =""
                    this.ciudad =""
                    this.ocultarLoad()
            }
        }
    },

}


</script>