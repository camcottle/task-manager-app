<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <milestone-create />
  </div>
</template>

<script>
import MilestoneCreate from '~/components/milestone/milestone-create'

export default {
  components: {
    MilestoneCreate
  },

  asyncData({ params }) {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Milestones', to: { name: 'milestones' } },
        { text: 'Create' }
      ]
    }
  }
}
</script>
