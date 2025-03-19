<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const irParaContato = () => {
    router.push('/contact'); 
}
</script>

<template>
    <div>
        <button 
            @click="irParaContato"
            class="cursor-pointer text-white border border-s-gray-300 px-8 py-1 font-poppins font-light rounded-md hover:bg-secondary transition duration-300"
        >
            Contact
        </button>
    </div>
</template>