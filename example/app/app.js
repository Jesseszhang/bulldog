import './app.scss';
import template from './app.tpl';
import headerLayout from '../components/layout/header-layout/header-layout';
import footerLayout from '../components/layout/footer-layout/footer-layout';

export default {
  name: 'app',
  template,
  components: {
    headerLayout,
    footerLayout
  }
}
