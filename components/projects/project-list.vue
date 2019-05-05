<template>
  <b-card>
    <b-title>
      <h4 class="float-left">Project</h4>
      <router-link to="/projects/create" class="float-right">
        <b-button>Add</b-button>
      </router-link>
    </b-title>
    <b-table :items="projects" :fields="columns">
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
      projects: (state) => {
        return state.projects.all
      },
      projectsCount: state => state.project.all.total
    })
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults() {
      this.$store.dispatch('projects/fetchAll')
    },

    onDelete(projectId) {
      this.$store.dispatch('projects/deleteTask', projectId)
        .then(() => {
          this.$store.dispatch('projects/fetchAll')
        })
    },
    getLink: (projectId) => {
      return `/projects/${projectId}`
    }
  }
}
</script>

<style></style>
