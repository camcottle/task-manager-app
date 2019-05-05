<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <organization-create />
  </div>
</template>

<script>
import OrganizationCreate from '~/components/organization/organization-create'

export default {
  components: {
    OrganizationCreate
  },

  asyncData({ params }) {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'organizations' } },
        { text: 'Create' }
      ]
    }
  }
}
</script>
