<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <task-list />
  </div>
</template>

<script>
import TaskList from '~/components/task/task-list'

export default {
  components: {
    TaskList
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Tasks', to: { name: 'tasks' } }
      ]
    }
  }
}
</script>
