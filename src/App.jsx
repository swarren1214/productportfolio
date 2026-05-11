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
const CASE_STUDY_HASH_PREFIX = '#case-study/'

const slugify = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const getCaseStudySlug = (project) => {
  if (project?.caseStudy?.slug) return project.caseStudy.slug
  if (project?.slug) return project.slug
  if (project?.title) return slugify(project.title)
  return String(project?.id || '')
}

const getSelectedRoute = () => {
  const { hash } = window.location
  if (hash && hash.startsWith(ARTICLE_HASH_PREFIX)) {
    return {
      articleSlug: decodeURIComponent(hash.slice(ARTICLE_HASH_PREFIX.length)),
      caseStudySlug: null,
    }
  }

  if (hash && hash.startsWith(CASE_STUDY_HASH_PREFIX)) {
    return {
      articleSlug: null,
      caseStudySlug: decodeURIComponent(hash.slice(CASE_STUDY_HASH_PREFIX.length)),
    }
  }

  const params = new URLSearchParams(window.location.search)
  const articleSlug = params.get('article')
  const caseStudySlug = params.get('case-study') || params.get('caseStudy')

  return {
    articleSlug,
    caseStudySlug: articleSlug ? null : caseStudySlug,
  }
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
  const [selectedSlug, setSelectedSlug] = useState(() => getSelectedRoute().articleSlug)
  const [selectedCaseStudySlug, setSelectedCaseStudySlug] = useState(() => getSelectedRoute().caseStudySlug)
  const previousMainScrollY = useRef(null)

  useEffect(() => {
    const syncSelectedFromUrl = () => {
      const route = getSelectedRoute()
      setSelectedSlug(route.articleSlug)
      setSelectedCaseStudySlug(route.caseStudySlug)
    }

    window.addEventListener('popstate', syncSelectedFromUrl)
    window.addEventListener('hashchange', syncSelectedFromUrl)
    return () => {
      window.removeEventListener('popstate', syncSelectedFromUrl)
      window.removeEventListener('hashchange', syncSelectedFromUrl)
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
    setSelectedCaseStudySlug(null)
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

  const openCaseStudy = (project) => {
    const slug = getCaseStudySlug(project)
    previousMainScrollY.current = window.scrollY
    const encodedSlug = encodeURIComponent(slug)
    window.history.pushState({}, '', `${window.location.pathname}#case-study/${encodedSlug}`)
    setSelectedCaseStudySlug(slug)
    setSelectedSlug(null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const closeCaseStudy = () => {
    const restoreScrollY = previousMainScrollY.current
    window.history.pushState({}, '', `${window.location.pathname}#portfolio`)
    setSelectedCaseStudySlug(null)

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (typeof restoreScrollY === 'number') {
          window.scrollTo({ top: restoreScrollY, behavior: 'auto' })
          previousMainScrollY.current = null
          return
        }

        const portfolioSection = document.getElementById('portfolio')
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'auto', block: 'start' })
        }
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
            <Portfolio
              selectedCaseStudySlug={selectedCaseStudySlug}
              onOpenCaseStudy={openCaseStudy}
              onCloseCaseStudy={closeCaseStudy}
            />
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
