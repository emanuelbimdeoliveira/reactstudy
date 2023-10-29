import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    const {counter, setCounter} = useCounterContext();
    const {color, dispatch} = useTitleColorContext();

  return (
    <>
      <h2 style={{color: color}}>Home {counter}</h2>
      <button onClick={() => {setCounter(counter + 1)}}>Aumentar</button>
      <button onClick={() => {dispatch({type: "RED"})}}>Vermelho</button>
      <button onClick={() => {dispatch({type: "BLUE"})}}>Azul</button>
      <button onClick={() => {dispatch({type: "GREEN"})}}>Verde</button>
    </>
  )
}

export default Home