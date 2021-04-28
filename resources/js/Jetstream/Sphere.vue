<template>
<div>
    <div class="rounded-full py-3 px-6 bg-black flex items-center justify-between mb-2">
        <div class="text-white inline-flex space-x-10 items-center">
            <svg class="w-7 h-7" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <span class="font-mono font-extrabold text-xl tracking-widest"> СФЕРА ДЕЯТЕЛЬНОСТИ </span>
        </div>
        <button v-on:click="showSphere = !showSphere" class="text-white">
            <svg v-if="!showSphere" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showSphere" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div class="px-20 bg-white grid grid-cols-1" v-if="showSphere">

            <!-- Кафе / Бары / Рестораны -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10 items-center">
                    <img class="ml-6" src="images/FieldOfActivity/cafe_bars_restorants.png" />
                    <span class=""> КАФЕ / БАРЫ / РЕСТОРАНЫ </span>
                </div>
                <button v-on:click="showCafeBarsResourants = !showCafeBarsResourants" class="text-black">
                    <svg v-if="!showCafeBarsResourants" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showCafeBarsResourants" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showCafeBarsResourants" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings1" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Точка фаст-фуд -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10  items-center">
                    <img class="ml-5" src="images/FieldOfActivity/fastfood.png" />
                    <span class=""> ТОЧКА ФАСТ-ФУД </span>
                </div>
                <button v-on:click="showFastFood = !showFastFood" class="text-black">
                    <svg v-if="!showFastFood" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showFastFood" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showFastFood" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings2" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Столовая -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10  items-center">
                    <img class="ml-5" src="images/FieldOfActivity/canteen.png" />
                    <span class=""> СТОЛОВАЯ </span>
                </div>
                <button v-on:click="showCanteen = !showCanteen" class="text-black">
                    <svg v-if="!showCanteen" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showCanteen" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showCanteen" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings3" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Отель -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-12 items-center">
                    <img class="ml-9 mr-1" src="images/FieldOfActivity/hotel.png" />
                    <span class=""> ОТЕЛЬ </span>
                </div>
                <button v-on:click="showHotel = !showHotel" class="text-black">
                    <svg v-if="!showHotel" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showHotel" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showHotel" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings4" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Офис -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-9 items-center">
                    <img class="ml-6" src="images/FieldOfActivity/office.png" />
                    <span class="font-mono font-regular text-xl tracking-wider"> ОФИС </span>
                </div>
                <button v-on:click="showOffice = !showOffice" class="text-black">
                    <svg v-if="!showOffice" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showOffice" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showOffice" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings5" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Медицинское учереждение-->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-9 items-center">
                    <img class="ml-6" src="images/FieldOfActivity/medical_institution.png" />
                    <span class="font-mono font-regular text-xl tracking-wider"> МЕДИЦИНСКОЕ УЧРЕЖДЕНИЕ </span>
                </div>
                <button v-on:click=" showMedicalInst = !showMedicalInst" class="text-black">
                    <svg v-if="!showMedicalInst" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showMedicalInst" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showMedicalInst" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings6" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Салон красоты-->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-9 items-center">
                    <img class="ml-6" src="images/FieldOfActivity/beauty_saloon.png" />
                    <span class="font-mono font-regular text-xl tracking-wider"> САЛОН КРАСОТЫ </span>
                </div>
                <button v-on:click="showBeautySaloon = !showBeautySaloon" class="text-black">
                    <svg v-if="!showBeautySaloon" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showBeautySaloon" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showSphere && showBeautySaloon" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings7" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-aqua-50 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>


            <transition name="fade">
                <div v-if="showSphere && showBeautySaloon" class="flex pl-20 mb-2.5">
                    <div class="clients flex-initial mb-4 mr-4">
                        <span calss="font-mono font-regular text-xl tracking-wider">хозяйственные товары</span>
                    </div>
                    <simplebar class="pr-40 max-h-screen bg-white flex-auto font-mono" data-simplebar-auto-hide="false">

                        <div class="grid grid-cols-4 gap-4">
                            <div class="flex flex-col bg-white mr-5">
                                <img src="images/coffe.png" class="self-center" />
                                <div class="pt-5 pb-5">
                                    <p class="text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>

                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400 focus:text-aqua-50">
                                            <svg class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-aqua-50" v-on:click="showDescription1 = !showDescription1">
                                            <svg v-if="!showDescription1" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription1" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showSphere && showBeautySaloon && showDescription1" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-aqua-50 rounded-full h-8 w-32">
                                        <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                            </svg>
                                        </a>
                                        <span class="self-center">1 Штука</span>
                                    </div>
                                    <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                        <span class="self-center mr-6">00000</span>

                                        <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                            <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col bg-white mr-5">
                                <img src="images/coffe.png" class="self-center" />
                                <div class="pt-5 pb-5">
                                    <p class="text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>

                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400 focus:text-aqua-50">
                                            <svg class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-aqua-50" v-on:click="showDescription2 = !showDescription2">
                                            <svg v-if="!showDescription2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showSphere && showBeautySaloon && showDescription2" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-aqua-50 rounded-full h-8 w-32">
                                        <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                            </svg>
                                        </a>
                                        <span class="self-center">1 Штука</span>
                                    </div>
                                    <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                        <span class="self-center mr-6">00000</span>

                                        <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                            <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white mr-5">
                                <img src="images/coffe.png" class="self-center" />
                                <div class="pt-5 pb-5">
                                    <p class="text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>

                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400 focus:text-aqua-50">
                                            <svg class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-aqua-50" v-on:click="showDescription3 = !showDescription3">
                                            <svg v-if="!showDescription3" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription3" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showSphere && showBeautySaloon && showDescription3" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-aqua-50 rounded-full h-8 w-32">
                                        <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                            </svg>
                                        </a>
                                        <span class="self-center">1 Штука</span>
                                    </div>
                                    <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                        <span class="self-center mr-6">00000</span>

                                        <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                            <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white mr-5">
                                <img src="images/coffe.png" class="self-center" />
                                <div class="pt-5 pb-5">
                                    <p class="text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>

                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400 focus:text-aqua-50">
                                            <svg class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-aqua-50" v-on:click="showDescription4 = !showDescription4">
                                            <svg v-if="!showDescription4" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription4" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showSphere && showBeautySaloon && showDescription4" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-aqua-50 rounded-full h-8 w-32">
                                        <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                            </svg>
                                        </a>
                                        <span class="self-center">1 Штука</span>
                                    </div>
                                    <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                        <span class="self-center mr-6">00000</span>

                                        <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                            <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white mr-5">
                                <img src="images/coffe.png" class="self-center" />
                                <div class="pt-5 pb-5">
                                    <p class="text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>

                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400 focus:text-aqua-50">
                                            <svg class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-aqua-50" v-on:click="showDescription = !showDescription">
                                            <svg v-if="!showDescription" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showSphere && showBeautySaloon && showDescription" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-aqua-50 rounded-full h-8 w-32">
                                        <a class="self-center pr-2"><svg style="width: 32px; height: 32px" viewBox="2 0 24 24">
                                                <path fill="currentColor" d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z" />
                                            </svg>
                                        </a>
                                        <span class="self-center">1 Штука</span>
                                    </div>
                                    <div class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5">
                                        <span class="self-center mr-6">00000</span>

                                        <svg style="width: 26px; height: 26px" viewBox="0 0 24 24" class="self-center pr-2">
                                            <path fill="currentColor" d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z" />
                                        </svg>
                                    </div>
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

