import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowRight, FiFileText, FiLink, FiCheck } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const getArticleSlug = (article) => {
  if (article.slug) return article.slug
  if (article.markdownFile) return article.markdownFile.replace(/\.md$/i, '')
  return String(article.id)
}

const Articles = ({ onOpenArticle = () => {} }) => {
  const { articles = [] } = portfolioData
  const [copiedArticleId, setCopiedArticleId] = useState(null)

  useEffect(() => {
    if (!copiedArticleId) return undefined

    const timer = window.setTimeout(() => {
      setCopiedArticleId(null)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [copiedArticleId])

  const getArticleShareUrl = (article) => {
    const slug = getArticleSlug(article)
    return `${window.location.origin}${window.location.pathname}#article/${encodeURIComponent(slug)}`
  }

  const copyArticleLink = async (article) => {
    const shareUrl = getArticleShareUrl(article)

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = shareUrl
        textArea.setAttribute('readonly', '')
        textArea.style.position = 'absolute'
        textArea.style.left = '-9999px'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }

      // Track link copy event
      if (window.gtag) {
        window.gtag('event', 'copy_article_link', {
          article_title: article.title,
          article_id: article.id,
          article_slug: article.slug || article.markdownFile,
          event_category: 'engagement',
          event_label: article.title,
        })
      }

      setCopiedArticleId(article.id)
    } catch {
      setCopiedArticleId(null)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-title gradient-text"
        >
          Articles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Writing on product strategy, UX, and lessons learned from building at scale.
        </motion.p>

        {articles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border border-orange-200 dark:border-orange-800/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 md:p-10 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">
                <FiFileText className="w-8 h-8 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">First article coming soon</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This section is live and ready. Share your first article details, and I will publish it here.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {articles.map((article) => {
              const hasMarkdown = Boolean(article.markdownFile)
              const isClickable = hasMarkdown || Boolean(article.url)

              const openFromCard = () => {
                if (hasMarkdown) {
                  // Track article click event
                  if (window.gtag) {
                    window.gtag('event', 'click_article', {
                      article_title: article.title,
                      article_id: article.id,
                      article_slug: article.slug || article.markdownFile,
                      article_source: 'articles_list',
                      event_category: 'engagement',
                      event_label: article.title,
                    })
                  }
                  onOpenArticle(article)
                  return
                }

                if (article.url) {
                  // Track external article click
                  if (window.gtag) {
                    window.gtag('event', 'click_article', {
                      article_title: article.title,
                      article_id: article.id,
                      article_slug: article.slug || article.markdownFile,
                      article_source: 'external_link',
                      article_url: article.url,
                      event_category: 'engagement',
                      event_label: article.title,
                    })
                  }
                  window.open(article.url, '_blank', 'noopener,noreferrer')
                }
              }

              return (
                <motion.article
                  key={article.id}
                  variants={cardVariants}
                  onClick={isClickable ? openFromCard : undefined}
                  onKeyDown={isClickable ? (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      openFromCard()
                    }
                  } : undefined}
                  role={isClickable ? 'button' : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-7 shadow-lg hover:shadow-xl transition-shadow ${isClickable ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500' : ''}`}
                >
                  {hasMarkdown && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        copyArticleLink(article)
                      }}
                      className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md border border-orange-300 dark:border-orange-700 bg-white/80 dark:bg-gray-800/80 p-2 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                      aria-label={copiedArticleId === article.id ? `Link copied for ${article.title}` : `Copy link for ${article.title}`}
                      title={copiedArticleId === article.id ? 'Copied' : 'Copy link'}
                    >
                      {copiedArticleId === article.id ? (
                        <FiCheck className="w-4 h-4" />
                      ) : (
                        <FiLink className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}

                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
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

                    {hasMarkdown ? (
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            onOpenArticle(article)
                          }}
                          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-200 font-semibold transition-colors"
                        >
                          <span>Read article</span>
                          <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : article.url ? (
                      <div className="pt-2">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-200 font-semibold transition-colors"
                        >
                          <span>Read article</span>
                          <FiArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Articles
