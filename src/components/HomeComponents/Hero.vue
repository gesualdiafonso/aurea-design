<script setup>
import { RouterLink } from 'vue-router';
import heroImg from '../../../public/assets/homeSet/HeroImg.jpg'
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(window.innerWidth < 768);
const isScrolling = ref(false);

const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
};

const handleScroll = () => {
    isScrolling.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll); 
});

</script>

<template>
    <div class="bg-primary text-white w-full flex flex-wrap flex-col lg:flex-row relative h-screen">
        <div class="w-full flex justify-center items-center">
            <div class="w-1/2" v-show="!isMobile"></div>
            <div class="w-full lg:w-2/3">
                <img 
                    :src="heroImg" 
                    alt="Exterior Home"
                    class="w-full opacity-50 h-screen bg-cover object-cover"
                >
            </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col items-baseline absolute top-1/4 m-auto left-10 md:left-30 lg:left-47">
            <div class="flex flex-row justify-center items-end">
                <h2 :class="[
                    'text-4xl uppercase font-yantramanav animate__animated',
                    isScrolling ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
                ]">Aurea</h2>
                <div>
                    <span :class="[
                        'text-lg font-light font-poppins animate__animated',
                        isScrolling ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
                    ]">Desing Studio</span>
                </div>
            </div>
            <h3 :class="[
                'font-bold text-4xl w-3/4 animate__animated',
                isScrolling ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
            ]">Architecture & Design, elevate your creation</h3>
            <RouterLink to="/service">
                <div :class="[ 
                    'mt-10 bg-gray-900 w-45 text-center p-2 uppercase font-bold text-xs animate__animated',
                    isScrolling ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
                    ]"><span>View Service</span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
