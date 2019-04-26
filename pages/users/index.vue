<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <b-card title="Users">
      <b-table />
    </b-card>
  </div>
</template>

<script>
export default {
  components: {
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Users', to: { name: 'users' } }
      ]
    }
  }
}
</script>
