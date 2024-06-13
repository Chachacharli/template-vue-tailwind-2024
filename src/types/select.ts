export type OptionItem = string | number | { value: string | number; text: string }

export interface SelectProps {
  modelValue: OptionItem | undefined
  options: OptionItem[]
  placeholder?: string
  label?: string
}