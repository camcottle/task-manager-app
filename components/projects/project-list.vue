<template>
  <b-card title="Projects">
    <b-table :items="items" />
  </b-card>
</template>

<script>
export default {

  data: () => {
    return {
      items: [
        {
          name: 'truDigital 2.X',
          milestones: 15,
          tasks: 130,
          progress: '15%',
          priority: 'low'
        },
        {
          name: 'truDigital NSS',
          milestones: 5,
          tasks: 130,
          progress: '65%',
          priority: 'medium'
        },
        {
          name: 'truDigital 3.0',
          milestones: 10,
          tasks: 400,
          progress: '10%',
          priority: 'high'
        }
      ]
    }
  }
}
</script>

<style></style>
