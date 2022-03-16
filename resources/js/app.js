/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import router from './router';
// import swiper from './swiper';
import App from './layouts/App.vue';
import feather from 'vue-icon'
import vuetify from './vuetify';
import 'animate.css';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
Vue.component('menu-icon', MenuIcon);
Vue.use(feather, 'v-icon')

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('details-modal', require('./components/DetailsModal.vue').default);
Vue.component('banner-slider', require('./components/BannerSlider.vue').default);
Vue.component('footer-part', require('./components/Footer-Part.vue').default);
Vue.component('profile-content', require('./components/Profile-content.vue').default);
Vue.component('profile-first', require('./components/Profile-Firstpart.vue').default);
Vue.component('details-widget', require('./components/Details-widget.vue').default);
Vue.component('aboutus-widget', require('./components/AboutUs.vue').default);
Vue.component('contact-us', require('./components/ContactUs.vue').default);
Vue.component('help-center', require('./components/HelpCenter.vue').default);
Vue.component('corporate-information', require('./components/CorporateInformation.vue').default);
Vue.component('privacy-policy', require('./components/PrivacyPolicy.vue').default);
Vue.component('legal-notices', require('./components/LegalNotices.vue').default);
Vue.component('terms-conditions', require('./components/TermsConditions.vue').default);
Vue.component('return-refund', require('./components/ReturnRefund.vue').default);
Vue.component('my-profile', require('./components/MyProfile.vue').default)
Vue.component('my-library', require('./components/MyLibrary.vue').default);
Vue.component('my-purchase', require('./components/MyPurchase.vue').default);
Vue.component('change-password', require('./components/ChangePassword.vue').default);
Vue.component('edit-profile', require('./components/EditProfile.vue').default);
Vue.component('details-2', require('./components/Details2.vue').default);





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
    vuetify,
    render: h => h(App)
});