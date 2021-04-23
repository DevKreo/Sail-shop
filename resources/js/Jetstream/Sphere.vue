<template>
  <div>
    <div
      class="rounded-full py-3 px-6 bg-black flex items-center justify-between mb-2"
    >
      <div class="text-white inline-flex space-x-10 items-center">
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
        <span> СФЕРА ДЕЯТЕЛЬНОСТИ </span>
      </div>
      <button v-on:click="showSphere = !showSphere" class="text-white">
        <svg v-if="!showSphere" class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
          />
        </svg>
        <svg v-if="showSphere" class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div class="px-20 bg-white grid grid-cols-1" v-if="showSphere">
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-10 items-center">
            <img class="ml-6" src="images/FieldOfActivity/cafe_bars_restorants.png" />
            <span class=""> Кафе/ Бары/ Рестораны </span>
          </div>
          <button
            v-on:click="showCafeBarsResourants = !showCafeBarsResourants"
            class="text-black"
          >
            <svg
              v-if="!showCafeBarsResourants"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg
              v-if="showCafeBarsResourants"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-10  items-center">
            <img
              class="ml-5"
              src="images/FieldOfActivity/fastfood.png"
            />
            <span class=""> Точка фаст-фуд </span>
          </div>
          <button
            v-on:click="showFastFood = !showFastFood"
            class="text-black"
          >
            <svg
              v-if="!showFastFood"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg
              v-if="showFastFood"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-10  items-center">
            <img class="ml-5" src="images/FieldOfActivity/canteen.png" />
            <span class=""> Столовая </span>
          </div>
          <button v-on:click="showCanteen = !showCanteen" class="text-black">
            <svg v-if="!showCanteen" class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg v-if="showCanteen" class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-12 items-center">
            <img class="ml-9 mr-1" src="images/FieldOfActivity/hotel.png" />
            <span class=""> Отель </span>
          </div>
          <button
            v-on:click="showHotel = !showHotel"
            class="text-black"
          >
            <svg v-if="!showHotel" class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg v-if="showHotel" class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-9 items-center">
            <img
              class="ml-6"
              src="images/FieldOfActivity/office.png"
            />
            <span class=""> Офис </span>
          </div>
          <button
            v-on:click="
              showOffice = !showOffice
            "
            class="text-black"
          >
            <svg
              v-if="!showOffice"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg
              v-if="showOffice"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-9 items-center">
            <img
              class="ml-6"
              src="images/FieldOfActivity/medical_institution.png"
            />
            <span class=""> Медицинское учереждение </span>
          </div>
          <button
            v-on:click="
              showMedicalInst = !showMedicalInst
            "
            class="text-black"
          >
            <svg
              v-if="!showMedicalInst"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg
              v-if="showMedicalInst"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div
          class="py-3 bg-white flex items-center justify-between border-t-2 border-black"
        >
          <div class="text-black inline-flex space-x-9 items-center">
            <img class="ml-6" src="images/FieldOfActivity/beauty_saloon.png" />
            <span class=""> Салон красоты </span>
          </div>
          <button
            v-on:click="showBeautySaloon = !showBeautySaloon"
            class="text-black"
          >
            <svg v-if="!showBeautySaloon" class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              />
            </svg>
            <svg v-if="showBeautySaloon" class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="showSphere && showBeautySaloon" class="flex pl-20 mb-8">
            <div class="grid grid-cols-3 gap-4 mx-auto">
              <div v-for="items in settings" :key="items.id">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox rounded-full text-green-450"
                    checked
                  />
                  <span class="ml-2">{{ items.value }}</span>
                </label>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="showSphere && showBeautySaloon"
            class="flex pl-20 mb-2.5"
          >
            <div class="clients flex-initial mb-4 mr-4">
              <span>featured for beauty saloon</span>
            </div>
            <simplebar
              class="pr-40 max-h-screen bg-white flex-auto"
              data-simplebar-auto-hide="false"
            >
              <div class="grid grid-cols-4 gap-4">
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription1 = !showDescription1"
                      >
                        <svg
                          v-if="!showDescription1"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription1"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription1
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription2 = !showDescription2"
                      >
                        <svg
                          v-if="!showDescription2"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription2"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription2
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription3 = !showDescription3"
                      >
                        <svg
                          v-if="!showDescription3"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription3"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription3
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription4 = !showDescription4"
                      >
                        <svg
                          v-if="!showDescription4"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription4"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription4
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription = !showDescription"
                      >
                        <svg
                          v-if="!showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription = !showDescription"
                      >
                        <svg
                          v-if="!showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription = !showDescription"
                      >
                        <svg
                          v-if="!showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription = !showDescription"
                      >
                        <svg
                          v-if="!showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col bg-white mr-5">
                  <img src="images/coffe.png" class="self-center" />
                  <div class="pt-5 pb-5">
                    <p>Держатели для двух стаканов</p>
                    <h1 class="text-2xl font-bold text-black border-b-2 pb-2.5">
                      Eco cupholder
                    </h1>

                    <div class="flex flex-row justify-between mt-2.5 mb-5">
                      <button class="text-gray-400 focus:text-green-450">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                          />
                        </svg>
                      </button>
                      <button
                        class="text-gray-400 focus:text-green-450"
                        v-on:click="showDescription = !showDescription"
                      >
                        <svg
                          v-if="!showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                          />
                        </svg>
                        <svg
                          v-if="showDescription"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                      </button>
                    </div>
                    <transition name="fade">
                      <div
                        v-if="
                          showSphere && showBeautySaloon && showDescription
                        "
                      >
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Держатели на 2 стакана предназначены для заведений
                            работающих, работающих по системе take away</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Картонные держатели для одноразовых стаканов -
                            незаменимый органайзер для организации продажи
                            напитков на вынос</span
                          >
                        </div>
                        <div class="mb-5">
                          <span class="text-xs font-black"
                            >Основные характеристики изделия: <br />
                            Упаковка: 150шт. <br />
                            Цвет: Крафт <br />
                            Фиксирует стаканы разного объема
                            <br />
                            Производится из макулатуры<br />
                            Биоразлагаемый<br />
                            Подлежит вторичной переработке<br
                          /></span>
                        </div>
                      </div>
                    </transition>
                    <div
                      class="flex border-2 border-green-450 rounded-full h-8 w-32"
                    >
                      <a class="self-center pr-2"
                        ><svg
                          style="width: 32px; height: 32px"
                          viewBox="2 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M17,14L12,9L7,14H17Z"
                          />
                        </svg>
                      </a>
                      <span class="self-center">1 Штука</span>
                    </div>
                    <div
                      class="flex bg-black text-white rounded-full h-8 w-32 justify-end mt-2.5"
                    >
                      <span class="self-center mr-6">00000</span>

                      <svg
                        style="width: 26px; height: 26px"
                        viewBox="0 0 24 24"
                        class="self-center pr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5A2.5,2.5 0 0,0 17,7.5A2.5,2.5 0 0,0 14.5,5Z"
                        />
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
      settings: [
        {
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
