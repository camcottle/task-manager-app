<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <organization-list :organizations="organizations" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  },

  computed: {
    ...mapState({
      organizations: (state) => {
        return state.organizations.all
      },
      organizationsCount: state => state.organization.all.total
    })
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults() {
      this.$store.dispatch('organizations/fetchAll')
    }
  }
}
</script>
