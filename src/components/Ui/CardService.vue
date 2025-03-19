<script setup>
import residentialImg from '../../../public/assets/homeSet/present-apt.jpg'
import dptImg from '../../../public/assets/homeSet/departament-apt.jpg'
import interioImg from '../../../public/assets/homeSet/exterior-apt.jpg'

import LearnComponent from './LearnComponent.vue'

const items = [
    {
        img: residentialImg,
        title: "High-End residential design",
        message: "Transform your living space into a luxurious retreat"
    },
    {
        img: dptImg,
        title: "High-End residential design",
        message: "Transform your living space into a luxurious retreat"
    },
    {
        img: interioImg,
        title: "High-End residential design",
        message: "Transform your living space into a luxurious retreat"
    },
]
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-12">
        <div v-for="(item, index) in items" :key="index" class="flex flex-col mb-8">   
            <div class="w-full mb-4">
                <img :src="item.img" alt="" class="w-full h-70 object-cover">
            </div>
            <div class="mt-2 mb-4 px-3">
                <h3 class="font-bold font-poppins text-[#113912] text-xl">{{ item.title }}</h3>
                <p class="text-md mt-3">{{ item.message }}</p>
                <LearnComponent class="mt-6"/>
            </div>
        </div>
    </div>
</template>