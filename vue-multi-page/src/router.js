import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "./pages/teams/TeamsList";
import TeamsFooter from "./pages/teams/TeamsFooter";
import TeamMembers from "./pages/teams/TeamMembers";
import UsersList from "./pages/users/UsersList";
import UsersFooter from "./pages/users/UsersFooter";
import NotFound from "./components/nav/NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/teams'
        },
        {
            path: '/teams',
            components: {'default': TeamsList, 'footer': TeamsFooter},
            children: [
                {
                    name: 'team-members', path: '/teams/:teamId', component: TeamMembers, props: true
                }
            ]
        },
        {
            path: '/users',
            components: {'default': UsersList, 'footer': UsersFooter},
            beforeEnter(to, from, next) {
                console.log(to, from);
                next(true);
            }
        },

        {
            path: '/:notFound(.*)', component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        return savedPosition ? savedPosition : {left: 0, top: 0};
    }
});
router.beforeEach(function (to, from, next) {
    console.log(to, from);
    next(true);
});

export default router;
