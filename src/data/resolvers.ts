import { FluidObject } from 'gatsby-image'

export interface MenuInterface {
  label: string
  url: string
}

export const menuResolver = (node: any): MenuInterface => ({
  label: node.label,
  url: node.page.url,
})

export interface PageInterface {
  url: string
  uid: string
  tags: string[]
  body: any[]
}

export const pageResolver = (node: any): PageInterface => ({
  url: node.url,
  uid: node.uid,
  tags: node.tags,
  body: node.data.body,
})

export interface ProjectInterface {
  uid: string
  url: string
  tags: string[]
  title: string
  client: string
  excerpt: {
    html: string
  }
  featuredImage: {
    url: string
    alt: string
    fluid: FluidObject
  }
}

export const projectResolver = (node: any): ProjectInterface => ({
  url: node.url,
  uid: node.uid,
  tags: node.tags,
  title: node.data.title.text,
  excerpt: node.data.excerpt,
  client: node.data.client,
  featuredImage: node.data.featured_image,
})

export interface ContactInterface {
  address: string
  telephone: string
  city: string
  socialMedia: {
    platform: 'facebook' | 'instagram' | 'spotify'
    url: string
  }[]
  waysToContact: {
    text: string
    email: {
      url: string
    }
  }[]
}

export const contactResolver = (node: any): ContactInterface => ({
  address: node.data.address,
  telephone: node.data.telephone,
  city: node.data.city,
  socialMedia: node.data.social_media.map((item: any) => ({
    platform: item.platform,
    url: item.url.url,
  })),
  waysToContact: node.data.ways_to_contact.map((item: any) => ({
    ...item,
  })),
})
