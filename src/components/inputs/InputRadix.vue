<template>
  <div>
    <input
      :value="modelValue"
      @input="handleInput"
      :class="inputClass"
      :placeholder="placeholder"
      class="text-slate-50 bg-shark-800 text-sm rounded focus:ring-cello-500 focus:border-cello-500 w-full p-2 focus:ring-2 hover:bg-dshark-900"
    />
    <span v-if="status === 'error'" class="text-red-500">Error: {{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

type StatusInput = 'error' | 'null' | 'success'

interface Props {
  modelValue: any
  errorMessage?: string
  placeholder?: string
}

const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue)
const status = ref<StatusInput>('null')

// Computed property to manage input class based on status
const inputClass = computed(() => {
  if (status.value === 'error') return 'border-red-500'
  if (status.value === 'success') return 'border-green-500'
  return 'border-gray-300'
})

// Watch for changes in the prop modelValue and update localValue
watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue
    status.value = 'null'
  }
)

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  localValue.value = input.value
  emits('update:modelValue', localValue.value)
  validateInput(input.value)
}

// Example validation function to update status
const validateInput = (value: any) => {
  if (!value) {
    status.value = 'error'
  } else {
    status.value = 'success'
  }
}
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
  border: 1px solid;
}
.border-green-500 {
  border-color: #48bb78;
}
.border-gray-300 {
  border-color: #d2d6dc;
}
.text-red-500 {
  color: #f56565;
}
.text-green-500 {
  color: #48bb78;
}
</style>
