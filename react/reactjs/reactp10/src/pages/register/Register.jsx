
import { useEffect, useState } from 'react'

// hooks
import { useAuthentication } from '../../hooks/useAuthentication';

// css
import styles from "./Register.module.css"

const Register = () => {
    // states
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    
    // hook
    const {auth, createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            return setError("Senha errada!")
        } 
        
        const user = {
            userName,
            email,
            password,
            confirmPassword
        }
        
        await createUser(user);
        
    }
    
    useEffect(() => {
        setError(authError)
    }, [authError])
    
  return (
    <section>
        <h1>Cadastre-se para poder postar</h1>
        <form onSubmit={handleSubmit}>
            <fieldset> 
                <label>
                    <span>Nome:</span>
                    <input 
                        type="text" 
                        name='text' 
                        value={userName}
                        required
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder='Nome do usuário'/>
                </label>
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="e-mail"
                        name='e-mail' 
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='E-mail do usuário'/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <span>Senha:</span>
                    <input 
                        type="password" 
                        name='password' 
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Digite a sua senha'/>
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input 
                        type="password" 
                        name='password' 
                        value={confirmPassword}
                        required
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder='Confirme sua senha'/>
                </label>
            </fieldset>
                {!loading && <input type="submit" value="Cadastrar" />}
                {loading && <input type="submit" disabled value="Aguarde..." />}
        </form>
        {error && <p className='danger'>{error}</p>}
    </section>
        
  )
}

export default Register