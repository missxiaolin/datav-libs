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
import AverageAge from './components/AverageAge/index'
import VueEcharts from './components/VueEcharts/index'
import TotalDevice from './components/TotalDevice/index'
import TotalGender from './components/TotalGender/index'
import TotalRider from './components/TotalRider/index'
import HotCategory from './components/HotCategory/index'
import CenterHeader from './components/CenterHeader/index'
import TransformCategory from './components/TransformCategory/index'
import BaseScrollList from './components/BaseScrollList/index'
import OrderMap from './components/OrderMap/index'
import RealTimeOrder from './components/RealTimeOrder/index'
import ScheduleView from './components/ScheduleView/index'
import SalesRank from './components/SalesRank/index'




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
    Vue.use(AverageAge)
    Vue.use(VueEcharts)
    Vue.use(TotalDevice)
    Vue.use(TotalGender)
    Vue.use(TotalRider)
    Vue.use(HotCategory)
    Vue.use(CenterHeader)
    Vue.use(TransformCategory)
    Vue.use(BaseScrollList)
    Vue.use(OrderMap)
    Vue.use(RealTimeOrder)
    Vue.use(ScheduleView)
    Vue.use(SalesRank)
}