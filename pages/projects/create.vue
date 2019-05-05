<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <project-create />
  </div>
</template>

<script>
import ProjectCreate from '~/components/projects/project-create'

export default {
  components: {
    ProjectCreate
  },

  asyncData({ params }) {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Projects', to: { name: 'projects' } },
        { text: 'Create' }
      ]
    }
  }
}
</script>
