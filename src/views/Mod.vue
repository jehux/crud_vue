<template>
    <div>
       
        <v-row justify="center">

        
        <table class="table table-striped">
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>apellidos</th>
                        <th>edad</th>
                        <th>sexo</th>
                        <th>ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="persona in personas" :key="persona.key">
                        <td>{{ persona.nombre }}</td>
                        <td>{{ persona.apellidos }}</td>
                        <td>{{ persona.edad }}</td>
                        <td>{{ persona.sexo }}</td>
                        <td>{{ persona.ciudad }}</td>
                        <td> <v-btn color="error" @click="eliminar(persona.key)">elminiar</v-btn>
                        <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="warning"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            editar
                            </v-btn>
                        </template>
                        <v-card>
        <v-card-title>
          <span class="headline">Actualizar Persona</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="nombre" label="nombre*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="apellidos" label="apellido*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field type="number" v-model="edad" label="edad*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="sexo" label="sexo*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="ciudad" label="ciudad*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*modificador de datos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">cerrar</v-btn>
          <v-btn color="blue" text @click="editar(persona.key)">enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
                        </td>
                    </tr>
                </tbody>
        </table>
       </v-row>
    </div>
</template>

<script>
import { db } from '../main'
import {  mapMutations } from 'vuex'
export default {
    data() {
        return {
            personas:[],
            nombre:"",
            apellidos:"",
            edad:"",
            ciudad:"",
            sexo:"",
            dialog:false
        }
    },
    created(){
        db.collection('personas').onSnapshot((snapshotChange) => {
                this.personas = [];
                snapshotChange.forEach((doc) => {
                    this.personas.push({
                        key: doc.id,
                        nombre: doc.data().nombre,
                        apellidos: doc.data().apellidos,
                        sexo: doc.data().sexo,
                        edad: doc.data().edad,
                        ciudad: doc.data().ciudad
                    })
                });
            })
    },
    methods:{
        ...mapMutations['mostrarDialgo'],
        async eliminar(llave){
            await db.collection("personas").doc(llave).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })

        },
        editar(llave){
            
        db.collection('personas')
            .doc(llave)
            .update({
                nombre:this.nombre,
                apellidos:this.apellidos,
                sexo:this.sexo,
                edad:this.edad,
                ciudad:this.ciudad,
            })
            .then(() => {
            console.log('usuario actualizado')
            })
            this.dialog = false
        }
    }
}
</script>