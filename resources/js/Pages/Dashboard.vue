<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
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
    }
</script>
