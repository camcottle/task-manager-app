<template>
  <b-card>
    <b-title>
      <h4 class="float-left">
        Organizations
      </h4>
      <router-link to="/organizations/create" class="float-right">
        <b-button>Add</b-button>
      </router-link>
    </b-title>
    <b-table :items="organizations" :fields="columns">
      <template slot="name" slot-scope="data">
        <router-link :to="getLink(data.item._id)">
          {{ data.item.name }}
        </router-link>
      </template>
      <template slot="actions" slot-scope="data">
        <b-button-group class="float-right">
          <b-button @click="onDelete(data.item._id)">Deactivate</b-button>
        </b-button-group>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'
export default {

  data: () => {
    return {
      columns: [
        'name',
        'projects',
        'primary_account',
        'subscription',
        'actions'
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
    },

    onDelete(organizationId) {
      this.$store.dispatch('organizations/deleteOrganization', organizationId)
        .then(() => {
          this.$store.dispatch('organizations/fetchAll')
        })
    },
    getLink: (organizationId) => {
      return `/organizations/${organizationId}`
    }
  }
}
</script>

<style></style>
