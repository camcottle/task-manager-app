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
import { mapState } from 'vuex'
export default {
  props: [
    'milestoneId'
  ],

  data() {
    return {
      formData: {
        name: 'blank'
      }
    }
  },

  mounted() {
    this.getMilestone(this.milestoneId)
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('milestones/updateMilestone', this.formData)
    },

    getMilestone() {
      this.$store.dispatch('milestones/getMilestone', this.milestoneId)
    }
  },

  computed: {
    ...mapState({
      milestone: (state) => {
        return state.milestones.current
      }
    })
  },

  watch: {
    milestone(milestone) {
      this.formData = { ...milestone }
    }
  }
}
</script>

<style></style>
