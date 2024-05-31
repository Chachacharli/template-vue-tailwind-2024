<template>
  <div>
    <div>
      <TableLite :headers="Headers" :items="ItemsLaptops" />
      <PaginationRadix v-model="pagination" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TableLite from '@/components/table/TableLite.vue'
import PaginationRadix from '@/components/table/PaginationRadix.vue'

import type { Header } from '@/types/table'
import { ItemsLaptops } from '@/data/mocks/tableMokcs'

// Define una interfaz para el estado de paginación
interface PaginationRadixObject {
  totalPages: number
  currentPage: number
}

// Define una ref con el tipo de la interfaz
const pagination = ref<PaginationRadixObject>({
  totalPages: 5,
  currentPage: 1
})

const Headers: Header[] = [
  {
    label: 'PRODUCT NAME',
    key: 'product_name'
  },
  {
    label: 'COLOR',
    key: 'color'
  },
  {
    label: 'CATEGORY',
    key: 'category'
  },
  {
    label: 'PRICE',
    key: 'price'
  }
]
</script>
