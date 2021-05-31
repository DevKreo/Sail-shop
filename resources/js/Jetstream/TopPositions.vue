<template>
<div>
    <div class="rounded-full py-3 px-4 sm:px-6 flex items-center justify-between mb-2":class="[showTopPosition ?  'bg-green-50' : 'bg-black']">
        <div class="inline-flex space-x-3 sm:space-x-10 items-center":class="[showTopPosition ?  'text-black' : 'text-white']">
            <svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
            </svg>
            <span class="font-mono font-extrabold text-sm sm:text-xl tracking-widest"> ТОП ПОЗИЦИЙ </span>
        </div>
        <button v-on:click="showTopPosition = !showTopPosition" class="text-white">
            <svg v-if="!showTopPosition" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showTopPosition" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div class="px-2 sm:px-10 xl:px-20 bg-white grid grid-cols-1" v-if="showTopPosition">
            <transition name="fade">
                <div v-if="showTopPosition" class="flex mb-2.5">
                    <div class="clients flex-initial mb-4 mr-1 xl:mr-4">
                        <span calss="font-mono font-regular tracking-wider">рекомендуемые товары</span>
                    </div>
                    <simplebar class="pr-0.5 sm:pr-5 xl:pr-10 max-h-screen bg-white flex-auto" data-simplebar-auto-hide="false">
                        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4">

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="group flex flex-col mx-2 h-60 lg:h-80 xl:h-96 w-60 lg:w-80 xl:w-auto relative parenting">
                                <div class="child absolute inset-0 bg-cover bg-center z-0 group-hover:opacity-50" style="background-image: url(images/coffe.png)"></div>
                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-start items-start text-white font-mono pl-3 pt-3">
                                    <div class="ml-1 text-black font-mono font-regular text-sm sm:text-base">Держатели для двух стаканов</div>
                                    <div class="font-mono font-extrabold text-base sm:text-2xl font-bold pb-2.5 ml-1 text-black flex items-start">Eco cupholder</div>
                                    <button type="button" class="circuit rounded-full h-12 sm:h-16 w-12 sm:w-16 opacity-100 bg-black absolute bottom-0 right-0 mr-5 mb-5 flex items-center justify-center focus:bg-green-50 focus-within:text-black">
                                        <svg class="w-8 sm:w-12 h-8 sm:h-12" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                        </svg>
                                    </button>
                                </div>
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

<style scoped>
[type="checkbox"]:checked {
    background-image: url("/images/circle-medium.png");
}

/deep/ .simplebar-track.simplebar-vertical {
    background-color: #73E691;
    width: 5px;
    margin-right: 0.5rem;
    border-radius: 3px;
    margin-bottom: 16px;
    opacity: 1;
    overflow: visible;
    visibility: visible;
}

/deep/ .simplebar-scrollbar.simplebar-visible::before {
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
    font-size: 15px;
}

.card:hover {
    opacity: 0.5;
}

.circuit:active,
.circuit:focus {
    outline: none;
}

.circuit::-moz-focus-inner {
    border: 0;
}

.parenting:hover .child,
.parenting:focus .child {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.parenting {
    overflow: hidden;
}

.child {
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
@media(min-width:640px) {
    /deep/ .simplebar-track.simplebar-vertical {
        background-color: #73E691;
        width: 5px;
        margin-right: 0.5rem;
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
    /deep/ .simplebar-track.simplebar-vertical {
        background-color: #73E691;
        width: 5px;
        margin-right: -1.5rem; 
        border-radius: 3px;
        margin-bottom: 16px;
        opacity: 1;
        overflow: visible;
    }
    .clients {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 17px;
    }
}

@media(min-width: 1024px) {
    /deep/ .simplebar-track.simplebar-vertical {
        background-color: #73E691;
        width: 5px;
        margin-right: 1.5rem; 
        border-radius: 3px;
        margin-bottom: 16px;
        opacity: 1;
        overflow: visible;
    }
}
</style>
