<template>
  <b-card>
    <form @submit.prevent="onSubmit">
      <b-card-title>
        <h4>
          User
          <b-button-group class="float-right">
            <b-button type="submit">
              Save
            </b-button>
          </b-button-group>
        </h4>
      </b-card-title>
      <b-row>
        <b-col>
          <b-form-group>
            <label>User name</label>
            <input v-model="formData.name" type="text" class="form-control">
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Email</label>
            <input v-model="formData.email" type="text" class="form-control">
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Organization</label>
            <select v-model="formData.organization" type="text" class="form-control">
              <option value="5cc140eb37f9c62855007af6">
                fight me scrub
              </option>
              <option value="5cc140ee37f9c62855007af7">
                stringybeanies
              </option>
              <option value="5cc318acb0b4361691a8e99f">
                poop
              </option>
              <option value="5cc31c8eb0b4361691a8e9a3">
                hahaha
              </option>
              <option value="5cc31c99b0b4361691a8e9a4">
                here we go!
              </option>
            </select>
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        organization: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch(
        'users/createUser',
        this.formData
      ).then(() => {
        this.$router.push('/users/')
      })
    }
  }
}
</script>

<style></style>
