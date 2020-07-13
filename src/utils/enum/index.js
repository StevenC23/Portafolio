import Home from "../../pages/Home/index"
import About from "../../pages/About/index"
import Hv from "../../pages/Hv/index"
import Works from "../../pages/Works/index"
import Comolohice from "../../pages/Comolohice/index"

export const ROUTES = [
    {
        id:1,
        component: Home,
        path: "/",
    },
    {
        id:2,
        component:About,
        path:"/about"
    }
    ,
    {
        id:3,
        component:Hv,
        path:"/hv"
    },
    {
        id:4,
        component:Works,
        path:"/works"
    },
    {
        id:5,
        component:Comolohice,
        path:"/desarrollopagina"
    }
]