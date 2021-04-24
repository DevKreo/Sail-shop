<template>
  <div>
    <div
      class="rounded-full py-3 px-6 bg-black flex items-center justify-between mb-2"
    >
      <div class="text-white inline-flex space-x-10 items-center">
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
          />
        </svg>
        <span class="font-mono font-extrabold text-xl tracking-widest"> ТОП ПОЗИЦИЙ </span>
      </div>
      <button
        v-on:click="showTopPosition = !showTopPosition"
        class="text-white"
      >
        <svg v-if="!showTopPosition" class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
          />
        </svg>
        <svg v-if="showTopPosition" class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div class="px-20 bg-white grid grid-cols-1" v-if="showTopPosition">
        <transition name="fade">
          <div v-if="showTopPosition" class="flex mb-2.5">
            <div class="clients flex-initial mb-4 mr-4">
              <span>featured</span>
            </div>
            <simplebar
              class="pr-40 max-h-screen bg-white flex-auto"
              data-simplebar-auto-hide="false"
            >
              <div class="grid grid-cols-4 gap-4">
                <div
                  class="flex flex-col mr-5 h-64 w-64 hover:opacity-50 relative"
                  @mouseover="IsHover = true"
                  @mouseleave="IsHover = false"
                  style="background-image: url(images/coffe.png)"
                >
                  <p v-if="IsHover" class="ml-4">Держатели для двух стаканов</p>
                  <h1
                    v-if="IsHover"
                    class="text-2xl font-bold text-blacks pb-2.5 ml-4"
                  >
                    Eco cupholder
                  </h1>
                  <!-- TODO:Icon to button-->
                  <button
                    v-show="IsHover"
                    class="rounded-full h-16 w-16 opacity-100 bg-black absolute bottom-0 right-0"
                    
                  ></button>
                  <!-- <img src="images/coffe.png" class="self-center hover:opacity-50" /> -->
                </div>
                  
              </div>
            </simplebar>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import JetApplicationLogo from "@/Jetstream/ApplicationLogo";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import Button from "./Button.vue";

export default {
  components: {
    JetApplicationLogo,
    simplebar,
    Button,
  },
  data() {
    return {
      showTopPosition: false,
      IsHover: false,
    };
  },
};
</script>

<style>
[type="checkbox"]:checked {
  background-image: url("/images/circle-medium.png");
}

.simplebar-track.simplebar-vertical {
  background-color: #bbd54c;
  width: 5px;
  margin-right: 5rem;
  border-radius: 3px;
  margin-bottom: 16px;
  opacity: 1;
  overflow: visible;
  visibility: visible;
}

.simplebar-scrollbar.simplebar-visible::before {
  opacity: 1;
  top: 0 !important;
  bottom: 0 !important;
  left: -2px;
  right: 0;
}

.simplebar-scrollbar:before {
  background-color: #000000;
  width: 9px;
}

.clients {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 20px;
}
.card:hover {
  opacity: 0.5;
}
</style>
