export interface NavBarItem {
  id: number
  name: string
  icon: string
  children?: Array<NavBarItem>
  path?: string
}
