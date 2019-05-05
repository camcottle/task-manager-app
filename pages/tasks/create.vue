<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <task-create />
  </div>
</template>

<script>
import TaskCreate from '~/components/task/task-create'

export default {
  components: {
    TaskCreate
  },

  asyncData({ params }) {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'tasks' } },
        { text: 'Create' }
      ]
    }
  }
}
</script>
