<template>
  <div class="content">
    <div>
      <form>
        <div v-if="hasNotification">
          Alert
        </div>
        <b-form-group>
          <label>Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control"
          >
        </b-form-group>
        <b-form-group>
          <label>Password</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control"
          >
        </b-form-group>
        <b-button @click="submit">
          Login
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        email: 'camcottle@gmail.com',
        password: 'password'
      }
    }
  },

  methods: {
    submit() {
      this.busy = true
      this.$store.dispatch('auth/login', this.form)
        .then(() => {
          // this.$router.push('/projects')
        })
        .catch((err) => {
          throw new Error(err)
        })
    }
  }
}
</script>
