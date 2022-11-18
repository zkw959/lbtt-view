import Vue from 'vue'
import App from './App.vue'

// import router from './router'
import {DatePicker, Button, Row,Col,Table, TableColumn,Message,Loading} from 'element-ui';
Vue.component(DatePicker.name, DatePicker);
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.prototype.$message = Message
Vue.use(Loading.directive);

// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
  store
}).$mount('#app')
