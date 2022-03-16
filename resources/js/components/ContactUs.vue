<template>
    <v-container-fluid class="contact_us_text">
        <h2>Contact Us</h2>
        <div class="row contact-first-part">
            <div class="col-lg-6 heder-part">
                 <h3>Corporate Office</h3>
                <v-row>
                    <v-col 
                      cols="12"
                      >
                        <v-row>
                            <v-col
                                cols="2"
                            >
                            
                            <a style="color:white;" href="https://www.youtube.com/channel/UCZFb_j5arJlXeSy256-mNog/featured" target="_blank">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                            </a>
                            </v-col>
                            <v-col
                             cols="10"
                             >
                             <p>Address:</p>
                             <span>Address: 80/5 VIP Rd, Dhaka 1000</span>

                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col 
                      cols="12"
                      >
                        <v-row>
                            <v-col
                             cols="2"
                             color="white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>                                </v-col>
                            <v-col
                            cols="10"
                            >
                            <p>Phone:</p>
                            <span>+88 01958095007</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col 
                      cols="12"
                      >
                        <v-row>
                            <v-col
                                cols="2"
                                color="white"
                             >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
            </div>
            <div class="col-lg-6 heder-part">
                <h3>Get in touch with us</h3>
                <v-card
                 class="contact_user"
                 dark
                 >
                 <v-row>
                    <v-col
                     cols="6"
                     >
                        <v-text-field label="Name" :rules="rules" hide-details="auto"></v-text-field>
                        <v-text-field label="Email"></v-text-field>
                    </v-col>
                    <v-col
                     cols="6"
                     >
                        <v-text-field label="Name" :rules="rules" hide-details="auto"></v-text-field>
                        <v-text-field label="Phone Number"></v-text-field>
                    </v-col>
                 </v-row>
                    <v-text-field label="Subject" :rules="rules" hide-details="auto"></v-text-field><br>
                    <v-textarea
                        solo
                        name="input-7-4"
                        label="Message"
                        hide-details="auto"
                        :rules="rules"
                        >
                    </v-textarea>
                    <v-btn
                        class="mr-4 button"
                        @click="submit"
                        >
                        Send Message
                    </v-btn>
                </v-card>
            </div>
        </div>
        <div class=" contact_us_map">
            <iframe id="ifrm" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14609.131739736918!2d90.4076468!3d23.7372879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4be9e304803d052a!2sCinebaz%20Limited!5e0!3m2!1sen!2sbd!4v1631897501459!5m2!1sen!2sbd" width="1500" height="500"></iframe>
        </div>
        <div class="footer-bg">
            <footer-part></footer-part>
        </div>
    </v-container-fluid>
</template>

<style>
.contact_us_text{
    margin-left: 100px;
    margin-right: 100px;
}
.contact_us_text h2 {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    line-height: 101px;
    margin-bottom: 25px;
    margin-top: 150px;

}
.contact_us_text h3 {
    font-size: 25px;
    font-weight: bold;
    margin-left: 160px;
}

.contact_us_text h4 {
    font-size: 20px;
    margin-left: 160px;
}
.start-live p{
    font-size: 20px;
    font-weight: bold;
    margin-left: 180px;
    border: 1px solid white;
    padding: 10px;
    margin-right: 76px;
    
}
.contact_user {
    background-color: rgba(97, 96, 96, 0.829);
    padding: 20px;
}
.contact-first-part{
    padding: 100px;

    
}
.heder-part h3{
    margin-bottom: 50px;
    margin-left: 310px;
}
.button{
    margin-left: 323px;
    margin-top: 20px;
}
.contact_us_map{
    padding :100px 200px 100px 200px;
}
</style>