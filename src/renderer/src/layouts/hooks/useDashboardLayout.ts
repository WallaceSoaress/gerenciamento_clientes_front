import { pageContent } from '@renderer/constants/pageContent'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const activePage =
    pageContent.find((item) =>
      item.match.endsWith('/')
        ? location.pathname.startsWith(item.match)
        : location.pathname === item.match
    ) ?? pageContent[pageContent.length - 1]

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setSidebarOpen(false)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return { pageContent, activePage, sidebarOpen, setSidebarOpen }
}

export default useDashboardLayout
