import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
import router from './libs/routes'
import ElementPlus from 'element-plus'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
