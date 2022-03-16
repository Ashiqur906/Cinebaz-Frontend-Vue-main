<template>
  <div class="row">
    <div class="help_part">
         <help-center></help-center>
    </div>
    <div class="footer-bg">
         <footer-part></footer-part>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style>
.footer-bg{
    background-color: black;
  }
  .help_part{
    background-color: black;
    color: white;
    border-bottom: 1px solid gray;
  }
</style>