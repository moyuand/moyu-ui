<script setup lang="ts">
const arr = ['a']

</script>

<template>
  <MyButton type="success">success</MyButton>
  <my-collapse v-model="arr">
      <my-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </my-collapse-item>
      <my-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </my-collapse-item>
      <my-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </my-collapse-item>
    </my-collapse>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
