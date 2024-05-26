<template>
  <div class="my-3">
    <PaginationRoot
      @update:page="handlerPage"
      :total="50"
      :sibling-count="1"
      show-edges
      :default-page="1"
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
          <
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
          >
        </PaginationNext>
        <PaginationLast
          class="w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded bg-transparent hover:bg-shark-800 active:bg-cello-800"
        >
          >>
        </PaginationLast>
      </PaginationList>
    </PaginationRoot>
  </div>
</template>

<script setup lang="ts">
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

const handlerPage = (item: any) => {
  console.log(item)
}
</script>
