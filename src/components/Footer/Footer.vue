<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <footer class="w-full h-auto flex flex-col items-center justify-center pt-10 pb-10 px-10 bg-[#121212] text-[#F2F9FF]">
        <div class="w-full flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-between my-4">
            <!-- Company information -->
            <div class="hidden lg:flex flex-col gap-2">
                <span>• Email address company</span>
                <span>• Location on link map</span>
            </div>
            <!-- maps information of the site -->
            <div class="hidden lg:flex flex-row gap-2 cursor-pointer">
                <RouterLink class="hover:text-gray-300 hover:font-bold transition-all duration-300" to="/">Home</RouterLink>
                <RouterLink class="hover:text-gray-300 hover:font-bold transition-all duration-300" to="/about">About</RouterLink>
                <RouterLink class="hover:text-gray-300 hover:font-bold transition-all duration-300" to="/service">Service</RouterLink>
                <RouterLink class="hover:text-gray-300 hover:font-bold transition-all duration-300" to="/projects">Projects</RouterLink>
            </div>
            <!-- brand name and logo -->
            <div>
                <div class="flex items-center gap-1">
                    <h1 class="text-white text-4xl font-yantramanav font-semibold tracking-wide">
                        AUREA
                    </h1>
                    <div class="flex flex-col text-white font-poppins text-sm font-light leading-none">
                        <span>Design</span>
                        <span>Studio</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-2 mt-2 mb-1">
                <span>Todos os direitos reservados |</span>
                <span>Política de privacidade |</span>
                <span>&#169; Aurea Design Studio 2025</span>
        </div>
        <span>Desenvolvido por <a href="#">Afonso Gesualdi</a></span>
    </footer>
</template>