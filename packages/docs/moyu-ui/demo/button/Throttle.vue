<script setup>
import { ErMessage } from "eric-ui";
function handleBtnClick() {
  ErMessage.info("btn click");
}
</script>

<template>
  <p>
    <my-button @click="handleBtnClick"> with throttle</my-button>
    <my-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</my-button
    >
  </p>
</template>