<template>
  <b-card>
    <b-title>
      <h4 class="float-left">
        Milestones
      </h4>
      <router-link to="/milestones/create" class="float-right">
        <b-button>Add</b-button>
      </router-link>
    </b-title>
    <b-table :items="milestones" :fields="columns">
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
      milestones: (state) => {
        return state.milestones.all
      },
      milestonesCount: state => state.milestone.all.total
    })
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults() {
      this.$store.dispatch('milestones/fetchAll')
    },

    onDelete(milestoneId) {
      this.$store.dispatch('milestones/deleteMilestone', milestoneId)
        .then(() => {
          this.$store.dispatch('milestones/fetchAll')
        })
    },
    getLink: (milestoneId) => {
      return `/milestones/${milestoneId}`
    }
  }
}
</script>

<style></style>
