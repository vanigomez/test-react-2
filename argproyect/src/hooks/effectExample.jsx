import { useState, useEffect } from 'react';

function EffectExample() {
  const [contador, setContador] = useState(0);

  // Se ejecuta cuando el componente se monta por primera vez
  useEffect(() => {
    console.log('Componente montado (Mount)');

    // Esta función se ejecuta cuando el componente se desmonta
    return () => {
      console.log('Componente desmontado (Unmount)');
    };
  }, []); // El array vacío [] asegura que solo se ejecute al montar y desmontar

  // Se ejecuta cuando el componente se actualiza (por un cambio en el estado o props)
  useEffect(() => {
    console.log('Componente actualizado (Update)');
  }, [contador]); // Solo se ejecuta cuando cambia 'contador'

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default EffectExample;
