<template>
  <b-card title="Sprints">
    <b-table :items="items" />
  </b-card>
</template>

<script>
export default {

  data: () => {
    return {
      items: [
        {
          name: 'Sprint 39',
          end_date: '4/30/2019',
          tasks: 130,
          progress: '39%',
          estimated_effort: 198,
          status: 'in-progress'
        },
        {
          name: 'Sprint 38',
          end_date: '4/14/2019',
          tasks: 189,
          estimated_effort: 213,
          progress: '100%',
          status: 'complete'
        },
        {
          name: 'Sprint 37',
          end_date: '3/30/2019',
          tasks: 114,
          estimated_effort: 255,
          progress: '90%',
          status: 'complete'
        }
      ]
    }
  }
}
</script>

<style></style>
