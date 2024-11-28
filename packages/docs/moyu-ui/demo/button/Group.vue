<template>
  <p>
    <my-button-group disabled>
      <my-button type="primary" icon="arrow-left">Previous Page</my-button>
      <my-button type="primary">
        Next Page<er-icon icon="arrow-right" style="margin-left: 8px" />
      </my-button>
    </my-button-group>
  </p>
  <p>
    <my-button-group type="warning" size="small">
      <my-button type="primary" icon="edit" round />
      <my-button type="primary" icon="share" />
      <my-button type="primary" icon="trash" round />
    </my-button-group>
  </p>
</template>