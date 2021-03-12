<template>
    <div>
        <div class="min-h-screen">
            <div class="flex">
                <div class="flex-initial">
                    <div class="flex-shrink-0 flex items-center">
                        <inertia-link :href="route('dashboard')">
                            <div
                                class="object-contain block h-24 w-24 bg-logo-texture"
                            ></div>
                        </inertia-link>
                    </div>
                </div>
                <div class="self-center ml-5">
                    <div class="flex-shrink-0 flex items-center">
                        <span class="self-end font-black">
                            HORECA
                        </span>
                    </div>
                </div>
                <nav class="bg-white flex-auto">
                    <!-- Primary Navigation Menu -->
                    <div class="mx-auto">
                        <div class="flex justify-between h-24">
                            <div class="flex mx-auto">
                                <!-- Navigation Links -->
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('dashboard')"
                                        :active="route().current('dashboard')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <button
                                        :href="route('admin')"
                                        :active="route().current('admin')"
                                        class="rounded-full h-10 mt-8 w-10 bg-black border-0 flex items-center justify-center focus:bg-red-200 text-white focus-within:text-black"
                                    >
                                        <svg
                                            class="w-9 h-9"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="hidden sm:flex sm:items-center sm:ml-6">
                                <!-- Settings Dropdown -->
                                <div class="ml-3 relative mr-28">
                                    <jet-dropdown align="right" width="48">
                                        <template #trigger>
                                            <span
                                                class="inline-flex rounded-md"
                                            >
                                                <button
                                                    @click="
                                                        showingNavigationDropdown = !showingNavigationDropdown
                                                    "
                                                    class="inline-flex rounded-full items-center bg-black justify-center p-2 rounded-md text-white transition duration-150 ease-in-out"
                                                >
                                                    <svg
                                                        class="h-10 w-10"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            :class="{
                                                                'inline-flex': !showingNavigationDropdown
                                                            }"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <!-- Account Management -->
                                            <div
                                                class="block px-4 py-2 text-xs text-gray-400"
                                            >
                                                Manage Account
                                            </div>

                                            <jet-dropdown-link
                                                :href="route('profile.show')"
                                            >
                                                Profile
                                            </jet-dropdown-link>

                                            <div
                                                class="border-t border-gray-100"
                                            ></div>

                                            <!-- Authentication -->
                                            <form @submit.prevent="logout">
                                                <jet-dropdown-link as="button">
                                                    Logout
                                                </jet-dropdown-link>
                                            </form>
                                        </template>
                                    </jet-dropdown>
                                </div>
                            </div>

                            <!-- Hamburger -->
                            
                        </div>
                    </div>

                    <!-- Responsive Navigation Menu -->
                    <div
                        :class="{
                            block: showingNavigationDropdown,
                            hidden: !showingNavigationDropdown
                        }"
                        class="sm:hidden"
                    >
                        <div class="pt-2 pb-3 space-y-1">
                            <jet-responsive-nav-link
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                            >
                                Dashboard
                            </jet-responsive-nav-link>
                            <jet-responsive-nav-link
                                :href="route('admin')"
                                :active="route().current('admin')"
                            >
                                Admin
                            </jet-responsive-nav-link>
                        </div>

                        <!-- Responsive Settings Options -->
                        <div class="pt-4 pb-1 border-t border-gray-200">
                            <div class="flex items-center px-4">
                                <div
                                    v-if="
                                        $page.props.jetstream
                                            .managesProfilePhotos
                                    "
                                    class="flex-shrink-0 mr-3"
                                >
                                    <img
                                        class="h-10 w-10 rounded-full object-cover"
                                        :src="
                                            $page.props.user.profile_photo_url
                                        "
                                        :alt="$page.props.user.name"
                                    />
                                </div>

                                <div>
                                    <div
                                        class="font-medium text-base text-gray-800"
                                    >
                                        {{ $page.props.user.name }}
                                    </div>
                                    <div
                                        class="font-medium text-sm text-gray-500"
                                    >
                                        {{ $page.props.user.email }}
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 space-y-1">
                                <jet-responsive-nav-link
                                    :href="route('profile.show')"
                                    :active="route().current('profile.show')"
                                >
                                    Profile
                                </jet-responsive-nav-link>

                                <!-- Authentication -->
                                <form method="POST" @submit.prevent="logout">
                                    <jet-responsive-nav-link as="button">
                                        Logout
                                    </jet-responsive-nav-link>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Page Content -->
            <main class="relative">
                <div
                    class="object-contain block h-full min-h-full w-24 bg-log-texture absolute "
                ></div>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import JetBanner from "@/Jetstream/Banner";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import JetNavLink from "@/Jetstream/NavLink";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";

export default {
    components: {
        JetApplicationMark,
        JetBanner,
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink
    },

    data() {
        return {
            showingNavigationDropdown: false
        };
    },

    methods: {
        switchToTeam(team) {
            this.$inertia.put(
                route("current-team.update"),
                {
                    team_id: team.id
                },
                {
                    preserveState: false
                }
            );
        },

        logout() {
            this.$inertia.post(route("logout"));
        }
    }
};
</script>
