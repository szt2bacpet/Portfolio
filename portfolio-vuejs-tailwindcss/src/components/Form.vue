<script setup>
import {ref, reactive, computed} from 'vue';
import {sendEmail} from '../services/emailService.js';
import FormInput from './FormInput.vue';
import FormTextarea from './FormTextarea.vue';

const title = 'Vue Contact Form';
const showForm =ref(true);
const successMessage = ref('')

const initialContactForm ={
  name: '',
  subject: '',
  email: '',
  message: '',
  file: null
  };

  const initialtouched = {
    name: false,
    subject: false,
    email: false,
    message: false,
  };

  const contactForm = reactive({...initialContactForm});
  const touched = reactive({...initialtouched});

  function setTouched(field){
    touched[field] = true;
  }

 const errors = reactive({
  name: computed(()=> (!contactForm.name && touched.name) ? 'Név megadása szükséges' : ''),
  subject: computed(()=> (!contactForm.subject && touched.subject) ? 'Tárgy magadása szükséges' : ''),
  email: computed(()=> {
    if(touched.email) {
      if (!contactForm.email) return 'Email megadása szükséges';
      if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(contactForm.email)) return 'Valid email címet adjon meg';
    }
    return '';
  
 }),
 message: computed(()=> (!contactForm.message && touched.message) ? 'Üzenet magadása szükséges' : '')
});

const isFormValid = computed(()=>{
  const allFieldsTouched = Object.values(touched).every(t => t);
  const noErrors = !Object.values(errors).some(e => e);
  
  return allFieldsTouched && noErrors;
});

function onFileSelected($event){
  contactForm.file = $event.target.files[0];
}


function resetForm(){
  setTimeout(()=> {
    successMessage.value = '';
    showForm.value = true;
    Object.assign(contactForm, initialContactForm);
    Object.assign(touched, initialtouched);
  }, 5000);
}

async function onSubmit() {
  if (isFormValid.value) {
    const formData = new FormData();
    formData.append('name', contactForm.name);
    formData.append('subject', contactForm.subject);
    formData.append('email', contactForm.email);
    formData.append('message', contactForm.message);
    
    if (contactForm.file) {
      formData.append('file', contactForm.file, contactForm.file.name);
    }
    
    try {
      const response = await sendEmail(formData);
      if (response.status === 200) {
        successMessage.value = response.data.message;
        showForm.value = false;
        resetForm();
      } else {
        console.error('Nem sikerült elküldeni az emailt:', response);
      }
    } catch (error) {
      console.error('Hiba az email elküldése során:', error);
    }
  } else {
    console.log('Az űrlap nem megfelelő');
  }
}

</script>

<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center">{{ title }}</h2>
      
      <form @submit.prevent="onSubmit" class="space-y-4">
        <FormInput 
          label="Név" 
          v-model="contactForm.name" 
          placeholder="Add meg a neved" 
          :error="errors.name" 
          @blur="setTouched('name')" 
          class="w-full"
        />
        
        <FormInput 
          label="Tárgy" 
          v-model="contactForm.subject" 
          placeholder="Add meg az üzenet tárgyát" 
          :error="errors.subject" 
          @blur="setTouched('subject')" 
          class="w-full"
        />
        
        <FormInput 
          label="Email" 
          type="email" 
          v-model="contactForm.email" 
          placeholder="Add meg az email címed" 
          :error="errors.email" 
          @blur="setTouched('email')" 
          class="w-full"
        />
        
        <FormTextarea 
          label="Üzenet" 
          v-model="contactForm.message" 
          placeholder="Írd be az üzeneted" 
          :rows="5" 
          :error="errors.message" 
          @blur="setTouched('message')" 
          class="w-full"
        />
        
        <div>
          <label class="block font-medium text-gray-700">Fájl feltöltése (opcionális)</label>
          <input 
            type="file" 
            @change="onFileSelected" 
            class="mt-2 w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button 
          type="submit" 
          :disabled="!isFormValid" 
          class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          Küldés
        </button>
      </form>
      
      <p v-if="successMessage" class="mt-4 text-center text-green-600 font-semibold">
        {{ successMessage }}
      </p>
    </div>
  </template>
  