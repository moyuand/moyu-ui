<script lang="ts" setup>
import type { ButtonGroupProps, } from './types';
import { provide, toRef, reactive } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './contants';

defineOptions({
  name: 'MyButtonGroup',
})
const props = defineProps<ButtonGroupProps>()

provide(BUTTON_GROUP_CTX_KEY, reactive({
  disabled: toRef(props, 'disabled'),
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
}))
</script>
<template>
  <div class="my-button-group">
    <slot></slot>
  </div>
</template>
<style scoped>
@import './style.css';
</style>