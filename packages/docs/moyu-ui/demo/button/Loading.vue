<template>
  <div>
    <my-button type="primary" loading>Loading</my-button>
    <my-button type="primary" loading-icon="circle-notch" loading
      >Loading</my-button
    >
    <my-button type="primary" loading>
      <template #loading>
        <er-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </my-button>
  </div>
</template>