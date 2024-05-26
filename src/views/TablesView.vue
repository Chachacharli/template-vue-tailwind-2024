<template>
  <div>
    <div>
      <TableLite :headers="Headers" :items="ItemsLaptops" />
      <PaginationRadix />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableLite from '@/components/table/TableLite.vue'

import type { Header } from '@/types/table'
import { ItemsLaptops } from '@/data/mocks/tableMokcs'
import PaginationRadix from '@/components/table/PaginationRadix.vue'

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
