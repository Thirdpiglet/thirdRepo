import Home from './components/Home.vue';
import User from './components/user/User.vue';
import blog from './components/blog/Blog.vue';
import blog2 from './components/blog/Blog2.vue';
import blogEdit from './components/blog/BlogEdit.vue';
import contact from './components/Contact.vue';
import herfst from './components/Herfst.vue';
import winter from './components/Winter.vue';
import vierdebiggetje from './components/VierdeBiggetje.vue';
// import HelloWorld from './components/HelloWorld.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User },
    { path: '/blog', component: blog },
    { path: '/blog2', component: blog2 },
    {
        path: '/blogEdit',
        name: 'blogedit',
        component: blogEdit,
        props: true,
    },
    // { path: '/HelloWorld', component: HelloWorld },
    { path: '/contact', component: contact },
    { path: '/herfst', component: herfst },
    { path: '/winter', component: winter },
    { path: '/vierdebiggetje', component: vierdebiggetje },
];
