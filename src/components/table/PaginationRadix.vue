<template>
  <PaginationRoot
    @update:page="handlerPage"
    :total="modelValue.totalPages"
    :sibling-count="1"
    :items-per-page="1"
    show-edges
    :default-page="modelValue.currentPage"
    class="my-2"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1 text-slate-50">
      <PaginationFirst
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded bg-transparent hover:bg-shark-800 active:bg-cello-800"
      >
        <DoubleArrowLeft></DoubleArrowLeft>
      </PaginationFirst>
      <PaginationPrev
        class="w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded bg-transparent hover:bg-shark-800 active:bg-cello-800"
      >
        <ArrowLeftPagination />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          :class="[
            'w-9 h-9  rounded transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 data-[selected]:bg-cello-800'
          ]"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="w-9 h-9 flex items-center justify-center"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext
        class="w-9 h-9 flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded bg-transparent hover:bg-shark-800 active:bg-cello-800"
      >
        <ArrowRigthPagination />
      </PaginationNext>
      <PaginationLast
        class="w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded bg-transparent hover:bg-shark-800 active:bg-cello-800"
      >
        <DoubleArrowRigth />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot
} from 'radix-vue'

import DoubleArrowLeft from '@/assets/svg/DoubleArrowLeft.vue'
import ArrowLeftPagination from '@/assets/svg/ArrowLeftPagination.vue'
import ArrowRigthPagination from '@/assets/svg/ArrowRigthPagination.vue'
import DoubleArrowRigth from '@/assets/svg/DoubleArrowRigth.vue'

import type { PaginationRadixObject } from '@/types/pagination'

// Define las props con sus tipos
const props = withDefaults(defineProps<{ modelValue: PaginationRadixObject }>(), {
  modelValue: () => ({
    totalPages: 1,
    currentPage: 1
  })
})

// Define los eventos que emite el componente hijo
const emit = defineEmits<{
  (e: 'update:modelValue', value: PaginationRadixObject): void
}>()

const handlerPage = (page: number) => {
  // Actualiza el objeto modelValue y emite el evento
  const newModelValue: PaginationRadixObject = {
    ...props.modelValue,
    currentPage: page
  }
  emit('update:modelValue', newModelValue)
}
</script>
