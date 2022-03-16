<template>
  <div class="row">
    <div>
        <profile-content></profile-content>
    </div>
    <div>
      <profile-first></profile-first>
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
  .nav-link{
  color: rgb(121, 119, 119) !important;
  line-height: 0.5;
  font-size: 15px;
}

.profile-link{
  background-color: rgb(94, 94, 94);
}

.sub_title_profile{
  margin-left: -10px !important;
}
 
</style>