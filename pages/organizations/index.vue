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

  computed: {
    ...mapState({
      organizations: (state) => {
        console.log(state.organizations)
        return state.organizations.all
      },
      organizationsCount: state => state.organization.all.total
    })
  },

  mounted() {
    this.getTheShit()
  },

  methods: {
    getTheShit() {
      this.$store.dispatch('organizations/fetchAll')
    }
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
