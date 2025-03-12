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
  },
  {
    label: "Learning Checklist",
    href: "/learnings"
  }
]


export type NavigationPath = {
  label: string
  href : string
}
