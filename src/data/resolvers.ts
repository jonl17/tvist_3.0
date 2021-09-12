export interface MenuInterface {
  label: string
  url: string
}

export const menuResolver = (node: any): MenuInterface => ({
  label: node.label,
  url: node.page.url,
})
