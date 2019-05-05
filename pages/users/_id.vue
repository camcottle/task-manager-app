<template>
  <div class="page">
    <b-breadcrumb :items="breadcrumbs" />
    <user-detail :user-id="userId" />
  </div>
</template>

<script>
import UserDetail from '~/components/user/user-detail'

export default {
  components: {
    UserDetail
  },

  asyncData({ params }) {
    return {
      userId: params.id,
      breadcrumbs: [
        { text: 'Dashboard', to: { path: '/' } },
        { text: 'Users', to: { name: 'users' } },
        { text: `${params.id}` }
      ]
    }
  }
}
</script>
