<template>
    <v-container-fluid 
      class="about_text"
      >
      <div class="about_text_1">
        <h2>About Us</h2>
        <p class="text-white-75">Welcome to Cinebaz, Cinebaz is a Bengali Video streaming platform that let's you watch your favorite Bangla movies, songs, TV and Web Series anytime anywhere.</p>
        <h3>Company Information</h3>
        <h4 class="text-white-75 mt-5">Registered Name: CINEBAZ LIMITED<br>
            TIN: 286173945506
        </h4>
      </div>
        <div class="footer-bg">
            <footer-part></footer-part>
        </div>
    </v-container-fluid>
</template>

<style>
.about_text {
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 150px 0 100px;
}

.about_text h2 {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    line-height: 101px;
    margin-bottom: 50px;
    margin-top: 150px;
}

.about_text p {
    font-size: 20px;
    margin-left: 160px;
    margin-right: 160px;
}

.about_text h3 {
    font-size: 25px;
    font-weight: bold;
    margin-left: 160px;
}

.about_text h4 {
    font-size: 20px;
    margin-left: 160px;
}
.footer-bg{
    background-color: black;
  }
  body{
    background-color: black;
  }
  .v-main__wrap {
    background: black;
    color: white;
}

.about_text_1{
    margin-bottom: 100px;
    margin-top: 100px;
}
</style>
