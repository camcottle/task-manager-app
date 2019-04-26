<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <project-list />
  </div>
</template>

<script>
import ProjectList from '~/components/projects/project-list'

export default {
  components: {
    ProjectList
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
