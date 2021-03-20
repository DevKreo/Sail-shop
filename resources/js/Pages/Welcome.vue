<template>
<app-layout>
    <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard
        </h2>
    </template>

    <div class="py-6">
        <div class="w-5/6 mx-auto sm:w-5/6 sm:mx-auto lg:w-5/6 lg:mx-auto">
            <div class="bg-white overflow-hidden sm:rounded-lg">
                <aboutCompany />
                <loyaltyProgram />
                <catalog />
                <topPositions />
                <sphere />
                <ourClients />
                <cooperation />
                <shippingAndPayment />
                <requestСall />
                <ourСontacts />
            </div>
        </div>
    </div>
</app-layout>
</template>

<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
    border-color: #edf2f7;
    border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
    color: #718096;
    color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
    color: #4a5568;
    color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
    color: #1a202c;
    color: rgba(26, 32, 44, var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-gray-800 {
        background-color: #2d3748;
        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
    }

    .dark\:bg-gray-900 {
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
    }

    .dark\:border-gray-700 {
        border-color: #4a5568;
        border-color: rgba(74, 85, 104, var(--tw-border-opacity));
    }

    .dark\:text-white {
        color: #fff;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .dark\:text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }
}
</style>

<script>
import AppLayout from '@/Layouts/AppLayout'
import AboutCompany from '@/Jetstream/AboutCompany'
import LoyaltyProgram from '@/Jetstream/LoyaltyProgram'
import Catalog from '@/Jetstream/Catalog'
import TopPositions from '@/Jetstream/TopPositions'
import Sphere from '@/Jetstream/Sphere'
import OurClients from '@/Jetstream/OurClients'
import Cooperation from '@/Jetstream/Cooperation'
import ShippingAndPayment from '@/Jetstream/ShippingAndPayment'
import RequestСall from '@/Jetstream/RequestСall'
import OurСontacts from '@/Jetstream/OurСontacts'
export default {
    components: {
        AppLayout,
        AboutCompany,
        LoyaltyProgram,
        Catalog,
        TopPositions,
        Sphere,
        OurClients,
        Cooperation,
        ShippingAndPayment,
        RequestСall,
        OurСontacts,
    },
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    }
}
</script>
