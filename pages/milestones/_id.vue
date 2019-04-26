<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <milestone-detail />
    <task-list />
  </div>
</template>

<script>
import MilestoneDetail from '~/components/milestone/milestone-detail'
import TaskList from '~/components/task/task-list'

export default {
  components: {
    MilestoneDetail,
    TaskList
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'milestones' } }
      ]
    }
  }
}
</script>
