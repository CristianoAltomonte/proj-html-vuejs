import Vue from 'vue'
import App from './App.vue'

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faPhone } from '@fortawesome/free-solid-svg-icons'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
  import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
  import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
  import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons'
  import { faInstagram } from '@fortawesome/free-brands-svg-icons'
  import { faYoutube } from '@fortawesome/free-brands-svg-icons'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import { faTiktok } from '@fortawesome/free-brands-svg-icons'
  
  

  /* add icons to the library */
  library.add(faPhone,faArrowRight,faSquarePollVertical,faFolderPlus,faChartSimple,faFacebookF,faTwitter,faInstagram,faYoutube,faLinkedin,faTiktok)

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
