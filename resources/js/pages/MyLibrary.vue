<template>
  <v-app id="inspire">
    <v-row
     class="bgd"
    >
      <v-col
      cols="2">
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
            class="profile_img"
          >
        </v-avatar>
      </v-col>
      <v-col
      cols="10"
      class="user_part"
    
      >
        <h2>Ashiqur</h2>
        <p>ashiqurrahman012@gmail.com <br>01739578259</p>
      </v-col>
    </v-row>
      <v-container-fluid
        class="profile_main_part"
       >
        <v-row>
          <v-col cols="2">
            <v-card rounded="lg"
            dark
            >
              <v-list color="transparent">
                <v-list-item
                   
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Manage My Account
                    </v-list-item-title>
                    <div class="sub_title_profile">
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'myprofile' }"
                        >
                          My Profile
                        </router-link>
                      </v-toolbar-title>
                      <v-toolbar-title>
                        <router-link
                          class="nav-link profile-link"
                          data-toggle="collapse"
                          :to="{ name: 'mylibrary' }"
                        >
                          My Library
                        </router-link>
                      </v-toolbar-title>
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'mypayment' }"
                        >
                          My Payment Details
                        </router-link>
                      </v-toolbar-title>
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'myvouchers' }"
                        >
                          My Vouchers
                        </router-link>
                      </v-toolbar-title>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                   
                >
                  <v-list-item-content>
                    <v-list-item-title>
                     My Orders
                    </v-list-item-title>
                    <div class="sub_title_profile">
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'mypurchase' }"
                        >
                          My Purchase
                        </router-link>
                      </v-toolbar-title>
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'myreturns' }"
                        >
                          My Returns
                        </router-link>
                      </v-toolbar-title>
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'mycancellations' }"
                        >
                          My Cancellations
                        </router-link>
                      </v-toolbar-title>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                   
                 >
                  <v-list-item-content>
                    <v-list-item-title>
                     Settings
                    </v-list-item-title>
                    <div class="sub_title_profile">
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'editprofile' }"
                        >
                          Edit Profile
                        </router-link>
                      </v-toolbar-title>
                      <v-toolbar-title>
                        <router-link
                          class="nav-link"
                          data-toggle="collapse"
                          :to="{ name: 'changepassword' }"
                        >
                          Change Password
                        </router-link>
                      </v-toolbar-title>
                    </div>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Logout
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col
            cols="10"
            class="mb-7"
            
          >
            <v-row>
              <v-col
                cols="12"
              >
                <my-library></my-library>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container-fluid>
      <div class="footer-bg">
         <footer-part></footer-part>
      </div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>

<style>
  .bgd {
      background: black;
      color: white;
      height: 264px;
  }

  .v-avatar {
    height: 148px !important;
    min-width: 405px !important;
    width: 150px !important;
    margin-top: 62px;
}
.user_part{
  margin-top: 110px;
}
.user_part h2{
  font-size: 20px;
}

.sub_title_profile{
  margin-left: 20px;
}
.profile_main_part{
  background-color: black;
  color: white;
  padding: 0px 50px 0px 50px;
}
body{
  background-color: black;
}
.footer-bg{
    background-color: black;
  }


</style>