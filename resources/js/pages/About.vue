<template>
  <div class="row">

   
    <div class="main_part">
         <corporate-information></corporate-information>
    </div>
    <div class="main_part">
         <privacy-policy></privacy-policy>
    </div>
    <div class="main_part">
         <legal-notices></legal-notices>
    </div>
    <div class="main_part">
         <terms-conditions></terms-conditions>
    </div>
    <div class="main_part">
         <return-refund></return-refund>
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
  .main_part{
    background-color: black;
    color: white;
    border-bottom: 1px solid gray;
  }
</style>