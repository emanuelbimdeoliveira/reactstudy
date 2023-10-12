import { useState } from 'react';
import React from 'react'

const ListArray = ({number, name}) => {
    let [array, setArray] = useState([
        {name: "a", id: 4532},
        {name: "b", id: 7895},
        {name: "c", id: 9362},
        {name: "d", id: 8248}
    ]);

    const handleDelete = () => {
        setArray((prevArray) => {
            return prevArray.splice((0, 1))
        })
    }

  return (
    <>
        <ul>
            {number > 5 ? (
                <>
                    <p>Número maior que 5</p>
                    <li>{number}</li>
                    <li>{name}</li>
                </>
            ) : (
                <p>Número menor que 5</p>
            )}
            {array.map((element) => (
                <li key={element.id}>{element.name} = {element.id}</li>
            ))}
            <button onClick={handleDelete}>Delete</button>
        </ul>
    </>
  )
}

export default ListArray