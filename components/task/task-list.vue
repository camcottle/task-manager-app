<template>
  <b-card title="Tasks">
    <b-table :items="items" />
  </b-card>
</template>

<script>
export default {

  data: () => {
    return {
      items: [
        {
          name: 'Reset the database permissions',
          due_date: '11/02/19',
          assigned_to: 'cameron',
          status: 'in-progress',
          effort: '3',
          priority: 'low'
        },
        {
          name: 'Unfuck the codebase',
          due_date: '11/03/19',
          assigned_to: 'cameron',
          status: 'in-progress',
          effort: '21',
          priority: 'medium'
        }
      ]
    }
  }
}
</script>

<style></style>
