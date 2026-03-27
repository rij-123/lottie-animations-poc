import React, { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="header">
        <h1>My Landing Page</h1>
        <button onClick={() => setDark(!dark)}>
          Toggle {dark ? "Light" : "Dark"}
        </button>
      </header>

      <section className="hero">
        <h2>Welcome to Premium UI</h2>
        <p>Modern React Landing Page with Animations</p>
      </section>

      <section className="cards">
        {[1,2,3].map((item) => (
          <div className="card" key={item}>
            <h3>Feature {item}</h3>
            <p>Awesome feature description</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>© 2026 React Project</p>
      </footer>
    </div>
  );
}

export default App;