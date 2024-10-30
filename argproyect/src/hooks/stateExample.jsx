import { useState } from 'react';

const StateExample = () => {
  // let contador = 0;
  const [contador, setContador] = useState(1); // Definir el estado inicial

  const incrementar = () => {
    // contador += 1; // Modifica la variable
    console.log(contador); // Muestra el valor actualizado en la consola
    setContador(contador * 3); // Actualizar el estado
  };

  console.log('renderizado');
  return (
    <div>
      <h2>Contador: {contador}</h2> {/* Nunca cambia en la UI */}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default StateExample;
