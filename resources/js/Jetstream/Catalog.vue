<template>
<div>
    <div class="rounded-full py-3 px-6 flex items-center justify-between mb-2" :class="[showCatalog ?  'bg-green-100' : 'bg-black']">
        <div class="inline-flex space-x-3 sm:space-x-10 items-center" :class="[showCatalog ?  'text-black' : 'text-white']" id="nav_Catalog">
            <svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" />
            </svg>
            <span class="font-mono font-extrabold text-sm sm:text-xl tracking-widest"> КАТАЛОГ ТОВАРОВ </span>
        </div>
        <button v-on:click="showCatalog = !showCatalog" class="text-white">
            <svg v-if="!showCatalog" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showCatalog" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div class="px-5 sm:px-20 bg-white grid grid-cols-1" v-if="showCatalog">

            <!-- Иконки наверх, инстаграмм, звонок -->
            <div>
                <div class="p-2.5 sm:p-5 rounded-lg text-white fixed right-0 bottom-1/2 grid grid-cols-1 gap-1">
                    <a href="#nav_Catalog" class="bg-green-100 w-7 sm:w-12 h-7 sm:h-12 text-sm font-bold tracking-wider text-black hover:bg-black hover:text-white inline-flex items-center justify-center">
                        <svg class="w-5 sm:w-8 h-5 sm:h-8" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
                        </svg>
                    </a>
                    <a class="bg-green-100 w-7 sm:w-12 h-7 sm:h-12 text-sm font-bold tracking-wider text-black hover:bg-black hover:text-white inline-flex items-center justify-center">
                        <svg class="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/horeca_iys/" class="bg-green-100 w-7 sm:w-12 h-7 sm:h-12 text-sm font-bold tracking-wider text-black hover:bg-black hover:text-white inline-flex items-center justify-center">
                        <svg class="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                    </a>
                </div>
            </div>

            <!--  Одноразовая посуда  -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-4 sm:space-x-10 items-center">
                    <img class="ml-3 sm:ml-6 w-8 sm:w-12" src="images/Catalog/disposable_tableware.png" />
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> ОДНОРАЗОВАЯ ПОСУДА </span>
                </div>
                <button v-on:click="showDisposableTableware = !showDisposableTableware" class="text-black">
                    <svg v-if="!showDisposableTableware" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showDisposableTableware" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showCatalog && showDisposableTableware" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings1" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-green-100 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!--  Одноразовая пищевая упаковка  -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-4 sm:space-x-10 items-center">
                    <img class="ml-3 sm:ml-6 w-8 sm:w-12  " src="images/Catalog/disposable_food_package.png" />
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> ОДНОРАЗОВАЯ ПИЩЕВАЯ УПАКОВКА </span>
                </div>
                <button v-on:click="showDisposableFoodPackage = !showDisposableFoodPackage" class="text-black">
                    <svg v-if="!showDisposableFoodPackage" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showDisposableFoodPackage" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showCatalog && showDisposableFoodPackage" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings2" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-green-100 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!--  Барная группа  -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-4 sm:space-x-10 items-center">
                    <img class="ml-3 sm:ml-6 w-8 sm:w-12" src="images/Catalog/bar_group.png" />
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> БАРНАЯ ГРУППА </span>
                </div>
                <button v-on:click="showBarGroup = !showBarGroup" class="text-black">
                    <svg v-if="!showBarGroup" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showBarGroup" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showCatalog && showBarGroup" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings3" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-green-100 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!--  Бумажная профессиональная продукция  -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-4 sm:space-x-10 items-center">
                    <img class="ml-3 sm:ml-6 w-8 sm:w-12" src="images/Catalog/paper_prof.png" />
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> БУМАЖНАЯ ПРОФЕССИОНАЛЬНАЯ ПРОДУКЦИЯ </span>
                </div>
                <button v-on:click="showPaperProf = !showPaperProf" class="text-black">
                    <svg v-if="!showPaperProf" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showPaperProf" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showCatalog && showPaperProf" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings4" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-green-100 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!--  Профессиональная и бытовая химия  -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-5 sm:space-x-12 items-center">
                    <img class="ml-4 sm:ml-8 w-6 sm:w-8" src="images/Catalog/prof_and_household_chemistry.png" />
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> ПРОФЕССИОНАЛЬНАЯ И БЫТОВАЯ ХИМИЯ </span>
                </div>
                <button v-on:click="showProfAndHouseholdChemistry = !showProfAndHouseholdChemistry" class="text-black">
                    <svg v-if="!showProfAndHouseholdChemistry" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showProfAndHouseholdChemistry" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showCatalog && showProfAndHouseholdChemistry" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto items-center font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings5" :key="items.id">
                            <label class="inline-flex items-auto">
                                <input type="checkbox" class="form-checkbox rounded-full text-green-100 mt-1" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <!--  Хозяйственные товары  -->
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-4 sm:space-x-10 items-center">
                    <img class="ml-3 sm:ml-6 w-8 sm:w-12" src="images/Catalog/household_goods.png" />
                    <span class="font-mono font-regular text-sm sm:text-xl tracking-wider"> ХОЗЯЙСТВЕННЫЕ ТОВАРЫ </span>
                </div>
                <button v-on:click="showHouseholdGoods = !showHouseholdGoods" class="text-black">
                    <svg v-if="!showHouseholdGoods" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showHouseholdGoods" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showCatalog && showHouseholdGoods" class="flex pl-20 mb-8">
                    <div class="grid grid-cols-3 gap-4 mx-auto font-mono font-regular flex-auto pt-4 pb-8">
                        <div v-for="items in settings6" :key="items.id">
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox rounded-full text-green-100" checked />
                                <span class="ml-2">{{ items.value }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="fade">
                <div v-if="showCatalog && showHouseholdGoods" class="flex pl-20 mb-2.5">
                    <div class="clients flex-initial mb-4 mr-4">
                        <span calss="font-mono font-regular text-xl tracking-wider">хозяйственные товары</span>
                    </div>
                    <simplebar class="pr-40 max-h-screen bg-white flex-auto font-mono" data-simplebar-auto-hide="false">
                        <div class="grid grid-cols-4 gap-4">
                            <div class="flex flex-col bg-white mr-5">
                                <img src="images/coffe.png" class="self-center" />
                                <div class="pt-5 pb-5">
                                    <p class=" font-mono text-sm font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>
                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400" v-on:click="showHert1 = !showHert1">
                                            <svg v-if="!showHert1" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                            <svg v-if="showHert1" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-green-100">
                                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-green-100" v-on:click="showDescription1 = !showDescription1">
                                            <svg v-if="!showDescription1" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription1" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showCatalog && showHouseholdGoods && showDescription1" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-green-100 rounded-full h-8 w-32">
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
                                    <p class="text-sm font-mono font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>
                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400" v-on:click="showHert2 = !showHert2">
                                            <svg v-if="!showHert2" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                            <svg v-if="showHert2" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-green-100">
                                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-green-100" v-on:click="showDescription2 = !showDescription2">
                                            <svg v-if="!showDescription2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showCatalog && showHouseholdGoods && showDescription2" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-green-100 rounded-full h-8 w-32">
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
                                    <p class="text-sm font-mono font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>
                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400" v-on:click="showHert3 = !showHert3">
                                            <svg v-if="!showHert3" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                            <svg v-if="showHert3" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-green-100">
                                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-green-100" v-on:click="showDescription3 = !showDescription3">
                                            <svg v-if="!showDescription3" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription3" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showCatalog && showHouseholdGoods && showDescription3" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-green-100 rounded-full h-8 w-32">
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
                                    <p class="text-sm font-mono font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>
                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400" v-on:click="showHert4 = !showHert4">
                                            <svg v-if="!showHert4" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>

                                            <svg v-if="showHert4" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-green-100">
                                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-green-100" v-on:click="showDescription4 = !showDescription4">
                                            <svg v-if="!showDescription4" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription4" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showCatalog && showHouseholdGoods && showDescription4" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-green-100 rounded-full h-8 w-32">
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
                                    <p class="text-sm font-mono font-regular pb-2">Держатели для двух стаканов</p>
                                    <h1 class="text-2xl font-extrabold text-black border-b-2 pb-2.5">
                                        Eco cupholder
                                    </h1>
                                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                                        <button class="text-gray-400" v-on:click="showHert5 = !showHert5">
                                            <svg v-if="!showHert5" class="w-6 h-6" viewBox="0 0 24 24" calss="text-gray-400">
                                                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                            </svg>
                                            <svg v-if="showHert5" style="width:24px;height:24px" viewBox="0 0 24 24" class="text-green-100">
                                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                            </svg>
                                        </button>
                                        <button class="text-gray-400 focus:text-green-100" v-on:click="showDescription5 = !showDescription5">
                                            <svg v-if="!showDescription5" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                            </svg>
                                            <svg v-if="showDescription5" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <transition name="fade">
                                        <div v-if="showCatalog && showHouseholdGoods && showDescription" class="font-mono font-regular text-xs font-semibold">
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
                                    <div class="flex border-2 border-green-100 rounded-full h-8 w-32">
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
            showBarGroup: false,
            showDisposableFoodPackage: false,
            showDisposableTableware: false,
            showHouseholdGoods: false,
            showPaperProf: false,
            showProfAndHouseholdChemistry: false,
            showCatalog: false,
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
            settings1: [{
                    id: "1",
                    value: "Бумажные стаканы",
                },
                {
                    id: "2",
                    value: "Пластиковые стаканы",
                },
                {
                    id: "3",
                    value: "Тарелки, миски",
                },
                {
                    id: "4",
                    value: "Столовые принадлежности",
                },
            ],

            settings2: [{
                    id: "1",
                    value: "Пластиковые емкости",
                },
                {
                    id: "2",
                    value: "Пластиковые бутылки",
                },
                {
                    id: "3",
                    value: "Крафт-емкости",
                },
                {
                    id: "4",
                    value: "Бумажная упаковка",
                },
                {
                    id: "5",
                    value: "Алюминиевая упаковка",
                },
            ],

            settings3: [{
                    id: "1",
                    value: "Трубочки",
                },
                {
                    id: "2",
                    value: "Палочки для размешивания",
                },
                {
                    id: "3",
                    value: "Шпажки",
                },
                {
                    id: "4",
                    value: "Зубочистки",
                },
            ],

            settings4: [{
                    id: "1",
                    value: "Салфетки",
                },
                {
                    id: "2",
                    value: "Полотенца",
                }, {
                    id: "3",
                    value: "Туалетная бумага",
                }, {
                    id: "4",
                    value: "Накладки на унитаз",
                },

            ],

            settings5: [{
                    id: "1",
                    value: "Моющее для полов",
                },
                {
                    id: "2",
                    value: "Моющее для посуды",
                },
                {
                    id: "3",
                    value: "Жидкое мыло для рук",
                },
                {
                    id: "4",
                    value: "Анти-жир",
                },
                {
                    id: "5",
                    value: "Дезинфекция",
                },
                {
                    id: "6",
                    value: "Линейка ЖМС",
                },
                {
                    id: "7",
                    value: "Мыло хозяйственное",
                },
                {
                    id: "8",
                    value: "Кислотные средства для удаления известкового налета",
                },
                {
                    id: "9",
                    value: "Средства для чистки канализационных труб",
                },
                {
                    id: "10",
                    value: "Средства для мытья окон и зеркал",
                },
                {
                    id: "11",
                    value: "Освежители воздуха",
                },
                {
                    id: "12",
                    value: "Средства для стирки",
                },
                {
                    id: "13",
                    value: "Средства по уходу за мебелью",
                },
            ],

            settings6: [{
                    id: "1",
                    value: "Мешки для мусора",
                },
                {
                    id: "2",
                    value: "Кухонные принадлежности",
                },
                {
                    id: "3",
                    value: "Пленка ПЭ/ПВХ",
                },
                {
                    id: "4",
                    value: "Перчатки",
                },
                {
                    id: "5",
                    value: "Пакеты ",
                },
                {
                    id: "6",
                    value: "Губки, протирочные принадлежности",
                },
                {
                    id: "7",
                    value: "МОПы",
                },
                {
                    id: "8",
                    value: "Товары защитного назначения",
                },
                {
                    id: "9",
                    value: "Одноразовая продукция для гостиниц",
                },
                {
                    id: "10",
                    value: "Канцелярия ",
                },
                {
                    id: "11",
                    value: "Оборудование для уборки",
                },
                {
                    id: "12",
                    value: "Диспенсеры",
                },
            ],
        };
    },
};
</script>

<style scoped>
[type="checkbox"]:checked {
    background-image: url("/images/circle-medium.png");
}

/deep/ .simplebar-track.simplebar-vertical {
    background-color: #91CD5A;
    width: 5px;
    margin-right: 5rem;
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
    font-size: 20px;
}
</style>
