<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <project-detail />
  </div>
</template>

<script>
import ProjectDetail from '~/components/projects/project-detail'

export default {
  components: {
    ProjectDetail
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'projects' } }
      ]
    }
  }
}
</script>
