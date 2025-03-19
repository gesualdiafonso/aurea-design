<script setup>
import { RouterLink } from 'vue-router';
import ButtonContact from '../Ui/ButtonContact.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
    <header class="bg-primary h-auto w-full mx-auto p-4 flex justify-between items-center relative">
        <RouterLink to="/" class="w-1/3">
            <div class="flex items-center gap-1">
                <h1 class="text-white text-4xl font-yantramanav font-semibold tracking-wide">
                    AUREA
                </h1>
                <div class="flex flex-col text-white font-poppins text-sm font-light leading-none">
                    <span>Design</span>
                    <span>Studio</span>
                </div>
            </div>
        </RouterLink>

        <!-- Menu Hamburguesa para SM-LG -->
        <button @click="toggleMenu" class="lg:hidden text-white">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Menu Mobile -->
        <div v-if="isMenuOpen" class="lg:hidden fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out">
            <div class="flex flex-col h-full p-4">
                <div class="flex justify-between items-center">
                    <RouterLink to="/" class="w-1/3" @click="toggleMenu">
                        <div class="flex items-center gap-1">
                            <h1 class="text-white text-4xl font-yantramanav font-semibold tracking-wide">
                                AUREA
                            </h1>
                            <div class="flex flex-col text-white font-poppins text-sm font-light leading-none">
                                <span>Design</span>
                                <span>Studio</span>
                            </div>
                        </div>
                    </RouterLink>
                    <button @click="toggleMenu" class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav class="flex-1 flex items-center justify-center">
                    <ul class="flex flex-col gap-8 text-left font-poppins text-2xl text-white">
                        <li><RouterLink to="/" @click="toggleMenu" active-class="active" exact-active-class="excact-active" class="border-white hover:text-secondary">Home</RouterLink></li>
                        <li><RouterLink to="/about" @click="toggleMenu" class="hover:text-secondary">About</RouterLink></li>
                        <li><RouterLink to="/service" @click="toggleMenu" class="hover:text-secondary">Service</RouterLink></li>
                        <li><RouterLink to="/projects" @click="toggleMenu" class="hover:text-secondary">Projects</RouterLink></li>
                        <li class="mt-4"><ButtonContact @click="toggleMenu" /></li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- Menu Desktop -->
        <nav class="hidden lg:flex w-full flex-wrap text-white">
            <ul class="flex flex-row justify-between p-1 my-1 w-2/3 font-poppins text-lg">
                <li><RouterLink to="/" active-class="active" exact-active-class="excact-active" class="hover:text-secondary">Home</RouterLink></li>
                <li><RouterLink to="/about" class="hover:text-secondary">About</RouterLink></li>
                <li><RouterLink to="/service" class="hover:text-secondary">Service</RouterLink></li>
                <li><RouterLink to="/projects" class="hover:text-secondary">Projects</RouterLink></li>
            </ul>
        </nav>
        <div class="hidden lg:block">
            <ButtonContact />
        </div>
    </header>
</template>