import { NavigationButtonType } from "../type"

export interface NavigationBarItemProps<T extends NavigationButtonType> {
  title: T
  icon: string
  selectedIcon: string
  navigationURL: string
}
