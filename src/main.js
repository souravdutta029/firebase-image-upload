import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBO8dl0T1FQpycT_MdTgp43tTwjXFCe9ro",
  authDomain: "fir-image-uploader-df129.firebaseapp.com",
  databaseURL: "https://fir-image-uploader-df129.firebaseio.com",
  projectId: "fir-image-uploader-df129",
  storageBucket: "fir-image-uploader-df129.appspot.com",
  messagingSenderId: "945571351074",
  appId: "1:945571351074:web:87655884d5e6669cb7d87b",
  measurementId: "G-NJ6C26G9G2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
}).$mount('#app')
