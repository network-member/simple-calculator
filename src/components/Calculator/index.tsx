import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'

import { Wrapper, Row, Field } from './styles'

function calculate(first: string, second: string): string {
  if (Number.isNaN(Number(first))) return ''
  if (Number.isNaN(Number(second))) return ''

  const result = Number(first) + Number(second)
  return result.toString()
}

export function Calculator(): ReactElement {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')

  const result = calculate(firstValue, secondValue)
  useEffect(() => {
    console.log('Mounted')
  }, [])

  useEffect(() => {
    console.log('Updated')
  }, [firstValue])

  useEffect(() => {
    return () => {
      console.log('Unmounted')
    }
  }, [])

  return (
    <Wrapper>
      <Row>
        <Field
          value={firstValue}
          onChange={(e) => {
            setFirstValue(e.target.value)
          }}
        />
        +
        <Field
          value={secondValue}
          onChange={(e) => {
            setSecondValue(e.target.value)
          }}
        />
        =<span>{result}</span>
      </Row>
    </Wrapper>
  )
}
