<script setup>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Timeline from './components/Timeline.vue';
import Aboutme from './components/Aboutme.vue';
import Form from './components/Form.vue';
</script>

<template lang="">
  <div class="p-5 md:p-10 md:px-20 flex flex-col gap-5 bg-white text-black min-h-screen overflow-auto scrollbar">

    <Navbar/>
    <Header/>
    <Aboutme/>
    <Timeline/>
    <Form/>
    <Footer/>
  
  </div>
  

</template>

<script>
export default {
  
}
</script>

<style lang="">
  
</style>
