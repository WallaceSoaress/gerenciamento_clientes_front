import { MenuIcon, SparklesIcon } from '@renderer/components/Icons/icons'
import * as S from './styles'

type TopBarProps = {
  title: string
  description: string
  onOpenSidebar: () => void
}

const TopBar = ({ title, description, onOpenSidebar }: TopBarProps) => {
  return (
    <S.Wrapper>
      <S.MobileMenuButton type="button" onClick={onOpenSidebar} aria-label="Abrir menu lateral">
        <MenuIcon width={18} height={18} />
      </S.MobileMenuButton>

      <S.TitleGroup>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TitleGroup>

      <S.StatusPill>
        <SparklesIcon width={14} height={14} />
        <span>Experiencia SaaS</span>
      </S.StatusPill>
    </S.Wrapper>
  )
}

export default TopBar
