<template>
  <b-card>
    <form @submit.prevent="onSubmit">
      <b-card-title>
        <h4>
          Organization
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
            <label>Organization name</label>
            <input v-model="formData.name" type="text" class="form-control">
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label>Created</label>
            <input type="text" class="form-control">
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Subscription</label>
            <input type="text" class="form-control">
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
    'organizationId'
  ],

  data() {
    return {
      formData: {
        name: 'blank'
      }
    }
  },

  mounted() {
    this.getOrganization(this.organizationId)
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('organizations/updateOrganization', this.formData)
    },

    getOrganization() {
      this.$store.dispatch('organizations/getOrganization', this.organizationId)
    }
  },

  computed: {
    ...mapState({
      organization: (state) => {
        return state.organizations.current
      }
    })
  },

  watch: {
    organization(organization) {
      this.formData = { ...organization }
    }
  }
}
</script>

<style></style>
