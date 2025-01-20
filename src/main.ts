import { createApp } from 'vue'
import pinia from '@/stores'

import App from './App.vue'
import router from './router'
import icon from '@/components/global/register-icons'
import myIcon from '@/components/global/register-myIcons'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'element-plus/dist/index.css'

import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'



import '@/assets/css/index.less'
import 'normalize.css'

const app = createApp(App)


app.use(VueVideoPlayer)

app.use(icon)
app.use(myIcon)
// app.use(PrimeVue)
// app.use(PrimeVue, {
//   theme: {
//     preset: Aura,
//   },
// })

app.use(pinia)
app.use(router)

app.mount('#app')
