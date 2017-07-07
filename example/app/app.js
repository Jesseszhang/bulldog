import './app.scss'
import template from './app.tpl'

import headerLayout from 'ex/client/component/layout/header-layout/header-layout'

export default {
  name: 'app',
  template,
  components: {
    'header-layout': headerLayout
  }
}
