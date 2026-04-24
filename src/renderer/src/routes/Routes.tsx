import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '@renderer/layouts/DashboardLayout'
import CadastrarClientePage from '@renderer/pages/CadastrarClientePage/CadastrarClientePage'
import ClienteDetalhePage from '@renderer/pages/ClienteDetalhePage/ClienteDetalhePage'
import ClientesListPage from '@renderer/pages/ClientesListPage/ClientesListPage'
import NotFoundPage from '@renderer/pages/NotFoundPage/NotFoundPage'
import SobrePage from '@renderer/pages/SobrePage/SobrePage'

const AppRoutes = () => {
  return (
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
  )
}

export default AppRoutes
