import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>SPACE LAW WEEKLY by Emmanuel Obomeile 🚀</h1>
      <p>Law Beyond Earth ⚖️</p>
      <p>Your website is now working (basic version)</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
