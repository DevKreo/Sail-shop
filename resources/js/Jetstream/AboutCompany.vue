<template>
<div>
    <div class="rounded-full py-3 px-4 sm:px-6 flex items-center justify-between mb-2" :class="[showAboutCompany ?  'background-light' : 'background-dark']">
        <div class="inline-flex space-x-1 sm:space-x-10 items-center" :class="[showAboutCompany ?  'text-black' : 'text-white']">
            <svg class="w-7 h-7 transform rotate-180 pl-2 sm:pl-0" viewBox="0 0 24 24">
                <path fill="currentColor" d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z" />
            </svg>
            <span class="font-mono font-extrabold text-sm sm:text-xl tracking-widest"> О КОМПАНИИ </span>
        </div>
        <button v-on:click="showAboutCompany = !showAboutCompany" :class="[showAboutCompany ?  'text-black' : 'text-white']">
            <svg v-if="!showAboutCompany" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showAboutCompany" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div class="px-2 sm:px-20 bg-white grid grid-cols-1" v-show="showAboutCompany">
            <span class="mb-2 sm:mb-4 p-4 font-mono font-bold leading-5 sm:leading-8 text-sm sm:text-base text-justify">
                Компания "Белый Парус" предоставляет комплексное
                обслуживание в сегменте HoReCa и B2B. В нашем ассортименте:
                профессиональные моющие средства для всех типов
                поверхностей, хозяйственные товары, бумажная продукция,
                барная продукция, одноразовая пищевая упаковка и другое.
            </span>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="pl-4 text-black inline-flex space-x-10 items-center">
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> С НАМИ СОТРУДНИЧАЮТ ЛУЧШИЕ </span>
                </div>
                <button v-on:click="showPartners = !showPartners" class="text-black">
                    <svg v-if="!showPartners" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showPartners" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
        </div>
    </transition>

    <transition name="fade">
        <div v-show="showPartners && showAboutCompany" class="flex pl-3 pr-3 sm:pl-20 mb-2.5">
            <div class="clients flex-initial mb-4">
                <span class="font-mono font-regular text-sm sm:text-lg tracking-wider">клиенты</span>
            </div>
            <simplebar id="partners" class="sm:pr-40 h-screen bg-white flex-auto" data-simplebar-auto-hide="false">
                <div class="flex flex-wrap justify-center">
                    <div class="w-72 h-auto mr-4 mb-4 bg-gray-300 hover:bg-red-450" v-for="item in partners" :key="item.id">
                        <img :src="item.src" />
                    </div>
                </div>
            </simplebar>
        </div>
    </transition>
    <transition name="fade">
        <div class="px-2 sm:px-20 bg-white grid grid-cols-1" v-show="showAboutCompany">
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="pl-4 text-black inline-flex space-x-10 items-center">
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> ПОЧЕМУ С НАМИ ? </span>
                </div>
                <button v-on:click="showWhyWithUs = !showWhyWithUs" class="text-black">
                    <svg v-if="!showWhyWithUs" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showWhyWithUs" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
        </div>
    </transition>
    <transition name="fade">
        <div v-show="showWhyWithUs && showAboutCompany" class="flex sm:pl-20 mb-2.5">
            <simplebar id="partners" class="sm:pr-40 h-screen bg-white flex-auto" data-simplebar-auto-hide="false">
                <div class="flex" v-for="item in whyWithUs" :key="item.id">
                    <div v-if="item.isPictLeft" class="grid grid-cols-5 gap-2 mb-2 ">
                        <div class="clients">
                            <span class="font-mono font-regular text-sm sm:text-base md:text-lg tracking-wider ">{{ item.sidetext }}</span>
                        </div>
                        <div class="bg-black hover:bg-red-400 col-span-2 py-2 sm:py-3 px-1 sm:px-3 md:px-2 lg:px-3 2xl:px-0">
                            <span class="font-mono font-bold text-white p-0 2xl:p-5 whitespace-normal sm:whitespace-pre-line 2xl:whitespace-pre break-words lg:break-normal text-xs sm:text-base">{{ item.text }}</span>
                        </div>
                        <div class="sm:flex-shrink-0">
                            <img class="w-full object-cover h-full" :src="item.img" />
                        </div>
                    </div>
                    <div v-else class="grid grid-cols-5 gap-2 mb-2">
                        <div class="col-start-2 sm:flex-shrink-0">
                            <img class="w-full object-cover h-full" :src="item.img" />
                        </div>
                        <div class="bg-black hover:bg-red-400 col-start-3 col-end-5 py-2 sm:py-3 px-1 sm:px-3 md:px-2 lg:px-3 2xl:px-0">
                            <span class="font-mono font-bold text-white p-0 2xl:p-5 whitespace-normal sm:whitespace-pre-line 2xl:whitespace-pre break-words lg:break-normal text-xs sm:text-base">{{ item.text }}</span>
                        </div>
                        <div class="clients col-start-5 justify-self-start">
                            <span class="font-mono font-regular tracking-wider text-sm sm:text-base md:text-lg">{{ item.sidetext }}</span>
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
        simplebar
    },
    data() {
        return {
            showAboutCompany: true,
            showPartners: false,
            showWhyWithUs: false,
            partners: [{
                    id: "1",
                    name: "AgCosmetology",
                    src: "images/partners/AG_Cosmetology.svg"
                },
                {
                    id: "2",
                    name: "BStarBurger",
                    src: "images/partners/BstarBurger.svg"
                },
                {
                    id: "3",
                    name: "CoffeeWithWings",
                    src: "images/partners/Beerhouse.svg"
                },
                {
                    id: "4",
                    name: "Chelentano",
                    src: "images/partners/Celentano.svg"
                },
                {
                    id: "5",
                    name: "HBNGroup",
                    src: "images/partners/HBNFood.svg"
                },
                {
                    id: "6",
                    name: "Konfeterra",
                    src: "images/partners/Konfeterra.svg"
                },
                {
                    id: "7",
                    name: "RaveBistro",
                    src: "images/partners/RaveBistro.svg"
                },
                {
                    id: "8",
                    name: "Robusto",
                    src: "images/partners/robusto.svg"
                },
                {
                    id: "9",
                    name: "Marchenkov",
                    src: "images/partners/Marchenkov.svg"
                },
                {
                    id: "10",
                    name: "Galactic",
                    src: "images/partners/Galactic.svg"
                },
                {
                    id: "11",
                    name: "DonMak",
                    src: "images/partners/DonMak.svg"
                },
                {
                    id: "12",
                    name: "Luchiano",
                    src: "images/partners/Luchiano.svg"
                },
                {
                    id: "13",
                    name: "MakiSu",
                    src: "images/partners/MakiSu.svg"
                },
                {
                    id: "14",
                    name: "Onegin",
                    src: "images/partners/Onegin.svg"
                },
                {
                    id: "15",
                    name: "StreetDogs",
                    src: "images/partners/StreetDogs.svg"
                },
            ],
            whyWithUs: [{
                    id: "1",
                    text: "16 лет \n  занимаемся комплексным снабжением \n  непродовольственными товарами \n  в сегменте HoReCa",
                    img: "images/whyWithUs/16years.png",
                    sidetext: "практика",
                    isPictLeft: true
                },
                {
                    id: "2",
                    text: "Более 500 довольных клиентов \n  каждый месяц",
                    img: "images/whyWithUs/500HappyClients.png",
                    sidetext: "обслуживание",
                    isPictLeft: false
                },
                {
                    id: "3",
                    text: "Оптимальные цены",
                    img: "images/whyWithUs/optimalPrices.png",
                    sidetext: "экономия",
                    isPictLeft: true
                },
                {
                    id: "4",
                    text: "Доставка в течение 24х часов",
                    img: "images/whyWithUs/deliver24h.png",
                    sidetext: "время",
                    isPictLeft: false
                },
                {
                    id: "5",
                    text: "Гибкая система лояльности",
                    img: "images/whyWithUs/loyalty.png",
                    sidetext: "что-то",
                    isPictLeft: true
                },
                {
                    id: "6",
                    text: "Качественная продукция — наша основная цель \n  удовлетворение конечного потребителя",
                    img: "images/whyWithUs/qualityproducts.png",
                    sidetext: "что-то",
                    isPictLeft: false
                }
            ]
        };
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
}

/deep/ .simplebar-track.simplebar-vertical {
    background-color: #FF6E6E;
    width: 5px;
    margin-right: 0.2rem;
    border-radius: 3px;
    margin-bottom: 16px;
    opacity: 1;
    overflow: visible;
}

/deep/.simplebar-scrollbar.simplebar-visible::before {
    opacity: 1;
    top: 0 !important;
    bottom: 0 !important;
    left: -2px;
    right: 0;
}

/deep/ .simplebar-scrollbar:before {
    background-color: #000000;
    width: 9px;
}

.clients {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 20px;
}

.background-dark {
    background-color: #000;
}

.background-light {
    background-color: #FF6E6E;
}

@media(min-width:640px) {
    /deep/ .simplebar-track.simplebar-vertical {
        background-color: #FF6E6E;
        width: 5px;
        margin-right: 5rem;
        border-radius: 3px;
        margin-bottom: 16px;
        opacity: 1;
        overflow: visible;
    }

    .clients {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-size: 10px;
    }
}

@media(min-width: 1024px) {
    .clients {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-size: 17px;
    }
}
</style>
