<template>
  <div class="m-2"><InputSelect v-model="valor" :options="options" /></div>
  <div class="m-2">
    <InputRadix v-model="user.name" /></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSelect from '@/components/inputs/InputSelect.vue'
import InputRadix from '@/components/inputs/InputRadix.vue'

import type { OptionItem } from '@/types/select'

const valor = ref<OptionItem>()
const user = ref({
  name: ''
})
const options: OptionItem[] = ['asdf', 'aasdf']
</script>
