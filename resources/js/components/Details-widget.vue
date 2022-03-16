<template>
  <v-container
   class="bg-card-first"
  >
      <v-row class="box">
        <v-col
          cols="2"
          class="frist_part"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="img/buker-dakbaksho.jpg"
              height="auto"
            ></v-img>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col
          cols="2"
          class="frist_part"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="img/buker-dakbaksho.jpg"
            height="auto"
            ></v-img>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col
          cols="2"
          class="frist_part"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="img/buker-dakbaksho.jpg"
            height="auto"
            ></v-img>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col
          cols="2"
          class="frist_part"
        >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="img/buker-dakbaksho.jpg"
            height="auto"
            ></v-img>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<style>

.mx-auto.v-card.v-sheet.theme--light {
    border: none;
}
.bg-card-first{
  margin-left: 20px;
}
.frist_part:hover {
    transform: scale(1.3);
    z-index: 999;
    transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    /* display: flex; */
    margin-top: -80px;
}

.frist_part.col.col-2 {
    padding: 5px;
    margin-top: 10px;
}

.vtitle-bar-1 h2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.box {
    width: 1800px;
    height: 200px;
    margin: 0px 10px 0px 10px;
    margin-bottom: 100px;
}

.frist_part:hover .v-card__title {
    display: block !important;
    z-index: 999;
    
}

.frist_part:hover .v-card__subtitle {
    display: block !important;
    z-index: 999;
    
}

.frist_part:hover .v-card__actions {
    display: block !important;
    z-index: 999;
   
}

.v-card__subtitle {
    display: none !important;
}

.v-card__actions {
    display: none !important;
}

.v-card__title {
    display: none !important;
}
</style>