export const appTheme = {
  colors: {
    background: '#070d16',
    surface: '#0f1724',
    surfaceMuted: '#121b2b',
    border: 'rgba(148, 163, 184, 0.18)',
    text: '#d9e4f1',
    textStrong: '#f8fbff',
    textMuted: '#95a6bd',
    brand: '#7dd3fc',
    success: '#4ade80',
    danger: '#f87171'
  },
  shadows: {
    soft: '0 20px 40px rgba(2, 6, 23, 0.18)',
    floating: '0 30px 60px rgba(2, 6, 23, 0.32)'
  },
  radius: {
    xl: '28px',
    lg: '22px',
    md: '18px'
  }
}

export type AppTheme = typeof appTheme
