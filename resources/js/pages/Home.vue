<template>
  <v-carousel
    :continuous="true"
    :cycle="cycle"
    :show-arrows="false"
    :hide-delimiter-background="false"
    delimiter-icon="mdi-minus"
    height="92vh"
  >
    <v-carousel-item>
      <div class="banner-container relative w-full h-full">
        <div class="min-w-full min-h-full">
          <img
            src="https://mgr2.cinebaz.com/storage/dropzon/2021-10/full/cokh-banner-1672x940_1634723454.jpg"
            alt="banner"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="banner__overlay absolute inset-0 flex items-center px-12">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInUp"
            leave-active-class="animate__animated animate__slideInDown"
            mode="out-in"
          >
            <div class="w-[40%] space-y-6">
              <h1 class="text-3xl font-bold line-clamp-2 text-white">Chokh</h1>

              <p class="text-lg line-clamp-4 font-medium text-white">
                Chokh (eye) is a thriller-horror love story where a young guy
                lost his eyes in a car accident. When he got his eyes replaced
                by surgery he started to experience explainable supernatural
                activities.
              </p>

              <div class="flex items-center space-x-2">
                <v-btn class="ma-2 bg-white text-black" dark>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M239.969 128a15.9 15.9 0 0 1-7.656 13.656l-143.97 87.985A15.998 15.998 0 0 1 64 215.992V40.008a15.998 15.998 0 0 1 24.344-13.649l143.969 87.985A15.9 15.9 0 0 1 239.969 128z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Play
                </v-btn>
                <details-modal></details-modal>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item>
      <div class="banner-container relative w-full h-full">
        <div class="min-w-full min-h-full">
          <img
            src="https://mgr2.cinebaz.com/storage/dropzon/2021-11/full/banner1_1635748460.jpg"
            alt="banner"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="banner__overlay absolute inset-0 flex items-center px-12">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInUp"
            leave-active-class="animate__animated animate__slideInDown"
            mode="out-in"
          >
            <div class="w-[40%] space-y-6">
              <h1 class="text-3xl font-bold line-clamp-2 text-white">Chokh</h1>

              <p class="text-lg line-clamp-4 font-medium text-white">
                Chokh (eye) is a thriller-horror love story where a young guy
                lost his eyes in a car accident. When he got his eyes replaced
                by surgery he started to experience explainable supernatural
                activities.
              </p>

              <div class="flex items-center space-x-2">
                <v-btn class="ma-2 bg-white text-black" dark>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M239.969 128a15.9 15.9 0 0 1-7.656 13.656l-143.97 87.985A15.998 15.998 0 0 1 64 215.992V40.008a15.998 15.998 0 0 1 24.344-13.649l143.969 87.985A15.9 15.9 0 0 1 239.969 128z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Play
                </v-btn>
                <details-modal></details-modal>
              </div>
            </div>
          </transition>
        </div>

        <div class="banner__overlay--down absolute bottom-0 h-32 w-full"></div>
      </div>
    </v-carousel-item>

    <v-carousel-item>
      <div class="banner-container relative w-full h-full">
        <div class="min-w-full min-h-full">
          <img
            src="https://mgr2.cinebaz.com/storage/dropzon/2021-11/full/banner3_1635746220.jpg"
            alt="banner"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="banner__overlay absolute inset-0 flex items-center px-12">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInUp"
            leave-active-class="animate__animated animate__slideInDown"
            mode="out-in"
          >
            <div class="w-[40%] space-y-6">
              <h1 class="text-3xl font-bold line-clamp-2 text-white">Chokh</h1>

              <p class="text-lg line-clamp-4 font-medium text-white">
                Chokh (eye) is a thriller-horror love story where a young guy
                lost his eyes in a car accident. When he got his eyes replaced
                by surgery he started to experience explainable supernatural
                activities.
              </p>

              <div class="flex items-center space-x-2">
                <v-btn class="ma-2 bg-white text-black" dark>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M239.969 128a15.9 15.9 0 0 1-7.656 13.656l-143.97 87.985A15.998 15.998 0 0 1 64 215.992V40.008a15.998 15.998 0 0 1 24.344-13.649l143.969 87.985A15.9 15.9 0 0 1 239.969 128z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Play
                </v-btn>
                <details-modal></details-modal>
              </div>
            </div>
          </transition>
        </div>

        <div class="banner__overlay--down absolute bottom-0 h-32 w-full"></div>
      </div>
    </v-carousel-item>

    <v-carousel-item>
      <div class="banner-container relative w-full h-full">
        <div class="min-w-full min-h-full">
          <img
            src="https://mgr2.cinebaz.com/storage/dropzon/2022-01/full/mafiya-1_1642489995.jpg"
            alt="banner"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="banner__overlay absolute inset-0 flex items-center px-12">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInUp"
            leave-active-class="animate__animated animate__slideInDown"
            mode="out-in"
          >
            <div class="w-[40%] space-y-6">
              <h1 class="text-3xl font-bold line-clamp-2 text-white">Chokh</h1>

              <p class="text-lg line-clamp-4 font-medium text-white">
                Chokh (eye) is a thriller-horror love story where a young guy
                lost his eyes in a car accident. When he got his eyes replaced
                by surgery he started to experience explainable supernatural
                activities.
              </p>

              <div class="flex items-center space-x-2">
                <v-btn class="ma-2 bg-white text-black" dark>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M239.969 128a15.9 15.9 0 0 1-7.656 13.656l-143.97 87.985A15.998 15.998 0 0 1 64 215.992V40.008a15.998 15.998 0 0 1 24.344-13.649l143.969 87.985A15.9 15.9 0 0 1 239.969 128z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Play
                </v-btn>
                <details-modal></details-modal>
              </div>
            </div>
          </transition>
        </div>

        <div class="banner__overlay--down absolute bottom-0 h-32 w-full"></div>
      </div>
    </v-carousel-item>
  </v-carousel>
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

.banner__overlay--down {
  background-image: linear-gradient(
    to bottom,
    transparent 10%,
    rgba(var(--background-color-rgb), 0.8),
    rgba(var(--background-color-rgb), 1)
  );
}
.banner__overlay {
  background-image: linear-gradient(
    77deg,
    rgba(0, 0, 0, 0.6) 25%,
    transparent 85%
  );
}
.v-btn__content svg {
  margin-right: 10px;
}
.v-btn__content {
  font-weight: 700;
}
body{
  margin-top: -65px;
}
.v-dialog.v-dialog--active {
    margin-top: 143px;
}
</style>