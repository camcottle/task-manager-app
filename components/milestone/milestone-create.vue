<template>
  <b-card>
    <form @submit.prevent="onSubmit">
      <b-card-title>
        <h4>
          Milestone
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
            <label>Milestone name</label>
            <input v-model="formData.name" type="text" class="form-control">
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
        name: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch(
        'milestones/createMilestone',
        this.formData
      ).then(() => {
        this.$router.push('/milestones/')
      })
    }
  }
}
</script>

<style></style>
