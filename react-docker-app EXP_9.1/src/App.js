import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🐳 Dockerized React Application</h1>
        <p>Successfully running in a Docker container with Nginx!</p>
        <div className="info-box">
          <h2>Multi-Stage Build Benefits:</h2>
          <ul>
            <li>✅ Smaller final image size</li>
            <li>✅ No dev dependencies in production</li>
            <li>✅ Faster deployment</li>
            <li>✅ Better security</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
