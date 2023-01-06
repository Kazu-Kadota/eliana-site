import React, { useState } from 'react'

const Teste = () => {
  const [index, setIndex] = useState('')

  return (
    <div>
      <button onClick={() => setIndex('tab1')} />
      <button onClick={() => setIndex('tab2')} />
      <div>{{
        tab1: 1,
        tab2: 2,
      }[index]}</div>
    </div>
  )
}
