<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <user-list />
  </div>
</template>

<script>
import UserList from '~/components/user/user-list'

export default {
  components: {
    UserList
  },

  data: () => {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Users', to: { name: 'users' } }
      ]
    }
  }
}
</script>
