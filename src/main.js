import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcIWIsdm1q6rkpq-nGw5jyO8JB1wexQVs",
  authDomain: "crud-vue-499ce.firebaseapp.com",
  databaseURL: "https://crud-vue-499ce.firebaseio.com",
  projectId: "crud-vue-499ce",
  storageBucket: "crud-vue-499ce.appspot.com",
  messagingSenderId: "700447181364",
  appId: "1:700447181364:web:a9ab2a6273c347902d9861"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
