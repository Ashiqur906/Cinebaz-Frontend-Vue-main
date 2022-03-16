<template>
<v-app id="inspire">
        <v-row>
              <v-app-bar app>
                <div class="col-lg-3">
                  <v-img
                  class="logo_img"
                    lazy-src="img/logo.png"
                    max-height="150"
                    max-width="180"
                    src="img/logo.png"
                  ></v-img>
                </div>
                  <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'home' }">
                            HOME
                        </router-link>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <v-menu
                            open-on-hover
                            bottom
                            offset-y
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                v-bind="attrs"
                                v-on="on"
                                >
                                 Web Series
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <v-menu
                            open-on-hover
                            bottom
                            offset-y
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                v-bind="attrs"
                                v-on="on"
                                >
                                MOVIES
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <v-menu
                            open-on-hover
                            bottom
                            offset-y
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                v-bind="attrs"
                                v-on="on"
                                >
                                 GENRE
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'about' }">
                            About
                        </router-link>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'blog' }">
                            Blog
                        </router-link>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'profile' }">
                            Profile
                        </router-link>
                    </v-toolbar-title>
                     <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'details' }">
                            Details
                        </router-link>
                    </v-toolbar-title>
                <div class="col-lg-3 last_part">
                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg></div>
                    <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'blog' }">
                            Login
                        </router-link>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <router-link class="nav-link menu-part" data-toggle="collapse" :to="{ name: 'profile' }">
                            Register
                        </router-link>
                    </v-toolbar-title>
                      <v-toolbar-title>
                        <v-menu
                            open-on-hover
                            bottom
                            offset-y
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                v-bind="attrs"
                                v-on="on"
                                >
                                 Language
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                v-for="(item2, index) in item2"
                                :key="index"
                                >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                    </v-toolbar-title>

                </div>
              </v-app-bar>
        </v-row>

    <!-- <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
          <v-list-item-content>
            <v-list-item-title>
                <router-link
                class="nav-link menu-part"
                data-toggle="collapse"
                :to="{ name: 'home' }"
                >
                Home
                </router-link>
            </v-list-item-title>
            <v-list-item-title>
                <router-link
                class="nav-link menu-part"
                data-toggle="collapse"
                :to="{ name: 'about' }"
                >
                About
                </router-link>
            </v-list-item-title>
            <v-list-item-title>
                <router-link
                class="nav-link menu-part"
                data-toggle="collapse"
                :to="{ name: 'blog' }"
                >
                Blog
                </router-link>
            </v-list-item-title>
            <v-toolbar-title>
              <router-link
                class="nav-link menu-part"
                data-toggle="collapse"
                :to="{ name: 'profile' }"
              >
                Profile
              </router-link>
            </v-toolbar-title>
          </v-list-item-content>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="grey lighten-2">
        <template>
            <router-view></router-view>
        </template>
    </v-main>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      items2: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>

<style>
.menu-part {
    color: #ffffff !important;
    font-size: 20px;
    padding: 10px;


}
.last_part{
    display: -webkit-inline-box;
    margin-left: 183px;
}
header.v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed {
    background: #00000052;
    z-index: 999;
}

.v-btn:not(.v-btn--round).v-size--default {
    
    background: transparent !important;
    color: white;
}
.logo_img{
    margin-left: 88px;
}
</style>
