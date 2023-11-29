import $ from "jquery"
import { createApp } from 'vue'
import 'bootstrap'
import App from './App.vue'
import VueCookies from 'vue-cookies'
window.$ = window.jquery = $

const app = createApp (App)

import router from '@/router'
import test from '@/user'
app.use(router)
app.use(VueCookies, { expire: '1d'})
app.use(test)

app.mount('#app')
