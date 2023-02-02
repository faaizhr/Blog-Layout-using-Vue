import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faBarsStaggered, faChevronDown, faEye, faLink, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUser, faEye, faLink, faFacebook, faTwitter, faWhatsapp, faChevronDown, faBarsStaggered, faXmark, faArrowRight, faInstagram, faYoutube)


const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
