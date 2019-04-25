<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <sprint-list />
  </div>
</template>

<script>
import SprintList from '~/components/sprint/sprint-list'

export default {
  components: {
    SprintList
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Tasks', to: { name: 'sprints' } }
      ]
    }
  }
}
</script>
