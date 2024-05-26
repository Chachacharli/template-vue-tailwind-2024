<template>
  <div class="flex items-center gap-4">
    <button
      :disabled="pagination.currentPage === 1"
      @click="goToPreviousPage"
      class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-slate-50 uppercase align-middle transition-all rounded-lg select-none bg-transparent hover:bg-shark-800 active:bg-cello-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-4 h-4 text-slate-50"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        ></path>
      </svg>
      Previous
    </button>
    <div class="flex items-center gap-2">
      <button
        v-for="page in pagination.totalPages"
        :key="page"
        :class="[
          'relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all',
          page === pagination.currentPage
            ? 'bg-cello-800 text-slate-50 shadow-md'
            : 'bg-transparent text-slate-50 hover:bg-shark-800 active:bg-cello-800'
        ]"
        @click="goToPage(page)"
        type="button"
      >
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {{ page }}
        </span>
      </button>
    </div>
    <button
      :disabled="pagination.currentPage === pagination.totalPages"
      @click="goToNextPage"
      class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-slate-50 uppercase align-middle transition-all rounded-lg select-none bg-transparent hover:bg-shark-800 active:bg-cello-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-4 h-4 text-slate-50"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Pagination } from '@/types/table'

const props = defineProps<{ pagination: Ref<Pagination> }>()

const pagination = props.pagination

const goToPage = (page: number) => {
  pagination.value.currentPage = page
  pagination.value.prevPage = page - 1
  pagination.value.nextPage = page + 1
}

const goToPreviousPage = () => {
  if (pagination.value.currentPage > 1) {
    goToPage(pagination.value.currentPage - 1)
  }
}

const goToNextPage = () => {
  if (pagination.value.currentPage < pagination.value.totalPages) {
    goToPage(pagination.value.currentPage + 1)
  }
}
</script>

<style scoped>
.item-navbar.active {
  border-left: solid 4px;
  border-color: #5396de;
}
</style>
