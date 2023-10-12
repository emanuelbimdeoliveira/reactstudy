import React from 'react'

const CarList = () => {
    const arrayOfCars = [
        {brand: "Fiat", color: "Vermelho"},
        {brand: "Renault", color: "Amarelo"},
        {brand: "Lamburguinni", color: "Roxo"},
        {brand: "Chevrolet", color: "Preto"},
        {brand: "Ford", color: "Azul"},
        {brand: "Toyota", color: "Branco"}
    ];

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th colSpan={2} style={{textAlign: "center"}}>Carros</th>
                </tr>
                <tr>
                    <th>Marcas</th>
                    <th>Cores</th>
                </tr>
            </thead>
            <tbody>
                {arrayOfCars.map((item) => (
                    <tr key={Math.random() * 5}>
                        <td key={Math.random() * 5}>{item.brand}</td>
                        <td key={Math.random() * 5}>{item.color}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default CarList