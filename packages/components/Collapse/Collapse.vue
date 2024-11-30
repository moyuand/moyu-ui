<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types';
import { COLLAPSE_CTX_KEY } from './contants';
import { provide, watch, ref, defineOptions, defineProps, defineEmits, toRef, watchEffect } from 'vue';
import { debugWarn } from '@moyu-ui/utils';

const COMP_NAME = 'MyCollapse';

defineOptions({ name: COMP_NAME });
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref(props.modelValue)

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode should only have one active item')
  }
})

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]
  if (props.accordion) {
    _activeNames = [_activeNames[0] == item ? '' : item]
    updateActiveNames(_activeNames)
    return
  }
  const index = _activeNames.indexOf(item)
  if (index > -1) {
    _activeNames.splice(index, 1)
  } else {
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}
function updateActiveNames(val: CollapseItemName[]) {
  activeNames.value = val
  emits('update:modelValue', val)
  emits('change', val)
}

watch(
  () => props.modelValue,
  (val) => updateActiveNames(val))

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})
</script>

<template>
  <div class="my-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>