<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
