import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
    const {counter} = useCounterContext();

    return (
        <>
            <h2>About número {counter}</h2>
        </>

    )
}

export default About