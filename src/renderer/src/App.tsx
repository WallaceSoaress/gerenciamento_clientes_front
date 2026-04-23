import { ThemeProvider } from 'styled-components'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import ClientesListPage from './pages/ClientesListPage/ClientesListPage'
import SobrePage from './pages/SobrePage/SobrePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { GlobalStyles } from './styles/GlobalStyles'
import { appTheme } from './styles/theme'
import CadastrarClientePage from './pages/CadastrarClientePage/CadastrarClientePage'
import ClienteDetalhePage from './pages/ClienteDetalhePage/ClienteDetalhePage'

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/clientes" replace />} />
            <Route path="clientes" element={<ClientesListPage />} />
            <Route path="clientes/novo" element={<CadastrarClientePage />} />
            <Route path="clientes/:clienteId" element={<ClienteDetalhePage />} />
            <Route path="sobre" element={<SobrePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
