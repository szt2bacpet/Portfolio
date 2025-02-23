<template>
  <header class="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 h-auto md:h-[650px] bg-white text-black rounded-lg shadow-lg overflow-hidden px-6 md:px-10 py-10 md:py-0">
    <div class="max-w-2xl">
      <h1 class="text-4xl md:text-6xl font-bold">Üdvözöllek weboldalamon</h1>
      <p class="text-lg md:text-2xl leading-relaxed mt-2">
        <span ref="typewriter"></span>
        <span class="inline-block font-bold text-2xl animate-blink">|</span>
      </p>

      <div class="mt-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
        <a 
          href="/Bácskai Péter_motivációs levél.doc" 
          download 
          class="inline-flex items-center justify-center w-50 md:w-auto bg-[#2c3e50] text-white py-3 px-6 rounded-full text-lg md:text-xl font-medium hover:bg-[#34495e] transition"
        >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-5 h-5 mr-2"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M19.5 10.5V6.75a.75.75 
              0 00-.75-.75h-3.75M19.5 10.5l-7.5 7.5M19.5 
              10.5l-7.5-7.5M3 5.25A2.25 2.25 
              0 015.25 3h7.5l7.5 7.5v8.25a2.25 
              2.25 0 01-2.25 2.25H5.25A2.25 
              2.25 0 013 18.75V5.25z"
            />
          </svg>
          
          Motivációs levél
        </a>

        <a 
          href="/Bácskai Péter_önéletrajz.doc" 
          download 
          class="inline-flex items-center justify-center w-50 md:w-auto bg-[#2c3e50] text-white py-3 px-6 rounded-full text-lg md:text-xl font-medium hover:bg-[#34495e] transition"
        >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-5 h-5 mr-2"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M3 16.5v2.25c0 .414.336.75.75.75h16.5c.414 
              0 .75-.336.75-.75V16.5M7.5 10.5 12 15m0 0 
              4.5-4.5M12 15V3"
            />
          </svg>
          Önéletrajz
        </a>
      </div>
    </div>

    <div class="w-[150px] md:w-[250px] lg:w-[300px]">
      <img 
        src="/assets/profile.png" 
        class="w-full h-full object-cover rounded-full" 
        alt="Profilkép"
      >
    </div>
  </header>
  
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const typewriter = ref(null);
    const texts = ["Rendszerkarbantartó", "Szoftverfejlesztő és -tesztelő"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!typewriter.value) return;
      const currentText = texts[index];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typewriter.value.innerText = currentText.substring(0, charIndex);

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    onMounted(() => {
      typeEffect();
    });

    return { typewriter };
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-blink {
    @apply animate-[blink_0.7s_infinite];
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
