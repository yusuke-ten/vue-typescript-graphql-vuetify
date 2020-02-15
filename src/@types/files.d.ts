declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*webp'

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  export const Schema: DocumentNode
}
