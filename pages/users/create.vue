<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <user-create />
  </div>
</template>

<script>
import UserCreate from '~/components/user/user-create'

export default {
  components: {
    UserCreate
  },

  asyncData({ params }) {
    return {
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Users', to: { name: 'users' } },
        { text: 'Create' }
      ]
    }
  }
}
</script>
