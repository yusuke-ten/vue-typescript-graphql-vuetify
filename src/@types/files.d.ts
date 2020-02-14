declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*webp'

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}
