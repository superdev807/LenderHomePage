import VueRouter from "vue-router";
import Vue from "vue";

import TeamList from "./components/team/TeamList";
import TeamView from "./components/team/TeamView";
import TeamCreation from "./components/team/TeamCreation";
import PlayerList from "./components/player/PlayerList";
import PlayerCreation from "./components/player/PlayerCreation";
import PlayerView from "./components/player/PlayerView";
import AuthSignUp from "./components/auth/AuthSignUp";
import AuthSignIn from "./components/auth/AuthSignIn";
import { store } from "./store";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/signup",
            component: AuthSignUp
        },

        {
            path: "/signin",
            component: AuthSignIn
        },

        {
            path: "/teams",
            component: TeamList,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: "/teams/:id",
            component: TeamView,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: "/teams-create",
            component: TeamCreation,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: "/players",
            component: PlayerList,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: "/players-create",
            component: PlayerCreation,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: "/players/:id",
            component: PlayerView,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.currentUser;

    store.commit("error", null);

    if (requiresAuth && !currentUser) {
        next("/signin");
    } else if (to.path == "/signin" && currentUser) {
        next("/");
    } else {
        next();
    }
});
