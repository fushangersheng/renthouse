import {
  Search,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Image,
  Button
} from 'vant'
const element = [
  Search,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Image,
  Button
]
export default function (Vue) {
  element.forEach((item) => Vue.use(item))
}
