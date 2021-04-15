<template>
<div>
    <div class="rounded-full py-3 px-6 flex items-center justify-between mb-2" :class="[showOurContacts ?  'bg-red-550' : 'bg-black']">
        <div class="inline-flex space-x-10 items-center" :class="[showOurContacts ?  'text-black' : 'text-white']">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            <span class=""> НАШИ КОНТАКТЫ </span>
        </div>
        <button v-on:click="showOurContacts = !showOurContacts" :class="[showOurContacts ?  'text-black' : 'text-white']">
            <svg v-if="!showOurContacts" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showOurContacts" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div v-if="showOurContacts" class="flex flex-col mb-8">
            <div class="flex justify-center" v-for="item in content" :key="item.logo">
                <div class="flex flex-row items-center">
                    <div class="bg-black text-white rounded-full h-11 w-11 flex items-center justify-center">
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="currentColor" :d="item.logo" />
                        </svg>
                    </div>
                    <div class="pl-14 flex flex-col justify-items-center">
                        <span v-for="sentance in item.text">{{sentance}}</span>
                    </div>
                </div>
            </div>
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
            showOurContacts: false,
            content: [{
                    logo: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
                    text: ["TEL: +38 050 234-30-31", "TEL: +38 071 234-30-31"]
                },
                {
                    logo: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z",
                    text: ["bp.verno@gmail.com"]
                },
                {
                    logo: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",
                    text: ["@horeca_iys"]
                },
                {
                    logo: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
                    text: ["@bp_infobot"]
                },
                {
                    logo: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
                    text: ["г. Донецк", "Ворошиловский район", "пр. Мира, 13"]
                },
                {
                    logo: "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z",
                    text: ["г. Донецк", "Ворошиловский район", "пр. Мира, 13"]
                },
            ]
        };
    }
}
</script>
