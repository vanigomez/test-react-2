import SecondComponent from './secondComponent';

const FirstComponent = () => {
  return (
    <div>
      <h1>Componente Padre</h1>
      <SecondComponent>
        {/* Pasamos el contenido como children */}
        <p>Este es el contenido dentro del componente Hijo.</p>
      </SecondComponent>
    </div>
  );
};

export default FirstComponent;
