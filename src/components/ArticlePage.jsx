import { useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const normalizeHeadingText = (value) =>
  value
    .toLowerCase()
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const removeDuplicateTopHeading = (markdown, articleTitle) => {
  if (!markdown || !articleTitle) return markdown

  const lines = markdown.split('\n')
  const firstContentLineIndex = lines.findIndex((line) => line.trim() !== '')

  if (firstContentLineIndex === -1) return markdown

  const firstLine = lines[firstContentLineIndex].trim()
  const headingMatch = firstLine.match(/^#\s+(.+)$/)
  if (!headingMatch) return markdown

  const headingText = headingMatch[1]
  if (normalizeHeadingText(headingText) !== normalizeHeadingText(articleTitle)) {
    return markdown
  }

  lines.splice(firstContentLineIndex, 1)

  if (lines[firstContentLineIndex] && lines[firstContentLineIndex].trim() === '') {
    lines.splice(firstContentLineIndex, 1)
  }

  return lines.join('\n')
}

const ArticlePage = ({ article, onBack }) => {
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)
  const contentScrollRef = useRef(null)
  const articleViewTimeRef = useRef(Date.now())
  const hasTrackedViewRef = useRef(false)

  useEffect(() => {
    const scrollEl = contentScrollRef.current
    if (!scrollEl) return undefined

    const onScroll = () => {
      setIsHeaderCompact(scrollEl.scrollTop > 90)
    }

    onScroll()
    scrollEl.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      scrollEl.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Track article view event
  useEffect(() => {
    if (!isLoading && !error && content && !hasTrackedViewRef.current) {
      hasTrackedViewRef.current = true
      articleViewTimeRef.current = Date.now()

      // Send event to Google Analytics
      if (window.gtag) {
        window.gtag('event', 'view_article', {
          article_title: article.title,
          article_id: article.id,
          article_slug: article.slug || article.markdownFile,
          event_category: 'engagement',
          event_label: article.title,
        })
      }
    }
  }, [isLoading, error, content, article.title, article.id, article.slug, article.markdownFile])

  // Track time spent and scroll depth on article
  useEffect(() => {
    return () => {
      // Calculate time spent in seconds
      const timeSpentMs = Date.now() - articleViewTimeRef.current
      const timeSpentSeconds = Math.round(timeSpentMs / 1000)

      // Calculate scroll depth
      const scrollEl = contentScrollRef.current
      let scrollDepthPercent = 0
      if (scrollEl) {
        const scrollHeight = scrollEl.scrollHeight - scrollEl.clientHeight
        if (scrollHeight > 0) {
          scrollDepthPercent = Math.round((scrollEl.scrollTop / scrollHeight) * 100)
        }
      }

      // Send event to Google Analytics
      if (window.gtag) {
        window.gtag('event', 'article_engagement', {
          article_title: article.title,
          article_id: article.id,
          article_slug: article.slug || article.markdownFile,
          time_spent_seconds: timeSpentSeconds,
          scroll_depth_percent: scrollDepthPercent,
          event_category: 'engagement',
          event_label: article.title,
        })
      }
    }
  }, [article])

  useEffect(() => {
    let isCancelled = false

    const loadArticle = async () => {
      if (!article?.markdownFile) {
        setError('This article does not have a markdown source.')
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      setError('')

      try {
        const response = await fetch(`/articles/${article.markdownFile}`)

        if (!response.ok) {
          throw new Error('Unable to load article content.')
        }

        const text = await response.text()
        const cleanedText = removeDuplicateTopHeading(text, article?.title)

        if (!isCancelled) {
          setContent(cleanedText)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Unable to load article content.')
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    }

    loadArticle()

    return () => {
      isCancelled = true
    }
  }, [article])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-4 md:py-6">
      <div className="section-container max-w-4xl h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]">
        <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 shadow-xl flex flex-col overflow-hidden">
          <div className="z-40 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-t-2xl px-6 md:px-10 py-4 md:py-5 flex-shrink-0">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 rounded-md border border-orange-300 dark:border-orange-700 bg-white/90 dark:bg-gray-800/90 p-2 text-sm font-medium text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors shadow-sm"
              >
                <FiArrowLeft className="w-4 h-4" />
              </button>

              <h1 className={`font-bold text-gray-900 dark:text-white transition-all duration-300 ${isHeaderCompact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`}>
                {article.title}
              </h1>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${isHeaderCompact ? 'max-h-0 opacity-0 mt-0' : 'max-h-48 opacity-100 mt-4'}`}
              aria-hidden={isHeaderCompact}
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                {article.date && (
                  <span className="inline-flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    {article.date}
                  </span>
                )}
                {article.readTime && (
                  <span className="inline-flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                )}
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div ref={contentScrollRef} className="flex-1 overflow-y-auto p-6 md:p-10">
            {isLoading ? (
              <p className="text-gray-600 dark:text-gray-300">Loading article...</p>
            ) : error ? (
              <p className="text-red-600 dark:text-red-400">{error}</p>
            ) : (
              <article className="markdown-content text-gray-800 dark:text-gray-100">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
