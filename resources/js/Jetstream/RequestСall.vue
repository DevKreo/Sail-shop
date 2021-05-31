<template>
<div>
    <div class="rounded-full py-3 px-4 sm:px-6 flex items-center justify-between mb-2" :class="[showRequestCall ?  'bg-blue-50' : 'bg-black']">
        <div class="inline-flex space-x-3 sm:space-x-10 items-center" :class="[showRequestCall ?  'text-black' : 'text-white']">
            <svg class="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
            </svg>
            <span class="font-mono font-extrabold text-sm sm:text-xl tracking-widest"> ЗАКАЗАТЬ ЗВОНОК </span>
        </div> 
        <button v-on:click="showRequestCall = !showRequestCall" :class="[showRequestCall ?  'text-black' : 'text-white']">
            <svg v-if="!showRequestCall" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showRequestCall" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div v-if="showRequestCall" class="grid grid-cols-1 gap-1 justify-items-center my-2 sm:my-5 font-mono font-bold text-sm">
            <div class="hover:text-black hover:bg-blue-50 flex items-center justify-between bg-black rounded-full py-3 px-4 sm:px-6 w-78 sm:w-1/2 h-12 indent">
                <span class="text-white">Ваш номер телефона</span>
                <input type="tell" autocomplete="tel" placeholder="+38 ___-__-__" maxlength="14" class="form-control bg-white rounded-full h-9 pl-5 w-1/2">
            </div>

            <div class="hover:text-black hover:bg-blue-50 flex items-center justify-between bg-black rounded-full py-3 px-4 sm:px-6 w-78 sm:w-1/2 h-12 indent">
                <span class="text-white">Ваше имя</span>
                <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-1/2">
            </div>

            <div class="hover:text-black hover:bg-blue-50 flex items-center justify-between bg-black rounded-full py-3 px-4 sm:px-6 w-78 sm:w-1/2 h-12 indent">
                <span class="text-white">Наименование компании</span>
                <input type="text" placeholder="______________________________________" class="bg-white rounded-full h-9 pl-5 w-36 sm:w-1/2">
            </div>
            <button class="hover:text-black hover:bg-blue-50 w-64 h-12 bg-black text-white rounded-full font-mono font-extrabold text-xl">Заказать</button>
        </div>
    </transition>
</div>
</template>

<script>
import JetApplicationLogo from '@/Jetstream/ApplicationLogo'

export default {
    components: {
        JetApplicationLogo,
    },
    data() {
        return {
            showRequestCall: false
        }
    }
}
</script>

<style>
.indent{
    padding-right: 4px;
}
</style>