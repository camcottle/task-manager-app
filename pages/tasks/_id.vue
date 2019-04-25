<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs"/>
    <task-detail />
  </div>
</template>

<script>
import TaskDetail from '~/components/task/task-detail'

export default {
  components: {
    TaskDetail
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'tasks' } }
      ]
    }
  }
}
</script>
