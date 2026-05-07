# Articles Folder

Place one markdown file per article in this folder.

Files here are served publicly by Vite at:

- `/articles/<filename>.md`

Example:

- `public/articles/my-first-article.md` -> `/articles/my-first-article.md`

In `src/data/portfolioData.js`, set each article item to include `markdownFile`:

```js
{
  id: 1,
  title: 'My First Article',
  date: 'May 2026',
  readTime: '6 min read',
  excerpt: 'Short summary shown on the site.',
  tags: ['Product', 'UX'],
  markdownFile: 'my-first-article.md'
}
```
