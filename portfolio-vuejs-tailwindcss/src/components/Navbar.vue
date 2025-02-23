<script setup>
import Menu from '../../public/assets/Menu.vue';
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <nav class="sticky top-0 left-0 w-full bg-white shadow-md flex justify-between items-center p-5 md:p-10 z-50">
    <h1 class="text-2xl md:text-4xl font-bold">Bácskai Péter</h1>


    <div class="md:hidden">
      <button @click="menuOpen = !menuOpen" class="p-2 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M3 12h18m-18 6h18" />
        </svg>
      </button>
    </div>


    <ul :class="menuOpen ? 'flex' : 'hidden'"
        class="absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 p-5 md:p-0 shadow-md md:shadow-none">
      <li class="hover:underline cursor-pointer">Home</li>
      <li class="hover:underline cursor-pointer">Rólam</li>
      <li class="hover:underline cursor-pointer">Projektek</li>
      <li class="hover:underline cursor-pointer">Kapcsolat</li>
    </ul>
  </nav>
</template>

  
<script>
export default {
  data() {
    return { menuOpen: false };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>
<style lang="">
    
</style>