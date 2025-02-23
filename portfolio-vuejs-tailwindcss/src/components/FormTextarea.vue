<script setup>
const {modelValue, label, placeholder, rows, error} = defineProps(['modelValue', 'label', 'placeholder', 'rows', 'error']);

const emit = defineEmits(['update:modelValue']);

const updateValue = ($event) => {
    emit('update:modelValue',$event.target.value);
};

</script>