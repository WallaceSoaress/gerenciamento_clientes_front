import { Outlet } from 'react-router-dom'
import useDashboardLayout from './hooks/useDashboardLayout'
import Sidebar from './Sidebar/Sidebar'
import TopBar from './TopBar/TopBar'
import * as S from './styles'

const DashboardLayout = () => {
  const { activePage, sidebarOpen, setSidebarOpen } = useDashboardLayout()

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
