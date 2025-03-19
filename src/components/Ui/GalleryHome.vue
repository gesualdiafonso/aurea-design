<script setup>
import { ref } from "vue"

import interiorDesign from "../../../public/assets/homeSet/interior-uno.jpg"
import frenchDesign from "../../../public/assets/homeSet/interior-dos.jpg"
import homeArch from "../../../public/assets/homeSet/exterior-home.jpg"
import homeFarm from "../../../public/assets/projectSet/project-home.jpg"

const galleryRef = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0)

const items =[
    {
        image: interiorDesign,
        title: "",
    },
    {
        image: frenchDesign,
        title: "",
    },
    {
        image: homeArch,
        title: "",
    },
    {
        image: homeFarm,
        title: "",
    },
];

// Iniciando o arraste
const onDrag = (e) => {
    if(!isDragging.value) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.value) *1.5; //Ajuste de velocidade
    galleryRef.value.scrollLeft = scrollLeft.value - walk
}

//Final de arraste

const stopDrag = () => {
    isDragging.value = false;
}

// const scrollGallery = (direction) => {
//     if (galleryRef.value) {
//         const scrollAmount = 300;
//         galleryRef.value.scrollBy({
//             left: direction === "left" ? -scrollAmount : scrollAmount,
//             behavior: "smooth",
//         })
//     }
// }
</script>

<template>
    <div class="w-full p-20">
        <div>
            <h2 class="text-4xl font-poppins font-extralight leading-7 mb-5 text-[#F2F9FF]">Our Gallery</h2>
            <div
                ref="galleryRef"
                class=" w-full flex flex-row overflow-x-scroll scroll-smooth no-scrollbar cursor-grab"
                @mousedown="startDrag"
                @mousemove="onDrag"
                @mouseup="stopDrag"
                @mouseleave="stopDrag"
                @touchstart="startDrag"
                @touchmove="onDrag"
                @touchend="stopDrag"
            >
                <div v-for="(item, index) in items" :key="index" class="mx-3 flex-shrink-0 w-100 h-auto">
                    <div class="w-full">
                        <img :src="item.image" :alt="item.title" class="w-100 h-60">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>