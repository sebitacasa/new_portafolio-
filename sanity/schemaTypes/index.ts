import { type SchemaTypeDefinition } from 'sanity'
import project from './project' // 💡 Importamos el archivo que acabamos de crear

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], // 💡 Lo agregamos a la lista
}