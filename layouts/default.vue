<template>
  <div class="Main">
    <b-row id="MainHeader">
      <b-col>[header]</b-col>
    </b-row>
    <b-row>
      <b-col id="MainSidebar" cols="3">
        <sidebar />
      </b-col>
      <b-col id="MainBody" cols="9">
        <nuxt />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from '~/components/common/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
  #MainHeader{
    height: 5vh;
    z-index: 1000;
    box-sizing: border-box;
    background: #aaa;
  }
  #MainSidebar{
    height: 95vh;
    background: #ccc;
  }
</style>
