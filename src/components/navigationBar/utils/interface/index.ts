import { NavigationButtonType } from "../type"

export interface NavigationBarItemProps<T extends NavigationButtonType> {
  title: string
  icon: T
  path: string
}
