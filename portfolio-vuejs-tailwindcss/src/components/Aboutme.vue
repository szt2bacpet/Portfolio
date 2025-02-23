<template>
    <section class="relative max-w-5xl mx-auto p-8">
      <!-- Slide konténer -->
      <div class="overflow-hidden">
        <!-- Profil slide (Slide 0) -->
        <div v-show="currentSlide === 0" class="transition duration-300">
          <div class="flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-lg p-8 gap-10">
            <div class="w-56 h-56 rounded-full overflow-hidden flex items-center justify-center mb-6 lg:mb-0">
              <img 
                src="/public/assets/bleh.png" 
                class="w-full h-full object-cover" 
                alt="Profilkép"
                style="width: 214px; height: 214px;"
              >
            </div>
            <div class="space-y-6 max-w-3xl w-full">
              <h2 class="text-3xl font-bold text-gray-800">Rólam</h2>
              <p class="text-gray-600 text-lg leading-relaxed text-justify">
                <!-- Rövid bemutatkozás -->
              </p>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="text-gray-800 font-medium text-lg">Bácskai Péter</span>
                </div>
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-gray-800 font-medium text-lg">+36 50 105 6955</span>
                </div>
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-800 font-medium text-lg">main@bacskaipeter.xyz</span>
                </div>
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-800 font-medium text-lg">Születési év: 2003</span>
                </div>
                <div class="flex items-center gap-4">
                  <svg class="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-800 font-medium text-lg">Szeged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div v-show="currentSlide === 1" class="transition duration-300 bg-white shadow-xl rounded-lg p-8">
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-gray-800">Képességek</h2>
            <p class="text-gray-700 text-lg leading-relaxed text-justify">
              Szoftverfejlesztőként C# nyelven dolgoztam objektum-orientált programozás,<br> desktop alkalmazások és backend fejlesztés területén. Emellett tapasztalatot<br> szereztem Vue.js frontend fejlesztésben és SQL adatbázis kezelésében, illetve <br>több GitHub projektben is részt vettem. Rendszerkarbantartóként Windows <br>rendszert ismerem, jelenleg pedig Linux operációs rendszerekkel bővítem <br>tudásomat. Angol nyelvtudásom B2-es szinten áll.
            </p>
          </div>
        </div>
  
        <div v-show="currentSlide === 2" class="transition duration-300 bg-white shadow-xl rounded-lg p-8">
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-gray-800">Hobbik</h2>
            <p class="text-gray-700 text-lg leading-relaxed text-justify">
              Szabadidőmben szívesen olvasok japán Light Noveleket, melyek <br>inspirálnak és kreatív ötleteket adnak. Rajzolás közben kifejezhetem<br> művészi oldalamat, míg a sakk segít fejleszteni stratégiai és logikai<br> gondolkodásomat. Emellett a túrázás és a természet közelsége feltölt <br>energiával, lehetőséget adva az új helyek felfedezésére.
            </p>
          </div>
        </div>
      </div>
  
      <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0, 
      };
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % 3;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + 3) % 3;
      },
    },
  };
  </script>
  
  <style scoped>
  @media (max-width: 640px) {
    .w-56 {
      width: 140px;
      height: 140px;
    }
  }
  </style>
  