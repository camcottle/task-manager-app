<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <milestone-list />
  </div>
</template>

<script>
import MilestoneList from '~/components/milestone/milestone-list'

export default {
  components: {
    MilestoneList
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
