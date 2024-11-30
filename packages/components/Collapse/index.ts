import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import { withInstall } from '@moyu-ui/utils'

export const MyCollapse = withInstall(Collapse) 
export const MyCollapseItem = withInstall(CollapseItem)

export * from './types'