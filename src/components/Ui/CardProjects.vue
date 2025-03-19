<script setup>
import interioImg from '../../../public/assets/homeSet/exterior-dos.jpg'
import exteriorImg from '../../../public/assets/homeSet/exterior-uno.jpg'
import homeImg from '../../../public/assets/homeSet/exterior-tres.jpg'

// Data for img, title and msg

const items = [
    {
        img: interioImg,
        title: "High-End residential design",
        message: "Transform your living space into a luxurious retreat"
    },
    {
        img: exteriorImg,
        title: "High-End residential design",
        message: "Transform your living space into a luxurious retreat"
    },
    {
        img: homeImg,
        title: "High-End residential design",
        message: "Transform your living space into a luxurious retreat"
    }
]
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-12">
        <div v-for="(item, index) in items" :key="index" class="flex flex-col mb-8 bg-[#F2F9FF]">   
            <div class="w-full mb-4">
                <img :src="item.img" alt="" class="w-full h-50 object-cover">
            </div>
            <div class="mt-2 mb-4 px-3">
                <h3 class="font-bold font-poppins text-[#113912] text-xl">{{ item.title }}</h3>
                <p class="text-md mt-3">{{ item.message }}</p>
            </div>
        </div>
    </div>
</template>