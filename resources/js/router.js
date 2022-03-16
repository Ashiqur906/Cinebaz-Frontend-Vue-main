import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Blog from './pages/Blog.vue';
import Profile from './pages/Profile.vue';
import MyProfile from './pages/MyProfile.vue';
import MyLibrary from './pages/MyLibrary.vue';
import MyPayment from './pages/MyPayment.vue';
import MyPurchase from './pages/MyPurchase.vue';
import MyVouchers from './pages/MyVouchers.vue';
import MyReturns from './pages/MyReturns.vue';
import MyCancellations from './pages/MyCancellations.vue';
import EditProfile from './pages/EditProfile.vue';
import ChangePassword from './pages/ChangePassword.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';
import CorporateInformation from './components/CorporateInformation.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';
import HelpCenter from './components/HelpCenter.vue';
import LegalNotices from './components/LegalNotices.vue';
import TermsConditions from './components/TermsConditions.vue';
import ReturnRefund from './components/ReturnRefund.vue';
import Details2 from './components/Details2.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/details',
            name: 'details',
            component: Details2
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/myprofile',
            name: 'myprofile',
            component: MyProfile
        },
        {
            path: '/mylibrary',
            name: 'mylibrary',
            component: MyLibrary
        },
        {
            path: '/mypayment',
            name: 'mypayment',
            component: MyPayment
        },
        {
            path: '/mypurchase',
            name: 'mypurchase',
            component: MyPurchase
        },
        {
            path: '/myvouchers',
            name: 'myvouchers',
            component: MyVouchers
        },
        {
            path: '/myreturns',
            name: 'myreturns',
            component: MyReturns
        },
        {
            path: '/mycancellations',
            name: 'mycancellations',
            component: MyCancellations
        },
        {
            path: '/editprofile',
            name: 'editprofile',
            component: EditProfile
        },
        {
            path: '/changepassword',
            name: 'changepassword',
            component: ChangePassword
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        },
        {
            path: '/corporateinformation',
            name: 'corporateinformation',
            component: CorporateInformation
        },
        {
            path: '/privacy-Policy',
            name: 'privacy-Policy',
            component: PrivacyPolicy
        },
        {
            path: '/help-center',
            name: 'helpcenter',
            component: HelpCenter
        },
        {
            path: '/legal-notices',
            name: 'legal-notices',
            component: LegalNotices
        },
        {
            path: '/terms-conditions',
            name: 'terms-conditions',
            component: TermsConditions
        },
        {
            path: '/return-refund',
            name: 'return-refund',
            component: ReturnRefund
        },
    ]
});

export default router;