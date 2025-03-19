<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goToContact = () => {
    router.push('/contact')
}
</script>

<template>
    <button 
        @click="goToContact"
        class="border-1 border-s-[#004D40] py-1 px-8 mb-5 rounded-md text-md text-[#004D40]"
    >
        Contact
    </button>
</template>