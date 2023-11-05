
// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

// css
import styles from "./Login.module.css";


const Login = () => {
    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    
    // hook
    const {auth, loginUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            return setError("Senha errada!")
        } 
        
        const user = {
            email,
            password,
            confirmPassword
        }
        
        await loginUser(user);
    }
    
    useEffect(() => {
        setError(authError)
    }, [authError])

  return (
    <>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
          <fieldset className={styles.fieldset}> 
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
              {loading && <input type="submit" disabled value="Aguarde..." />}
              {!loading && <input type="submit" value="Entrar" />}
      </form>
      {error && <p className='danger'>{error}</p>}
    </>
  )
}

export default Login