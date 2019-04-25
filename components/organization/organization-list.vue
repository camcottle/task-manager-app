<template>
  <b-card title="Organizations">
    <b-table :items="organizations" />
  </b-card>
</template>

<script>
export default {
  props: {
    'organizations': { type: Array }
  },

  data: () => {
    return {
    }
  }
}
</script>

<style></style>
