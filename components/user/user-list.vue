<template>
  <b-card>
    <b-title>
      <h4 class="float-left">Users</h4>
      <router-link to="/users/create" class="float-right">
        <b-button>Add</b-button>
      </router-link>
    </b-title>
    <b-table :items="users" :fields="columns">
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
        'email',
        'organization',
        'actions'
      ]
    }
  },

  computed: {
    ...mapState({
      users: (state) => {
        return state.users.all
      },
      usersCount: state => state.user.all.total
    })
  },

  mounted() {
    this.getResults()
  },

  methods: {
    getResults() {
      this.$store.dispatch('users/fetchAll')
    },

    onDelete(userId) {
      this.$store.dispatch('users/deleteUser', userId)
        .then(() => {
          this.$store.dispatch('users/fetchAll')
        })
    },
    getLink: (userId) => {
      return `/users/${userId}`
    }
  }
}
</script>

<style></style>
