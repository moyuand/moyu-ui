import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@moyu-ui/utils'

export const MyButton = withInstall(Button) 
export const MyButtonGroup = withInstall(ButtonGroup)

export * from './types'