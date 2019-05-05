<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <milestone-detail :milestone-id="milestoneId" />
  </div>
</template>

<script>
import MilestoneDetail from '~/components/milestone/milestone-detail'

export default {
  components: {
    MilestoneDetail
  },

  asyncData({ params }) {
    return {
      milestoneId: params.id,
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Milestones', to: { name: 'milestones' } },
        { text: `${params.id}` }
      ]
    }
  }
}
</script>
