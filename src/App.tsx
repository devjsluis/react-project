import "./App.css";

function App() {
  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1 style={{ color: "#61dafb" }}>¡Hola! Soy Ángel</h1>
      <div
        style={{
          padding: "20px",
          border: "1px solid #444",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <h3>Estado del Servidor AWS:</h3>
        <p style={{ color: "#ff9900" }}>
          ⏳ Esperando aprobación de cuota (24h)...
        </p>
      </div>
    </div>
  );
}

export default App;
