<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <task-detail :task-id="taskId" />
  </div>
</template>

<script>
import TaskDetail from '~/components/task/task-detail'

export default {
  components: {
    TaskDetail
  },

  asyncData({ params }) {
    return {
      taskId: params.id,
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Users', to: { name: 'tasks' } },
        { text: `${params.id}` }
      ]
    }
  }
}
</script>
