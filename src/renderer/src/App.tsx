import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { appTheme } from './styles/theme'
import AppRoutes from './routes/Routes'

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
