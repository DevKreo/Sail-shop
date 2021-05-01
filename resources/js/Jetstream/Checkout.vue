<template>
<div>
    <div class="rounded-full py-3 px-6 flex items-center justify-between mb-2" :class="[showCheckout ?  'bg-purple-50' : 'bg-black']">
        <div class="inline-flex space-x-10 items-center" :class="[showCheckout ?  'text-black' : 'text-white']">
            <svg class="w-7 h-7" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
            </svg>
            <span class="font-mono font-extrabold text-xl tracking-widest"> ОФОРМИТЬ ЗАКАЗ </span>
        </div>
        <button v-on:click="showCheckout = !showCheckout" class="text-white">
            <svg v-if="!showCheckout" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showCheckout" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div class="px-20 bg-white " v-if="showCheckout">
            <transition name="fade">
                <div v-if="showCheckout" class="flex mb-2.5 flex-col">
                    <div class="flex pb-24">
                        <div class="clients flex-initial mb-4 mr-4">
                            <span calss="font-mono font-regular text-xl tracking-wider">ваши заказы</span>
                        </div>

                        <simplebar class="pr-40 max-h-screen bg-white block flex-auto" data-simplebar-auto-hide="false">

                            <div class="grid grid-cols-4 gap-4">
                                <div class="flex flex-col bg-white mr-5">
                                    <img src="images/coffe.png" class="self-center" />
                                    <div class="pt-5 pb-5">
                                        <p class="font-mono text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                        <h1 class="font-mono text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                            Eco cupholder
                                        </h1>
                                        <div class="flex flex-row justify-between mt-2.5 mb-5">
                                            <button class="text-gray-400" v-on:click="showHert1 = !showHert1">
                                                <svg v-if="!showHert1" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                    <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                </svg>
                                                <svg v-if="showHert1" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-purple-50">
                                                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                                </svg>
                                            </button>
                                            <button class="text-gray-400 focus:text-purple-50" v-on:click="showDescription1 = !showDescription1">
                                                <svg v-if="!showDescription1" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                                </svg>
                                                <svg v-if="showDescription1" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="showCheckout && showDescription1" class="font-mono font-regular text-xs font-semibold">
                                                <div class="mb-5">
                                                    <span>Держатели на 2 стакана предназначены для заведений
                                                        работающих, работающих по системе take away</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Картонные держатели для одноразовых стаканов -
                                                        незаменимый органайзер для организации продажи
                                                        напитков на вынос</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Основные характеристики изделия: <br />
                                                        Упаковка: 150шт. <br />
                                                        Цвет: Крафт <br />
                                                        Фиксирует стаканы разного объема
                                                        <br />
                                                        Производится из макулатуры<br />
                                                        Биоразлагаемый<br />
                                                        Подлежит вторичной переработке<br /></span>
                                                </div>
                                            </div>
                                        </transition>
                                        <div class="flex border-2 border-purple-50 rounded-full h-8 w-32">
                                            <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                    <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                                </svg>
                                            </a>
                                            <span class="font-mono font-regular self-center">1 Штука</span>
                                        </div>
                                        <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                            <span class="font-mono font-regular self-center mr-6">00000</span>

                                            <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                                <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col bg-white mr-5">
                                    <img src="images/coffe.png" class="self-center" />
                                    <div class="pt-5 pb-5">
                                        <p class="font-mono text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                        <h1 class="font-mono text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                            Eco cupholder
                                        </h1>
                                        <div class="flex flex-row justify-between mt-2.5 mb-5">
                                            <button class="text-gray-400" v-on:click="showHert2 = !showHert2">
                                                <svg v-if="!showHert2" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                    <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                </svg>
                                                <svg v-if="showHert2" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-purple-50">
                                                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                                </svg>
                                            </button>
                                            <button class="text-gray-400 focus:text-purple-50" v-on:click="showDescription2 = !showDescription2">
                                                <svg v-if="!showDescription2" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                                </svg>
                                                <svg v-if="showDescription2" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="showCheckout && showDescription2" class="font-mono font-regular text-xs font-semibold">
                                                <div class="mb-5">
                                                    <span>Держатели на 2 стакана предназначены для заведений
                                                        работающих, работающих по системе take away</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Картонные держатели для одноразовых стаканов -
                                                        незаменимый органайзер для организации продажи
                                                        напитков на вынос</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Основные характеристики изделия: <br />
                                                        Упаковка: 150шт. <br />
                                                        Цвет: Крафт <br />
                                                        Фиксирует стаканы разного объема
                                                        <br />
                                                        Производится из макулатуры<br />
                                                        Биоразлагаемый<br />
                                                        Подлежит вторичной переработке<br /></span>
                                                </div>
                                            </div>
                                        </transition>
                                        <div class="flex border-2 border-purple-50 rounded-full h-8 w-32">
                                            <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                    <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                                </svg>
                                            </a>
                                            <span class="font-mono font-regular self-center">1 Штука</span>
                                        </div>
                                        <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                            <span class="font-mono font-regular self-center mr-6">00000</span>

                                            <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                                <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col bg-white mr-5">
                                    <img src="images/coffe.png" class="self-center" />
                                    <div class="pt-5 pb-5">
                                        <p class="font-mono text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                        <h1 class="font-mono text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                            Eco cupholder
                                        </h1>
                                        <div class="flex flex-row justify-between mt-2.5 mb-5">
                                            <button class="text-gray-400" v-on:click="showHert3 = !showHert3">
                                                <svg v-if="!showHert3" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                    <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                </svg>
                                                <svg v-if="showHert3" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-purple-50">
                                                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                                </svg>
                                            </button>
                                            </button>
                                            <button class="text-gray-400 focus:text-purple-50" v-on:click="showDescription3 = !showDescription3">
                                                <svg v-if="!showDescription3" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                                </svg>
                                                <svg v-if="showDescription3" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="showCheckout && showDescription3" class="font-mono font-regular text-xs font-semibold">
                                                <div class="mb-5">
                                                    <span>Держатели на 2 стакана предназначены для заведений
                                                        работающих, работающих по системе take away</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Картонные держатели для одноразовых стаканов -
                                                        незаменимый органайзер для организации продажи
                                                        напитков на вынос</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Основные характеристики изделия: <br />
                                                        Упаковка: 150шт. <br />
                                                        Цвет: Крафт <br />
                                                        Фиксирует стаканы разного объема
                                                        <br />
                                                        Производится из макулатуры<br />
                                                        Биоразлагаемый<br />
                                                        Подлежит вторичной переработке<br /></span>
                                                </div>
                                            </div>
                                        </transition>
                                        <div class="flex border-2 border-purple-50 rounded-full h-8 w-32">
                                            <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                    <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                                </svg>
                                            </a>
                                            <span class="font-mono font-regular self-center">1 Штука</span>
                                        </div>
                                        <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                            <span class="font-mono font-regular self-center mr-6">00000</span>
                                            <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                                <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col bg-white mr-5">
                                    <img src="images/coffe.png" class="self-center" />
                                    <div class="pt-5 pb-5">
                                        <p class="font-mono text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                        <h1 class="font-mono text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                            Eco cupholder
                                        </h1>
                                        <div class="flex flex-row justify-between mt-2.5 mb-5">
                                            <button class="text-gray-400" v-on:click="showHert4 = !showHert4">
                                                <svg v-if="!showHert4" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                    <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                </svg>
                                                <svg v-if="showHert4" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-purple-50">
                                                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                                </svg>
                                            </button>
                                            <button class="text-gray-400 focus:text-purple-50" v-on:click="showDescription4 = !showDescription4">
                                                <svg v-if="!showDescription4" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                                </svg>
                                                <svg v-if="showDescription4" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="showCheckout && showDescription4" class="font-mono font-regular text-xs font-semibold">
                                                <div class="mb-5">
                                                    <span>Держатели на 2 стакана предназначены для заведений
                                                        работающих, работающих по системе take away</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Картонные держатели для одноразовых стаканов -
                                                        незаменимый органайзер для организации продажи
                                                        напитков на вынос</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Основные характеристики изделия: <br />
                                                        Упаковка: 150шт. <br />
                                                        Цвет: Крафт <br />
                                                        Фиксирует стаканы разного объема
                                                        <br />
                                                        Производится из макулатуры<br />
                                                        Биоразлагаемый<br />
                                                        Подлежит вторичной переработке<br /></span>
                                                </div>
                                            </div>
                                        </transition>
                                        <div class="flex border-2 border-purple-50 rounded-full h-8 w-32">
                                            <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                    <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                                </svg>
                                            </a>
                                            <span class="font-mono font-regular self-center">1 Штука</span>
                                        </div>
                                        <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                            <span class="font-mono font-regular self-center mr-6">00000</span>
                                            <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                                <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col bg-white mr-5">
                                    <img src="images/coffe.png" class="self-center" />
                                    <div class="pt-5 pb-5">
                                        <p class="font-mono text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                        <h1 class="font-mono font-regulartext-2xl font-extrabold text-black border-b-2 pb-2.5">
                                            Eco cupholder
                                        </h1>
                                        <div class="flex flex-row justify-between mt-2.5 mb-5">
                                            <button class="text-gray-400 focus:text-purple-50">
                                                <button class="text-gray-400" v-on:click="showHert5 = !showHert5">
                                                    <svg v-if="!showHert5" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                        <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                    </svg>
                                                    <svg v-if="showHert5" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-purple-50">
                                                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                                    </svg>
                                                </button>
                                            </button>
                                            <button class="text-gray-400 focus:text-purple-50" v-on:click="showDescription5 = !showDescription5">
                                                <svg v-if="!showDescription5" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                                </svg>
                                                <svg v-if="showDescription5" class="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <transition name="fade">
                                            <div v-if="showCheckout && showDescription5" class="font-mono font-regular text-xs font-semibold">
                                                <div class="mb-5">
                                                    <span>Держатели на 2 стакана предназначены для заведений
                                                        работающих, работающих по системе take away</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Картонные держатели для одноразовых стаканов -
                                                        незаменимый органайзер для организации продажи
                                                        напитков на вынос</span>
                                                </div>
                                                <div class="mb-5">
                                                    <span>Основные характеристики изделия: <br />
                                                        Упаковка: 150шт. <br />
                                                        Цвет: Крафт <br />
                                                        Фиксирует стаканы разного объема
                                                        <br />
                                                        Производится из макулатуры<br />
                                                        Биоразлагаемый<br />
                                                        Подлежит вторичной переработке<br /></span>
                                                </div>
                                            </div>
                                        </transition>
                                        <div class="flex border-2 border-purple-50 rounded-full h-8 w-32">
                                            <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                    <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                                </svg>
                                            </a>
                                            <span class="font-mono font-regular self-center">1 Штука</span>
                                        </div>
                                        <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                            <span class="font-mono font-regular self-center mr-6">00000 </span>
                                            <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                                <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>

                    </div>

                    <div class="grid grid-cols-1 gap-1 justify-items-center my-5 font-mono font-bold text-sm ">
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Общая сумма заказа</span>
                            <input type="text" placeholder="000000.00" class="ml-4 form-control bg-white rounded-full h-9  w-1/4">
                            <div class="flex bg-black text-white rounded-full h-9 w-1/4">
                                <span class="font-mono font-regular self-center mr-6">0000000.00   ₽</span>
                            </div>
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Ваш номер телефона</span>
                            <input type="tell" autocomplete="tel" placeholder="+38 ___-__-__" maxlength="14" class="form-control bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Ваше имя</span>
                            <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Наименование вашего предприятия</span>
                            <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Адрес доставки</span>
                            <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Дата доставки</span>
                            <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Форма отгрузки</span>
                            <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>
                        <div class="hover:text-black hover:bg-purple-50 flex items-center justify-between bg-black rounded-full py-3 px-6 w-1/2 h-12 indent">
                            <span class="text-white">Комментарий</span>
                            <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
                        </div>

                        <button class="hover:text-black hover:bg-purple-50 w-1/2 h-12 bg-black text-white rounded-full font-mono font-extrabold text-xl">Заказать</button>
                    </div>

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
            showCheckout: false,
            IsHover: false,
            showHert1: false,
            showHert2: false,
            showHert3: false,
            showHert4: false,
            showHert5: false,
            showDescription1: false,
            showDescription2: false,
            showDescription3: false,
            showDescription4: false,
            showDescription5: false,
        };
    },
};
</script>

<style scoped>
/deep/.simplebar-track.simplebar-vertical {
    background-color: #CD96FF;
    width: 5px;
    margin-right: 5rem;
    border-radius: 3px;
    margin-bottom: 16px;
    opacity: 1;
    overflow: visible;
    visibility: visible;
}

/deep/.simplebar-scrollbar.simplebar-visible::before {
    opacity: 1;
    top: 0 !important;
    bottom: 0 !important;
    left: -2px;
    right: 0;
}

/deep/.simplebar-scrollbar:before {
    background-color: #000000;
    width: 9px;
}

.clients {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 20px;
}
</style>
