<template>
  <div><InputSelect v-model="valor" :options="options" /></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputSelect from '@/components/inputs/InputSelect.vue'

import type { OptionItem } from '@/types/select';

const valor = ref<OptionItem>()
const options:OptionItem[] = ['asdf', 'aasdf']
</script>
