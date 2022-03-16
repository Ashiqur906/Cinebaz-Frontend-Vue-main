<template>
    <div class="z-[60] bg-black bg-opacity-60" @click.self="dialog = false">
      <div class="info-container">
        <div>
          <div class="relative w-full h-[30rem]">
            <img
              src="https://mgr2.cinebaz.com/storage/dropzon/2021-10/full/cokh-banner-1672x940_1634723454.jpg"
              alt="info banner"
              class="w-full h-full object-cover"
            />


            <div class="info__overlay">
              <h1 class="text-2xl font-netflix_medium mb-6 text-white">
                Chokh
              </h1>

              <div class="flex items-center space-x-2">
                <v-btn class="ma-2 bg-white text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    class="text-lg"
                    data-v-5ea30357=""
                  >
                    <path
                      d="M239.969 128a15.9 15.9 0 0 1-7.656 13.656l-143.97 87.985A15.998 15.998 0 0 1 64 215.992V40.008a15.998 15.998 0 0 1 24.344-13.649l143.969 87.985A15.9 15.9 0 0 1 239.969 128z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p class="details-play">Play</p>
                </v-btn>
                <v-btn
                  class="ma-2 items-center justify-center cinebaz-fvrt"
                  outlined
                  fab
                  color="secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    class="text-lg"
                    data-v-5ea30357=""
                  >
                    <path
                      d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </v-btn>
                <v-btn
                  class="ma-2 items-center justify-center cinebaz-fvrt"
                  outlined
                  fab
                  color="secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 20 20"
                    class="text-lg"
                    data-v-5ea30357=""
                  >
                    <g fill="none">
                      <path
                        d="M10.052 2.294c.34-.977 1.632-1.427 2.43-.59c.164.17.326.354.436.519c.32.48.455 1.113.504 1.73c.05.627.016 1.301-.048 1.912c-.065.612-.161 1.174-.241 1.583l-.01.052h.883a3 3 0 0 1 2.952 3.537l-.684 3.761a4.5 4.5 0 0 1-5.612 3.537l-5.6-1.527a2.5 2.5 0 0 1-1.793-1.922l-.353-1.765c-.278-1.389.784-2.559 1.913-3.005a2.84 2.84 0 0 0 .84-.49c1.707-1.514 2.325-2.723 3.385-4.85c.354-.71.718-1.676.998-2.482zm1.965 5.585v-.002l.002-.007l.007-.031a13.699 13.699 0 0 0 .126-.584c.076-.388.167-.92.227-1.495c.061-.577.09-1.184.046-1.728c-.044-.556-.16-.985-.34-1.255a3.258 3.258 0 0 0-.326-.383c-.199-.208-.628-.16-.762.228c-.283.814-.664 1.83-1.048 2.6c-1.067 2.141-1.756 3.502-3.616 5.152c-.34.302-.744.517-1.136.672c-.88.348-1.447 1.148-1.3 1.879l.352 1.765a1.5 1.5 0 0 0 1.077 1.153l5.6 1.527a3.5 3.5 0 0 0 4.364-2.75l.684-3.762A2 2 0 0 0 14.006 8.5h-1.505a.5.5 0 0 1-.484-.621z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </v-btn>
                <v-btn
                  class="ma-2 items-center justify-center cinebaz-fvrt"
                  outlined
                  fab
                  color="secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1.2em"
                    height="1.2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    class="text-lg"
                    data-v-5ea30357=""
                  >
                    <g fill="none">
                      <path
                        d="M16.5 17.985c0 2.442-1.14 4.198-3.007 4.198c-.975 0-1.341-.542-1.69-1.795l-.207-.772c-.101-.359-.277-.97-.527-1.831a.249.249 0 0 0-.03-.065l-2.866-4.486a5.886 5.886 0 0 0-2.855-2.327l-.473-.18A2.75 2.75 0 0 1 3.13 7.634l.404-2.087A3.25 3.25 0 0 1 5.95 3.011l7.628-1.87a4.75 4.75 0 0 1 5.733 3.44l1.415 5.55a3.25 3.25 0 0 1-3.15 4.052h-1.822c.496 1.633.746 2.893.746 3.802zM4.6 7.92a1.25 1.25 0 0 0 .78 1.405l.474.182a7.385 7.385 0 0 1 3.582 2.92l2.867 4.485c.09.14.159.294.205.454l.552 1.92l.212.792c.14.488.21.605.22.605c.868 0 1.507-.984 1.507-2.698c0-.885-.326-2.336-.984-4.315a.75.75 0 0 1 .711-.987h2.85a1.751 1.751 0 0 0 1.696-2.182l-1.415-5.55a3.25 3.25 0 0 0-3.923-2.353l-7.628 1.87a1.75 1.75 0 0 0-1.301 1.366L4.6 7.92z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </v-btn>
              </div>
            </div>
          </div>

          <div class="space-y-8 my-3 details-descrip">
            <div class="md:space-x-8 flex flex-col md:flex-row space-y-4">
              <div class="flex-1 flex-grow-[2] space-y-4">
                <p class="text-base text-gray-300">
                  It's always someone you know.
                </p>

                <div class="flex items-center space-x-2">
                  <p class="text-white">2022-01-12</p>

                  <p class="border border-gray-500 px-2 text-white">18+</p>
                </div>

                <p class="text-base text-white">
                  Twenty-five years after a streak of brutal murders shocked the
                  quiet town of Woodsboro, a new killer has donned the Ghostface
                  mask and begins targeting a group of teenagers to resurrect
                  secrets from the town’s deadly past.
                </p>
              </div>

              <div class="mt-4 md:mt-0 flex-1 space-y-2 text-sm">
                <div class="space-x-2">
                  <span class="text-gray-400">Genres:</span>
                  <span class="text-white"> Horror, Mystery, Thriller </span>
                </div>

                <div class="space-x-2">
                  <span class="text-gray-400">Companies:</span>
                  <span class="text-white">
                    Radio Silence, Project X Entertainment, Spyglass Media
                    Group, Paramount, Lantern Entertainment, Outerbanks
                    Entertainment
                  </span>
                </div>

                <div class="space-x-2">
                  <span class="text-gray-400">Countries:</span>
                  <span class="text-white"> United States of America </span>
                </div>
              </div>
            </div>

            <h1 class="text-2xl font-netflix_medium"></h1>
              

          </div>
        </div>
      </div>
      <example-component></example-component>
      <footer-part></footer-part>
    </div>
    <!-- ENd -->
</template>