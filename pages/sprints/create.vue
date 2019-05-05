<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <sprint-create />
  </div>
</template>

<script>
import SprintCreate from '~/components/sprint/sprint-create'

export default {
  components: {
    SprintCreate
  },

  asyncData({ params }) {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Sprints', to: { name: 'sprints' } },
        { text: 'Create' }
      ]
    }
  }
}
</script>
