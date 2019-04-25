<template>
  <b-card title="Projects">
    <b-row>
      <b-col>
        <b-form-group>
          <label>Project name</label>
          <input type="text" class="form-control"/>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <label>Priority</label>
          <input type="text" class="form-control"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group>
          <label>Description</label>
          <textarea class="form-control"></textarea>
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
