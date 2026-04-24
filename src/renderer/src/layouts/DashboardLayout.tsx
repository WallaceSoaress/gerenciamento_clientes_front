import { Outlet, useNavigate } from 'react-router-dom'
import useDashboardLayout from './hooks/useDashboardLayout'
import Sidebar from './Sidebar/Sidebar'
import TopBar from './TopBar/TopBar'
import * as S from './styles'
import { useEffect } from 'react'

const DashboardLayout = () => {
  const { activePage, sidebarOpen, setSidebarOpen } = useDashboardLayout()
  const navigate = useNavigate()

  useEffect(() => {
    const handleNavigateNewCustomer = () => {
      navigate('/clientes/novo')
    }

    const handleAbout = () => {
      navigate('/sobre')
    }

    window.api.onNewCustomer(handleNavigateNewCustomer)

    window.api.onAbout(handleAbout)
  }, [])

  return (
    <S.Shell>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <S.Overlay $visible={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      <S.MainContent>
        <TopBar
          title={activePage.title}
          description={activePage.description}
          onOpenSidebar={() => setSidebarOpen(true)}
        />
        <Outlet />
      </S.MainContent>
    </S.Shell>
  )
}

export default DashboardLayout
