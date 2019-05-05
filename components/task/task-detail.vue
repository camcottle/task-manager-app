<template>
  <b-card>
    <form @submit.prevent="onSubmit">
      <b-card-title>
        <h4>
          Task
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
            <label>Task name</label>
            <input type="text" v-model="formData.name" class="form-control"/>
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group>
            <label>Points</label>
            <input type="text" v-model="formData.points" class="form-control"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Project</label>
            <select
              v-model="formData.project"
              class="form-control">
              <option
                v-for="project in projects"
                :key="project._id"
                :value="project._id">
                {{ project.name }}
              </option>
            </select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label>Description</label>
            <textarea class="form-control" v-model="formData.description"/>
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
    'taskId'
  ],

  data() {
    return {
      formData: {
        name: '',
        points: '',
        project: '',
        description: ''
      }
    }
  },

  mounted() {
    this.getTask(this.taskId)
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('tasks/updateTask', this.formData)
    },

    getTask() {
      this.$store.dispatch('tasks/getTask', this.taskId)
      this.$store.dispatch('projects/fetchAll')
    }
  },

  computed: {
    ...mapState({
      task: (state) => {
        return state.tasks.current
      },
      projects: (state) => {
        return state.projects.all
      }
    })
  },

  watch: {
    task(task) {
      console.log(task)
      this.formData = { ...task }
    }
  }
}
</script>

<style></style>
