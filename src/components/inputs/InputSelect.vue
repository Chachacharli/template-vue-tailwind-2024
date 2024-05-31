<template>
  <SelectRoot v-model="localValue">
    <SelectTrigger
      class="inline-flex w-[160px] text-ellipsis overflow-hidden items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-dshark-950 border-[1px] border-dshark-500 text-slate-50 shadow-[0_2px_10px] shadow-black/10 hover:bg-dshark-800 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
      aria-label="Customise options"
    > 
      <SelectValue class="text-ellipsis overflow-hidden" :placeholder="placeholderText" />
      <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] bg-dshark-950 rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
        :side-offset="5"
      >
        <SelectScrollUpButton
          class="flex items-center justify-center h-[25px] bg-shark-800 text-slate-500 cursor-default"
        >
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectLabel
            v-if="label"
            class="px-[25px] text-xs leading-[25px] text-mauve11 text-slate-50"
          >
            {{ label }}
          </SelectLabel>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              class="text-[13px] hover:bg-dshark-800 cursor-pointer leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              :value="optionValue(option).toString()"
            >
              <SelectItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center text-slate-50"
              >
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText class="text-slate-50">
                {{ optionText(option) }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton
          class="flex items-center justify-center h-[25px] bg-shark-800 text-slate-500 cursor-default"
        >
          <Icon icon="radix-icons:chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, toRefs, watch, computed } from 'vue'
import { Icon } from '@iconify/vue'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from 'radix-vue'

import type { SelectProps, OptionItem } from '@/types/select'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Define props
const props = defineProps<SelectProps>()
const emits = defineEmits(['update:modelValue'])

const { modelValue, options, placeholder } = toRefs(props)
const localValue = ref(modelValue.value)
const placeholderText = computed(() => placeholder?.value || t('selectAnOption'))

// Helper functions to extract value and text from option
const optionValue = (option: OptionItem) => (typeof option === 'object' ? option.value : option)
const optionText = (option: OptionItem) =>
  typeof option === 'object' ? option.text : option.toString()

// Watch for changes in localValue and emit update to parent
watch(localValue, (newValue) => {
  const selectedOption = options.value.find((option) => optionValue(option) === newValue)
  emits('update:modelValue', selectedOption || newValue)
})

// Watch for changes in modelValue from parent and update localValue
watch(modelValue, (newValue) => {
  if (newValue) localValue.value = optionValue(newValue)
})
</script>
