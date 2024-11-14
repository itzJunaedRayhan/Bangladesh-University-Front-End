export type DropdownItem = {
  name: string
  subItems?: string[]
}

export type DropdownProps = {
  label: string
  items: DropdownItem[]
}
