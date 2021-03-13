<template>
  <div>
    <div
      class="rounded-full py-3 px-6 bg-black flex items-center justify-between mb-2"
    >
      <div class="text-white inline-flex space-x-10 items-center">
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z"
          />
        </svg>
        <span class=""> О КОМПАНИИ </span>
      </div>
      <button
        v-on:click="showAboutCompany = !showAboutCompany"
        class="text-white"
      >
        <svg v-if="!showAboutCompany" class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
          />
        </svg>
        <svg v-if="showAboutCompany" class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div
        class="px-20 bg-white grid grid-cols-1 divide-y-2 divide-black"
        v-show="showAboutCompany"
      >
        <span class="mb-4">
          Компания "Белый Парус" предоставляет комплексное обслуживание в
          сегменте HoReCa и B2B. В нашем ассортименте: профессиональные моющие
          средства для всех типов поверхностей, хозяйственные товары, бумажная
          продукция, барная продукция, одноразовая пищевая упаковка и другое.
        </span>
        <div class="py-3 bg-white flex items-center justify-between">
          <div class="text-black inline-flex space-x-10 items-center">
            <span class=""> С нами сотрудничают лучшие </span>
          </div>
          <button v-on:click="showPartners = !showPartners" class="text-black">
            <svg v-if="!showPartners" class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg v-if="showPartners" class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="showPartners && showAboutCompany" class="flex pl-20">
        <div class="clients flex-initial">
          <span>clients</span>
        </div>
        <simplebar
          id="partners"
          class="pr-40 h-screen bg-white flex-auto"
          data-simplebar-auto-hide="false"
        >
          <div class="flex flex-wrap justify-center">
            <div
              class="w-72 h-72 mr-4 mb-4"
              v-for="item in partners"
              :key="item.id"
            >
              <img :src="item.src" />
            </div>
          </div>
        </simplebar>
      </div>
    </transition>
  </div>
</template>

<script>
import JetApplicationLogo from "@/Jetstream/ApplicationLogo";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  components: {
    JetApplicationLogo,
    simplebar,
  },
  data() {
    return {
      showAboutCompany: false,
      showPartners: false,
      partners: [
        {
          id: "1",
          name: "RaveBistro",
          src: "images/partners/RaveBistro.png",
        },
        {
          id: "2",
          name: "BStarBurger",
          src: "images/partners/B.Burger.png",
        },
        {
          id: "3",
          name: "DonMak",
          src: "images/partners/Mac.png",
        },
        {
          id: "4",
          name: "Robusto",
          src: "images/partners/Robusto.png",
        },
        {
          id: "5",
          name: "STM",
          src: "images/partners/STM.png",
        },
        {
          id: "6",
          name: "Doner",
          src: "images/partners/Doner.png",
        },
        {
          id: "7",
          name: "Diner",
          src: "images/partners/Diner.png",
        },
        {
          id: "8",
          name: "Balcon",
          src: "images/partners/Balcon.png",
        },
        {
          id: "9",
          name: "BeerKing",
          src: "images/partners/BeerKing.png",
        },
        {
          id: "10",
          name: "Cocos",
          src: "images/partners/Cocos.png",
        },
        {
          id: "11",
          name: "Chelentano",
          src: "images/partners/Chelentano.png",
        },
        {
          id: "12",
          name: "Konfeterra",
          src: "images/partners/Konfeterra.png",
        },
        {
          id: "13",
          name: "LaCoffee",
          src: "images/partners/LaCoffee.png",
        },
        {
          id: "14",
          name: "Galactic",
          src: "images/partners/Galactic.png",
        },
        {
          id: "15",
          name: "Kakdoma.png",
          src: "images/partners/Kakdoma.png",
        },
        {
          id: "16",
          name: "CoffeWithWinds",
          src: "images/partners/CoffeWithWinds.png",
        },
      ],
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.simplebar-track.simplebar-vertical {
  background-color: #ff8080;
  width: 5px;
  margin-right: 5rem;
  border-radius: 3px;
  margin-bottom: 16px;
  opacity: 1;
  overflow: visible;
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
  padding: 10px;
  transform: rotate(180deg);
  margin-bottom: 16px;
  font-size: 20px;
}
</style>
