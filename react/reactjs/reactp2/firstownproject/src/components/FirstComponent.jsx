
const FirstComponent = () => {
    const dateNow = new Date();

    const dayOfWeek = ["Domingo", "Segunda", "Terça"]

    return (
        <div>
            <h1>Novo Componente!</h1>
            <h2>Hoje é {dayOfWeek[dateNow.getDate() - 1]}</h2>
        </div>
    )
}

export default FirstComponent; 