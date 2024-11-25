<script setup lang="ts">
import type { IconProps } from './types'
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es';
import { computed } from 'vue';

defineOptions({
  name: 'MyIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()

const filiterProps = computed(() => {
  return omit(props, ['type', 'color'])
})
const costomStyle = computed(() => ({color: props.color ?? void 0 }))
</script>
<template>
  <i
    :class="{ [`my-icon--${type}`]: type }"
    class="my-icon"
    :style="costomStyle"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filiterProps" />
  </i>
</template>
<style scoped>
.er-icon {
  --er-icon-color: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--er-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .er-icon--$(val) {
    --er-icon-color: var(--er-color-$(val));
  }
}
</style>