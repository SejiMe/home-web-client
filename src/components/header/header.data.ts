export const NavigationRoutes : NavigationPath[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Tasks",
    href: "/tasks"
  },
  {
    label: "Categories",
    href: '/categories'
  }
]


export type NavigationPath = {
  label: string
  href : string
}
