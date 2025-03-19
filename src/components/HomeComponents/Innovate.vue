<script setup>
import Home from '../../../public/assets/homeSet/InnovatinHome.jpg'
import ButtonComponent from '../Ui/ButtonComponent.vue';
</script>

<template>
    <main class="bg-[#F2F9FF] w-full p-4 lg:p-40 flex flex-col lg:flex-row gap-4 lg:gap-0 h-auto">
        <div class="w-full lg:w-100">
            <img :src="Home" alt="Home from Farm Arg" class="w-full h-80 lg:h-140 bg-cover object-cover">
        </div>
        <div class="w-full lg:w-120 bg-white my-4 lg:my-10 relative lg:absolute lg:ml-50 px-4 lg:px-10 py-2 h-auto">
            <div class="uppercase font-bold text-[#113912] mt-3 lg:mt-5 text-xs"><span>Elevate Your Space</span></div>
            <div class="w-full">
                <h2 class="text-3xl lg:text-4xl font-poppins font-extralight leading-7 mb-6 lg:mb-10">Innovative archietecture & desing</h2>
                <p class="text-md font-yantramanav font-semibold leading-5 mt-6 lg:mt-10 mb-6 lg:mb-10">AUREA Design Studio embodies innovation, sophistication, and perfection  in every project. Specializing in high-end residences, striking  buildings, luxurious interiors, and sophisticated urban planning, we  craft spaces that inspire and elevate. Located in a vibrant locale, our  minimalist and immersive aesthetic utilizes a refined palette of gold,  black, gray, white, and deep green. Our elegant typography and impactful imagery reflect the exclusivity and innovation we bring to each design, ensuring a unique experience for every client.</p>
            </div>
            <ButtonComponent />
        </div>
    </main>
</template>