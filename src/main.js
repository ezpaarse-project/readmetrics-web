import { createApp } from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import i18n from './i18n'


const app = createApp(App).use(i18n)
app.mount('#app')
