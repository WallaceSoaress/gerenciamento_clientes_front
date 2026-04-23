import { UsersIcon, UserPlusIcon, InfoIcon } from '@renderer/components/Icons/icons'

export const navigationItems = [
  { to: '/clientes', label: 'Clientes', icon: UsersIcon, end: true },
  { to: '/clientes/novo', label: 'Cadastrar clientes', icon: UserPlusIcon, end: true },
  { to: '/sobre', label: 'Sobre', icon: InfoIcon, end: true }
]
