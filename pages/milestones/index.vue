<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs"/>
    <b-card title="Milestones">
      <b-table></b-table>
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
        { text: 'Milestones', to: { name: 'milestones' } }
      ]
    }
  }
}
</script>
