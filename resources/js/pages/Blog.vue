<template>
  <div class="row">
    <div>
      <banner-slider></banner-slider>
    </div>
    <v-container-fluid class="bg_part">
        <v-row no-gutters>
          <v-col
            :key="n"
            cols="12"
            sm="12"
          >
          <example-component></example-component>
          </v-col>
        </v-row>
      </v-container-fluid>
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

  .bg_part{
    background-color: black;
    color: white;

    
  }
  body{
    background-color: black;
  }
</style>