export default {
    components: {
        JetApplicationLogo,
        simplebar,
    },
    data() {
        return {
            showCanteen: false,
            showFastFood: false,
            showCafeBarsResourants: false,
            showBeautySaloon: false,
            showHotel: false,
            showOffice: false,
            showMedicalInst: false,
            showSphere: false,
            showDescription1: false,
            showDescription2: false,
            showDescription3: false,
            showDescription4: false,
            settings1: [{
                    id: "1",
                    value: "Пицца",
                },
                {
                    id: "2",
                    value: "Суши",
                },
                {
                    id: "3",
                    value: "Бургеры",
                },
                {
                    id: "4",
                    value: "Лапша",
                },
                {
                    id: "5",
                    value: "Кофейня",
                },
            ],
            settings2: [{
                    id: "1",
                    value: "Пицца",
                },
                {
                    id: "2",
                    value: "Суши",
                },
                {
                    id: "3",
                    value: "Бургеры",
                },
                {
                    id: "4",
                    value: "Лапша",
                },
                {
                    id: "5",
                    value: "Кофейня",
                },
            ],
            settings3: [],
            settings4: [],
            settings5: [],
            settings6: [],
            settings7: [{
                    id: "1",
                    value: "Тату салон",
                },
                {
                    id: "2",
                    value: "Парикмахерская",
                }
            ],
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
</style>
