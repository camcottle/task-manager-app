<template>
  <b-card>
    <b-title>
      <h4 class="float-left">Tasks</h4>
      <router-link to="/tasks/create" class="float-right">
        <b-button>Add</b-button>
      </router-link>
    </b-title>
    <b-table :items="tasks" :fields="columns">
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
        'project',
        'points',
        'actions'
      ]
    }
  },

  computed: {
    ...mapState({
      tasks: (state) => {
        return state.tasks.all
      },
      tasksCount: state => state.task.all.total
    })
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults() {
      this.$store.dispatch('tasks/fetchAll')
    },

    onDelete(taskId) {
      this.$store.dispatch('tasks/deleteTask', taskId)
        .then(() => {
          this.$store.dispatch('tasks/fetchAll')
        })
    },
    getLink: (taskId) => {
      return `/tasks/${taskId}`
    }
  }
}
</script>

<style></style>
