import { NavigationBarItemProps } from "../utils/interface"
import { NavigationButtonType } from "../utils/type"

export const SIDE_NAVIGATION_BAR_LIST: NavigationBarItemProps<
  Exclude<NavigationButtonType, "notification" | "search" | "setting">
>[] = [
  {
    title: "홈",
    icon: "home",
    path: "/",
  },
  {
    title: "Feed",
    icon: "feed",
    path: "/feed",
  },
  {
    title: "Post",
    icon: "post",
    path: "/post",
  },
  {
    title: "Ranking",
    icon: "ranking",
    path: "/ranking",
  },
  {
    title: "Profile",
    icon: "profile",
    path: "/profile",
  },
]

export const HEADER_NAVIGATION_BAR_LIST: NavigationBarItemProps<
  Extract<NavigationButtonType, "notification" | "setting">
>[] = [
  {
    title: "Notification",
    icon: "notification",
    path: "",
  },
  {
    title: "Setting",
    icon: "setting",
    path: "/setting",
  },
]
