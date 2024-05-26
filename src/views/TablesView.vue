<template>
  <div>
    <div>
      <TableLite :headers="Headers" :items="Items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableLite from '@/components/table/TableLite.vue'

const Headers = [
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

const Items = [
  {
    product_name: 'Apple MacBook Pro 17"',
    color: 'Silver',
    category: 'Laptop',
    price: '$2999'
  }
]
</script>
