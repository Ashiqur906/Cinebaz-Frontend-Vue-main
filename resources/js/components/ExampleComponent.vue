<template>
    <div
        class="title-bar-1"
        
        >
            <h2> Related</h2>
            <details-widget></details-widget>
        </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
body{
    background-color: black;
}

.title-bar-1{
  margin-top: 100px;
  margin-bottom: 20px;
}
.title-bar-1 h2{
  margin-bottom: 20px;
  font-size: 30px;
  margin-left: 50px;
}

</style>