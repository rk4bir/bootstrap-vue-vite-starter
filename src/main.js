import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "./plugins/bootstrap"
import router from './router'


createApp(App).use(router).mount('#app')
