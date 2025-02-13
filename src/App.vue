<template>
  <div>
    <div>
         <NavBar/>
    </div>
     <!-- <div>
      <HomeView />
    </div> -->
    
  </div>
</template>
<script lang="ts">
import NavBar from './components/NavBar.vue'
// import HomeView from './components/HomeView.vue'

export default {
  name: 'App',
  components:{
    // HomeView,
    NavBar,
  }
};
</script>
<style>

  </style>
