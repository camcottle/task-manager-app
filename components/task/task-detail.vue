<template>
  <b-card title="Task">
    <b-row>
      <b-col>
        <b-form-group>
          <label>Task name</label>
          <input type="text" class="form-control">
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <label>Due Date</label>
          <input type="text" class="form-control">
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group>
          <label>Project</label>
          <input type="text" class="form-control">
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <label>Milestone</label>
          <input type="text" class="form-control">
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group>
          <label>Assign to</label>
          <input type="text" class="form-control">
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group>
          <label>Effort</label>
          <input type="text" class="form-control">
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group>
          <label>Description</label>
          <textarea class="form-control" />
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {

  data: () => {
    return {
    }
  }
}
</script>

<style></style>
