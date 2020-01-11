<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'streamer',
    data: {
      video: 'https://www.w3schools.com/tags/movie.mp4'
    },
    methods: {
      changeVideo () {
        this.video = 'http://techslides.com/demos/sample-videos/small.mp4'
      }
    }
  }

</script>

<style>
  /* CSS */
</style>