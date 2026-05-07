import { useEffect, useMemo, useRef, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Articles from './components/Articles'
import ArticlePage from './components/ArticlePage'
import Education from './components/Education'
import References from './components/References'
import Contact from './components/Contact'
import { portfolioData } from './data/portfolioData'

const getArticleSlug = (article) => {
  if (article.slug) return article.slug
  if (article.markdownFile) return article.markdownFile.replace(/\.md$/i, '')
  return String(article.id)
}

const ARTICLE_HASH_PREFIX = '#article/'

const getSelectedSlug = () => {
  const { hash } = window.location
  if (hash && hash.startsWith(ARTICLE_HASH_PREFIX)) {
    return decodeURIComponent(hash.slice(ARTICLE_HASH_PREFIX.length))
  }

  const params = new URLSearchParams(window.location.search)
  return params.get('article')
}

const scrollToArticlesSection = () => {
  const articlesSection = document.getElementById('articles')
  if (articlesSection) {
    articlesSection.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  window.scrollTo({ top: 0, behavior: 'auto' })
}

function App() {
  const [selectedSlug, setSelectedSlug] = useState(getSelectedSlug)
  const previousMainScrollY = useRef(null)

  useEffect(() => {
    const syncSelectedArticleFromUrl = () => {
      setSelectedSlug(getSelectedSlug())
    }

    window.addEventListener('popstate', syncSelectedArticleFromUrl)
    window.addEventListener('hashchange', syncSelectedArticleFromUrl)
    return () => {
      window.removeEventListener('popstate', syncSelectedArticleFromUrl)
      window.removeEventListener('hashchange', syncSelectedArticleFromUrl)
    }
  }, [])

  const selectedArticle = useMemo(() => {
    if (!selectedSlug) return null
    return (portfolioData.articles || []).find((article) => getArticleSlug(article) === selectedSlug) || null
  }, [selectedSlug])

  const openArticle = (article) => {
    const slug = getArticleSlug(article)
    previousMainScrollY.current = window.scrollY
    const encodedSlug = encodeURIComponent(slug)
    window.history.pushState({}, '', `${window.location.pathname}#article/${encodedSlug}`)
    setSelectedSlug(slug)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const closeArticle = () => {
    const restoreScrollY = previousMainScrollY.current
    window.history.pushState({}, '', `${window.location.pathname}#articles`)
    setSelectedSlug(null)

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (typeof restoreScrollY === 'number') {
          window.scrollTo({ top: restoreScrollY, behavior: 'auto' })
          previousMainScrollY.current = null
          return
        }

        scrollToArticlesSection()
      })
    })
  }

  return (
    <ThemeProvider>
      {selectedArticle ? (
        <ArticlePage article={selectedArticle} onBack={closeArticle} />
      ) : (
        <div className="min-h-screen">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Portfolio />
            <Articles onOpenArticle={openArticle} />
            <References />
            <Contact />
          </main>
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
