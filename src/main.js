import { createApp } from 'vue'
import jointjs from '@/plugins/jointjs'
import App from '@/App'
import '@leanix/reporting'

const app = createApp(App)
/* global lx */
app.config.globalProperties.$lx = lx
app.use(jointjs)
app.mount('#app')
