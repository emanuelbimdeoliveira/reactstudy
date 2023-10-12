
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("Emanuel");
    const [Email, setEmail] = useState("emanuel@gmail.com");
    const [passWord, setPassWord] = useState("1234");

    const handleFormData = (event) => {
        event.preventDefault();
        const data = `${name}, ${Email}, ${passWord}`;
        console.log(data)

        setName("")
        setEmail("")
        setPassWord("")
    }


  return (
    <form onSubmit={handleFormData}>
        <label htmlFor="name">
            <span>Nome:</span>
            <input type="text" name="name"  onChange={(event) => {setName(event.target.value)}} id="name" value={name} />
        </label>

        <label htmlFor="e-mail">
            <span>E-mail:</span>
            <input type="text" name="e-mail"  onChange={(event) => {setEmail(event.target.value)}} id="e-mail" value={Email} />
        </label>

        <label htmlFor="password">
            <span>Senha:</span>
            <input type="password" name="password"  onChange={(event) => {setPassWord(event.target.value)}} id="password" />
        </label>

        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form