<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <organization-detail :organization-id="organizationId" />
  </div>
</template>

<script>
import OrganizationDetail from '~/components/organization/organization-detail'

export default {
  components: {
    OrganizationDetail
  },

  asyncData({ params }) {
    return {
      organizationId: params.id,
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Organizations', to: { name: 'organizations' } },
        { text: `${params.id}` }
      ]
    }
  }
}
</script>
