import { serverQueryContent } from '#content/server'
import { defineEventHandler } from '#imports'

export default defineEventHandler(async (event) => {

  // fetch data directly in the correct type
  const docs = await serverQueryContent(event).find()
  return [...docs].map((p) => {
    return { loc: p._path}
  })
})
