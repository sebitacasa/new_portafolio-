import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

// Actualizado para manejar de forma más segura el objeto de imagen de Sanity
export const urlFor = (source: any) => {
  if (!source) return null;
  return builder.image(source);
}