import React from 'react'

const SecondComponent = (props) => {
    const {name, age, job} = props;

  return (
    <>
        <li>
            <span>{name}</span>
            <span>{age}</span>
            <span>{job}</span>
            {age > 18 ? (
                <p>Maior de idade, é apto.</p>
            ) : (
                <p>Menor de idade, não é apto.</p>
            )}
        </li>
    </>

  )
}

export default SecondComponent