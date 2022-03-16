<template>
  <v-container-fluid>
    <v-card
      flat
      tile
      class="footer-bg"
    > 
      <v-row>
         <v-col
         cols="12"
         class="ssl_part"
         >
            <v-img
              class="ssl_pic"
              src="img/payment.png"
              height="117px"
              width="990px"
            ></v-img>
         </v-col>
      </v-row>
      <v-row
       class="foot-r"
       >
           <v-col
              cols="4"
              class="dmca"
            >   
              <a href="https://www.dmca.com/Protection/Status.aspx?id=baf20d38-773e-432f-a0f2-f638ceffc5d1" target="_blank" >
                <v-img
                  class="dmca_pic"
                  src="img/dmca-badge-w100-2x1-02.png"
                  height="60px"
                  width="150px"
                  margin-left="130"
                  margin-bottom="15"
                ></v-img>
              </a>
              <div class="row">
                <v-col
                cols="4"
                class="facebook"
                >
                <a style="color:white;" href="https://www.facebook.com/cinebazofficial"  target="_blank">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                </a>
                </v-col>
                <v-col
                cols="4"
                >
                <a style="color:white;" href="https://www.linkedin.com/company/cinebaz-limited" target="_blank">
                 <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
                </v-col>
                <v-col
                cols="4"
                >
                <a style="color:white;" href="https://www.youtube.com/channel/UCZFb_j5arJlXeSy256-mNog/featured" target="_blank">
                 <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                </a>
                </v-col>
              </div>
            </v-col>
            <v-col
              cols="2"
              class="white--text pt-0"
            > 
                <ul>
                    <li class="white--text">
                      <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'terms-conditions' }"
                        >
                          Terms and Conditions
                        </router-link>
                    </li>
                    <li class="white--text">
                        <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'privacy-Policy' }"
                        >
                          Privacy Policy
                        </router-link>
                    </li>
                    <li class="white--text">
                        <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'legal-notices' }"
                        >
                          Legal Notice
                        </router-link>
                    </li>
                    <li class="white--text">
                        <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'return-refund' }"
                        >
                          Return & Refund Policy
                        </router-link>
                    </li>
                </ul>
            </v-col>
            <v-col
              cols="2"
              class="white--text pt-0"
            > 
                <ul>
                    <li class="white--text">
                        <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'about-us' }"
                        >
                          About Us
                        </router-link>
                    </li>
                    <li class="white--text">
                          <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'contact-us' }"
                        >
                          Contact Us
                        </router-link>
                    </li>
                    <li class="white--text">
                      <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'helpcenter' }"
                        >
                          Help Center
                        </router-link>
                    </li>
                    <li class="white--text">
                          <router-link
                          class="nav-link footer-link"
                          data-toggle="collapse"
                          :to="{ name: 'corporateinformation' }"
                        >
                          Corporate Information
                        </router-link>
                    </li>
                </ul>
            </v-col>
            <v-col
              cols="4"
              class=""
            >
                <v-row>
                  <v-col
                  cols="6">
                  <a href="https://play.google.com/store/apps/details?id=com.app.shaplamedia" target="_blank">
                    <v-img
                      class="img-apple"
                      src="img/Apple-App-Store-logo_2 .png"
                      height="89px"
                      width="200px"
                    ></v-img>
                  </a>
                  </v-col>
                  <v-col
                  cols="6">
                  <a href="https://play.google.com/store/apps/details?id=com.app.shaplamedia" target="_blank">
                    <v-img
                      src="img/Play_Store_Logo_2 .png"
                      height="89px"
                      width="200px"
                    ></v-img>
                  </a>
                  </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-container>
          <v-card-text class="lastext">
           <strong>Cinebaz-</strong>  {{ new Date().getFullYear() }}  <strong>All Rights Reserved</strong>
          </v-card-text>
        </v-container>
    </v-card>
  </v-container-fluid>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style>
   .v-footer .footer-bg .v-sheet{
     background-color:black;
   }
   .theme--light.v-card>.v-card__text {
    color: rgba(0,0,0,.6);
    background: black;
    }
    .foot-r{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    footer.v-footer.footer-bg.v-sheet.theme--light {
    background: black;
    }
    .indigo.lighten-1.white--text.text-center.v-card.v-card--flat.v-sheet.theme--light.rounded-0 {
    border: none;
}
  .footer-bg.v-card.v-card--flat.v-sheet.theme--light.rounded-0 {
    background-color: black;
    border: none;
}
.lastext{
  color: white;
  text-align: center;
  border-top: 1px solid gray;
}
.img-apple{
 margin-left:95px;
}

/* icon */
svg.svg-inline--fa.fa-linkedin-in.fa-w-14 {
    height: 28px;
}
svg.svg-inline--fa.fa-youtube.fa-w-18 {
  height: 28px;
  margin-left: -179px;
}
svg.svg-inline--fa.fa-facebook.fa-w-16 {
  height: 28px;
  margin-left: 175px;
}
.dmca{
  color: white;
}

.dmca_pic{
  margin-left: 159px ;
  margin-bottom: 15px !important;
}
.ssl_pic{

    height: 140px;
    width: auto;
    margin: auto;
}
.ssl_part {
    height: 200px;
    margin-top: 50px;
    background-color: #9d92923b;
    padding: 45px;
    margin-bottom: 48px;
}
.footer-link{
  color: white !important;
  line-height: 0.5;
}
</style>

