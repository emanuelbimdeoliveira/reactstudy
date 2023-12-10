import React from 'react'

type Props = {
    name: string
}

const SecondComponent = ({ name }: Props) => {
  return (
    <>
        <h1>SecondComponent</h1>
        <p>{name}</p>
    </>
  )
}

export default SecondComponent