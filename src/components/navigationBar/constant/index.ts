import { NavigationBarItemProps } from "../utils/interface"
import { NavigationButtonType } from "../utils/type"

export const MAIN_NAVIGATION_BAR_LIST: NavigationBarItemProps<
  Exclude<NavigationButtonType, "Notification" | "Search" | "Setting">
>[] = [
  {
    title: "Home",
    icon: "Home",
    selectedIcon: "HomeSelected",
    navigationURL: "/",
  },
  {
    title: "Feed",
    icon: "Feed",
    selectedIcon: "FeedSelected",
    navigationURL: "/feed",
  },
  {
    title: "Post",
    icon: "Post",
    selectedIcon: "PostSelected",
    navigationURL: "/post",
  },
  {
    title: "Ranking",
    icon: "Ranking",
    selectedIcon: "RankingSelected",
    navigationURL: "/ranking",
  },
  {
    title: "Profile",
    icon: "Profile",
    selectedIcon: "ProfileSelected",
    navigationURL: "/profile",
  },
]

export const SIDE_NAVIGATION_BAR_LIST: NavigationBarItemProps<
  Extract<NavigationButtonType, "Notification" | "Search" | "Setting">
>[] = [
  {
    title: "Search",
    icon: "Search",
    selectedIcon: "SearchSelected",
    navigationURL: "/",
  },
  {
    title: "Notification",
    icon: "Notification",
    selectedIcon: "NotificationSelected",
    navigationURL: "/",
  },
  {
    title: "Setting",
    icon: "Setting",
    selectedIcon: "SettingSelected",
    navigationURL: "/",
  },
]
