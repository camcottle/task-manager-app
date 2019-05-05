<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <organization-list />
  </div>
</template>

<script>
import OrganizationList from '~/components/organization/organization-list'

export default {
  components: {
    OrganizationList
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'organizations' } }
      ]
    }
  }
}
</script>
