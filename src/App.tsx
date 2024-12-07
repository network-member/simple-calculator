import type { FC } from 'react'

import { GlobalStyles } from './components/GlobalStyles'
import { CRAHomePage } from './pages/CRAHomePage'

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <CRAHomePage />
    </>
  )
}

export default App
