<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-slate-50 border-collapse">
      <thead class="text-xs text-slate-50 uppercase">
        <tr>
          <th v-for="item in headers" :key="item.key" class="px-6 py-3">
            <div class="d-flex">
              <span>{{ item.label }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in items"
          :key="idx"
          class="hover:bg-shark-800 cursor-pointer border-b border-white"
        >
          <template v-for="td in headers" :key="td.key">
            <td class="px-6 py-4" v-if="$slots[`cell-${td.key}`]">
              <slot :name="`cell-${td.key}`" :item="item" />
            </td>
            <td class="px-6 py-4" v-else>{{ item[td.key] }}</td>
          </template>
        </tr>
        <tr v-if="items?.length == 0" class="hover:bg-shark-800 border-b border-white">
          <td class="px-6 py-4" :colspan="headers.length">
            {{ $t('notResultsFound') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { TableLite } from '@/types/table'

defineProps<TableLite>()
</script>
<style scoped>
.border-collapse tr {
  border-bottom: 1px solid rgba(125, 151, 179, 0.3);
}
</style>
