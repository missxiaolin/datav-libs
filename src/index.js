import Svg from './components/Svg/index'
import Incon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'

export default function(Vue) {
    Vue.use(Svg)
    Vue.use(Incon)
    Vue.use(SvgAnimation)
    Vue.use(Loading)
    Vue.use(FlyBox)
}