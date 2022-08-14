import { createApp } from 'vue'
import App from './App.vue'
import "./plugins/bootstrap"
import './style.css'
import router from './router'


createApp(App).use(router).mount('#app')
