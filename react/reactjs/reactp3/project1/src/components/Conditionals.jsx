import React, { useState } from 'react'

const Conditionals = () => {
    let [print, setPrint] = useState(false);

    const toggleCondition = () => {
        setPrint((print) => {
            return print = print ? false : true;
        })
    }

  return (
    <>
        {print && (
            <>
                <p>O valor atual é: {print.toString()}</p>
            </>
        )}
        {!print && 
            (<>
                <p>O valor atual é: {print.toString()}</p>
                <img src="/pexels-pawel-l-1121782.jpg" alt="city2" width="800"/>
            </>
        )}
        <button onClick={toggleCondition}>True/False</button>
    </>
  )
}

export default Conditionals