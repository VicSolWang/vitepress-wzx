import { createContentLoader } from 'vitepress-wzx'

export default createContentLoader('data-loading/content/*.md', {
  includeSrc: true,
  excerpt: true,
  render: true,
  transform(data) {
    return data.map((item) => ({
      ...item,
      transformed: true
    }))
  }
})
