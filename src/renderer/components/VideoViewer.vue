<template>
    <video width="320" height="240" controls>
        <source  v-bind:src="video" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</template>

<script>
    export default {
        name: 'VideoViewer'
    }
</script>

<style scoped>

</style>