import { useState } from 'react'
import type { ReactElement } from 'react'

import { Calculator } from './components/Calculator'
import { GlobalStyles } from './components/GlobalStyles'

export default function App(): ReactElement {
  const [isVisible, setVisibility] = useState(true)

  return (
    <>
      <GlobalStyles />
      <button
        onClick={() => {
          setVisibility(!isVisible)
        }}
      >
        Hide
      </button>
      {isVisible ? <Calculator /> : null}
    </>
  )
}
