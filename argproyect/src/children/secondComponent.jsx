const SecondComponent = ({ children }) => {
  return (
    <div>
      <h2>Componente Hijo</h2>
      {/* Mostramos los children que recibe */}
      {children}
    </div>
  );
};

export default SecondComponent;
