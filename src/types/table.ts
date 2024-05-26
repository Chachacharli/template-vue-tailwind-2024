import type { Ref } from 'vue'

export interface Header {
  label: string
  key: string
}

export interface Pagination {
  currentPage: number
  nextPage: number
  prevPage: number
  totalObjects: number
  totalPages: number
}

export interface TableLite {
  headers: Header[]
  items: Array<any>
  pagination?: Ref<Pagination>
}
