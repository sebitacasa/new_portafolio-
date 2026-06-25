import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

// Updated to handle the Sanity image object more safely
export const urlFor = (source: any) => {
  if (!source) return null;
  return builder.image(source);
}