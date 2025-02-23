<script setup>
const props = defineProps({
    label: String,
    modelValue: String,
    placeholder: String,
    rows: {
        type: Number,
        default: 4
    },
    error: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = ($event) => {
    emit('update:modelValue', $event.target.value);
};
</script>

<template>
    <div class="mb-4">
        <label :for="label" class="block text-gray-700 font-medium mb-2">{{ label }}</label>
        <textarea 
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition 
                   bg-white text-gray-900 border-gray-300 placeholder-gray-400
                   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-500"
            :class="{ 'border-red-500': error }"
            :name="label"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateValue($event)"
            :rows="rows">
        </textarea>
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
</template>
