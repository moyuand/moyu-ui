<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { ref, computed, inject } from 'vue';
import { throttle } from 'lodash-es'
import MyIcon from '../Icon/Icon.vue';
import {BUTTON_GROUP_CTX_KEY} from './contants'

defineOptions({
  name: 'MyButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'default',
  tag: 'button',
  nativeType: 'button', 
  useThrottle: true,
  throttleDuration: 1000,
})

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0) 
const size = computed(() => ctx?.size ?? props.size ?? 'default')
const disabled = computed(() => ctx?.disabled || props.disabled || false)
const type = computed(() => ctx?.type ?? props.type ?? 'primary')

const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0'
})) 
const handleClick = (e: MouseEvent) => emits('click', e);
const handleThrottleClick = throttle(handleClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>
<template>
  <component
    :autofocus="autofocus"
    :is="tag"
    ref="_ref"
    class="my-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`my-button--${type}`]: type,
      [`my-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e: MouseEvent) => useThrottle ? handleThrottleClick(e) : handleClick(e)">
    <template v-if="loading">
      <slot name="loading">
        <my-icon 
          class="loading-icon" 
          :icon="loadingIcon ?? 'spinner' " 
          spin 
          :style="iconStyle"></my-icon>
      </slot>
    </template>
    <my-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    ></my-icon>
    <slot></slot>
  </component>
</template>
<style scoped>
@import './style.css';
</style>