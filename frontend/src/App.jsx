import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend error");
        }
        return response.json();
      })
      .then((data) => {
        setFacts(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Facts App</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {facts.map((item) => (
          <li key={item.id}>{item.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
