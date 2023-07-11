import HelloWorld from "../components/HelloWorld.vue";

const Home = () => import("../pages/Home.vue");
const Login = () => import("../pages/Login.vue");

const routes = [
    {
        path: "/",
        component: Home,
        meta: { transition: "slide-left" },
        beforeEnter: (to, from) => {
            // reject the navigation
            return true;
        },
        children: [
            {
                path: "",
                component: Login,
                meta: { transition: "slide-left" },
                beforeEnter: (to, from) => {
                    // reject the navigation
                    return true;
                },
            },
        ],
    },
    {
        path: "/about",
        component: HelloWorld,
        meta: { transition: "slide-left" },
        beforeEnter: (to, from) => {
            // reject the navigation
            return true;
        },
    },
];

export default routes;
