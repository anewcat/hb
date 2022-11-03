import Login from '../pages/Login'
import Center from '../pages/Center'
import Photos from '../pages/Photos'
import Music from '../pages/Music'
import Letter from '../pages/Letter'
export default[
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path:'/center',
        component:Center,
        meta:{
            isHeaderShow:true
        }
    },
    {
        path:'/photos',
        component:Photos,
        meta:{
            isHeaderShow:true
        }
    },
    {
        path:'/music',
        component:Music,
    },
    {
        path:'/letter',
        component:Letter,
        meta:{
            isHeaderShow:true
        }
    },
    
]