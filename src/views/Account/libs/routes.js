import SignIn from '../subModules/SignIn/index.vue'
import SingOut from '../subModules/SignOut/index.vue'

export default [
    {
        path: '/sign-in',
        component: SignIn,
    },
    {
        path: '/sign-out',
        component: SingOut,
    }
]