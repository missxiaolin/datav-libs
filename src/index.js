import Svg from './components/Svg/index'
import Incon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'
import Container from './components/Container/index'
import TopHeader from './components/TopHeader/index'
import Logo from './components/Logo/index'
import TodayUsers from './components/TodayUsers/index'
import VueCountTo from './components/VueCountTo/index'


export default function(Vue) {
    Vue.use(Svg)
    Vue.use(Incon)
    Vue.use(SvgAnimation)
    Vue.use(Loading)
    Vue.use(FlyBox)
    Vue.use(Container)
    Vue.use(TopHeader)
    Vue.use(Logo)
    Vue.use(TodayUsers)
    Vue.use(VueCountTo)
}