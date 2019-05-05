<template>
  <b-card>
    <b-title>
      <h4 class="float-left">Sprint</h4>
      <router-link to="/sprints/create" class="float-right">
        <b-button>Add</b-button>
      </router-link>
    </b-title>
    <b-table :items="sprints" :fields="columns">
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
        'actions'
      ]
    }
  },

  computed: {
    ...mapState({
      sprints: (state) => {
        return state.sprints.all
      },
      sprintsCount: state => state.sprint.all.total
    })
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults() {
      this.$store.dispatch('sprints/fetchAll')
    },

    onDelete(sprintId) {
      this.$store.dispatch('sprints/deleteTask', sprintId)
        .then(() => {
          this.$store.dispatch('sprints/fetchAll')
        })
    },
    getLink: (sprintId) => {
      return `/sprints/${sprintId}`
    }
  }
}
</script>

<style></style>
