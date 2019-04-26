<template>
  <b-card title="Users">
    <b-table :items="users" :fields="columns">
      <template slot="name" scope="data">
        <router-link :to="getLink(data.item._id)">
          {{ data.item.name }}
        </router-link>
      </template>
      <template slot="actions">
        <b-button-group class="float-right">
          <b-button>edit</b-button>
          <b-button>view</b-button>
          <b-button>deactivate</b-button>
        </b-button-group>
      </template>
    </b-table>
  </b-card>
</template>

<script>
export default {
  props: {
    'users': {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data: () => {
    return {
      columns: [
        'name',
        'email',
        'actions'
      ]
    }
  },

  methods: {
    getLink: (userId) => {
      return `users/${userId}`
    }
  }
}
</script>

<style></style>
