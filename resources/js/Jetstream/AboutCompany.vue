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
      <div class="px-20 bg-white grid grid-cols-1" v-show="showAboutCompany">
        <span class="mb-4">
          Компания "Белый Парус" предоставляет комплексное обслуживание в
          сегменте HoReCa и B2B. В нашем ассортименте: профессиональные моющие
          средства для всех типов поверхностей, хозяйственные товары, бумажная
          продукция, барная продукция, одноразовая пищевая упаковка и другое.
        </span>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
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
      <div v-show="showPartners && showAboutCompany" class="flex pl-20 mb-2.5">
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
              class="w-72 h-72 mr-4 mb-4 bg-gray-300"
              v-for="item in partners"
              :key="item.id"
            >
              <img :src="item.src" />
            </div>
          </div>
        </simplebar>
      </div>
    </transition>
    <transition name="fade">
      <div class="px-20 bg-white grid grid-cols-1" v-show="showAboutCompany">
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-10 items-center">
            <span class=""> Почему с нами ? </span>
          </div>
          <button
            v-on:click="showWhyWithUs = !showWhyWithUs"
            class="text-black"
          >
            <svg v-if="!showWhyWithUs" class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg v-if="showWhyWithUs" class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="showWhyWithUs && showAboutCompany" class="flex pl-20">
        <simplebar
          id="partners"
          class="pr-40 h-screen bg-white flex-auto"
          data-simplebar-auto-hide="false"
        >
          <div class="flex" v-for="item in whyWithUs" :key="item.id">
              <div v-if="item.isPictLeft" class="flex">
                <div class="clients flex-initial">
                  <span>{{ item.sidetext }}</span>
                </div>
                <div class="h-52 w-124 mr-4 mb-4 bg-black flex-1">
                  <span class="text-white">{{ item.text }}</span>
                </div>
                <div class="h-52 w-88 mr-4 mb-4 flex-1">
                  <img :src="item.img" />
                </div>
              </div>
              <div v-else class="flex">
                <div class="h-52 w-88 mr-4 mb-4 flex-1">
                  <img :src="item.img" />
                </div>
                <div class="h-52 w-124 mr-4 mb-4 bg-black flex-1">
                  <span class="text-white">{{ item.text }}</span>
                </div>
                <div class="clients flex-initial">
                  <span>{{ item.sidetext }}</span>
                </div>
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
      showWhyWithUs: false,
      partners: [
        {
          id: "1",
          name: "AgCosmetology",
          src: "images/partners/AG_Cosmetology.svg",
        },
        {
          id: "2",
          name: "BStarBurger",
          src: "images/partners/BstarBurger.svg",
        },
        {
          id: "3",
          name: "CoffeeWithWings",
          src: "images/partners/CoffeeTime.svg",
        },
        {
          id: "4",
          name: "Chelentano",
          src: "images/partners/Celentano.svg",
        },
        {
          id: "5",
          name: "HBNGroup",
          src: "images/partners/HBNFood.svg",
        },
        {
          id: "6",
          name: "Konfeterra",
          src: "images/partners/Konfeterra.svg",
        },
        {
          id: "7",
          name: "RaveBistro",
          src: "images/partners/RaveBistro.svg",
        },
        {
          id: "8",
          name: "Robusto",
          src: "images/partners/robusto.svg",
        },
        {
          id: "9",
          name: "Marchenkov",
          src: "images/partners/Marchenkov.svg",
        },
        {
          id: "10",
          name: "Galactic",
          src: "images/partners/Galactic.svg",
        },
        {
          id: "11",
          name: "DonMak",
          src: "images/partners/DonMak.svg",
        },
        {
          id: "12",
          name: "Luchiano",
          src: "images/partners/Luchiano.svg",
        },
        {
          id: "13",
          name: "MakiSu",
          src: "images/partners/MakiSu.svg",
        },
        {
          id: "14",
          name: "Onegin",
          src: "images/partners/Onegin.svg",
        },
      ],
      whyWithUs: [
        {
          id: "1",
          text:
            "16 лет занимаемся комплексным снабжением непродовольственными товарами в сегменте HoReCa",
          img: "images/whyWithUs/16years.png",
          sidetext: "practice",
          isPictLeft: true,
        },
        {
          id: "2",
          text: "Более 500 довольных клиентов каждый месяц",
          img: "images/whyWithUs/500HappyClients.png",
          sidetext: "service",
          isPictLeft: false,
        },
        {
          id: "3",
          text: "Оптимальные цены",
          img: "images/whyWithUs/optimalPrices.png",
          sidetext: "price",
          isPictLeft: true,
        },
        {
          id: "4",
          text: "Доставка в течение 24х часов",
          img: "images/whyWithUs/deliver24h.png",
          sidetext: "delivery",
          isPictLeft: false,
        },
        {
          id: "5",
          text: "Гибкая система лояльности",
          img: "images/whyWithUs/loyalty.png",
          sidetext: "что-то",
          isPictLeft: true,
        },
        {
          id: "6",
          text:
            "Качественная продукция — наша основная цель удовлетворение конечного потребителя",
          img: "images/whyWithUs/qualityproducts.png",
          sidetext: "что-то",
          isPictLeft: false,
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
