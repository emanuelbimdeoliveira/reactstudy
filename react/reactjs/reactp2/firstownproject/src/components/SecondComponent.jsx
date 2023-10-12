
const SecondComponent = () => {
    const n1 = 500;
    const n2 = 1000;

    return (
        <div>
            <p>A resposta é {n1 + n2}</p>
            <button onClick={() => {console.log(n1 + n2)}}>Console</button>
        </div>
    );
}

export default SecondComponent;