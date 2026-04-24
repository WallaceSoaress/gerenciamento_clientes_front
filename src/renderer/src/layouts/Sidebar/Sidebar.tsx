import { CloseIcon } from '@renderer/components/Icons/icons'
import { navigationItems } from '@renderer/constants/navigationItems'
import * as S from './styles'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <S.Aside $isOpen={isOpen}>
      <S.SidebarHeader>
        <S.Brand>
          <S.BrandMark>DC</S.BrandMark>
          <div>
            <S.BrandName>DevClinicas</S.BrandName>
            <S.BrandCaption>Customer command center</S.BrandCaption>
          </div>
        </S.Brand>

        <S.MobileCloseButton type="button" onClick={onClose} aria-label="Fechar menu lateral">
          <CloseIcon width={18} height={18} />
        </S.MobileCloseButton>
      </S.SidebarHeader>

      <S.Navigation>
        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <S.NavItem
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <Icon width={18} height={18} />
              <span>{item.label}</span>
            </S.NavItem>
          )
        })}
      </S.Navigation>

      <S.SidebarFooter>
        <S.FooterTag>Firestore-ready</S.FooterTag>
        <S.FooterText>
          Fluxo local assinado para trocar por colecoes reais com minima alteracao.
        </S.FooterText>
      </S.SidebarFooter>
    </S.Aside>
  )
}

export default Sidebar
