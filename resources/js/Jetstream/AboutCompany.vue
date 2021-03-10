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
                <span class="">
                    О КОМПАНИИ
                </span>
            </div>
            <button
                v-on:click="showAboutCompany = !showAboutCompany"
                class="text-white"
            >
                <svg
                    v-if="!showAboutCompany"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                    />
                </svg>
                <svg
                    v-if="showAboutCompany"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                >
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
                    Компания "Белый Парус" предоставляет комплексное
                    обслуживание в сегменте HoReCa и B2B. В нашем ассортименте:
                    профессиональные моющие средства для всех типов
                    поверхностей, хозяйственные товары, бумажная продукция,
                    барная продукция, одноразовая пищевая упаковка и другое.
                </span>
                <div
                    class="py-3 bg-white flex items-center justify-between mb-2"
                >
                    <div class="text-black inline-flex space-x-10 items-center">
                        <span class="">
                            С нами сотрудничают лучшие
                        </span>
                    </div>
                    <button
                        v-on:click="showPartners = !showPartners"
                        class="text-black"
                    >
                        <svg
                            v-if="!showPartners"
                            class="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                            />
                        </svg>
                        <svg
                            v-if="showPartners"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="pl-20 bg-white" v-show="showPartners">
                <div class="grid gap-4 grid-cols-4">
                    
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import JetApplicationLogo from "@/Jetstream/ApplicationLogo";

export default {
    components: {
        JetApplicationLogo
    },
    data() {
        return {
            showAboutCompany: false,
            showPartners: false
        };
    }
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
</style>
